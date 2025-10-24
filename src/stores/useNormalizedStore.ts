import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  normalizeArray,
  addItem,
  updateItem,
  removeItem,
  removeItems,
  reorderItems,
  filterItems,
  sortItems,
  searchItems,
  paginateItems,
  type NormalizedState,
} from '@/utils';

// 기본 엔티티 타입
interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// 정규화된 스토어 상태
interface NormalizedStoreState<T extends BaseEntity> {
  // 정규화된 데이터
  data: NormalizedState<T>;

  // 로딩 상태
  loading: boolean;
  error: string | null;

  // 필터링 및 정렬
  filters: Record<string, any>;
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';

  // 검색
  searchQuery: string;
  searchFields: (keyof T)[];

  // 페이지네이션
  currentPage: number;
  pageSize: number;

  // 선택된 아이템들
  selectedIds: string[];

  // 액션들
  setData: (items: T[]) => void;
  addItem: (item: T) => void;
  updateItem: (id: string, updates: Partial<T>) => void;
  removeItem: (id: string) => void;
  removeItems: (ids: string[]) => void;
  reorderItems: (fromIndex: number, toIndex: number) => void;

  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  setFilters: (filters: Record<string, any>) => void;
  setSorting: (sortBy: string | null, sortOrder: 'asc' | 'desc') => void;
  setSearchQuery: (query: string) => void;
  setSearchFields: (fields: (keyof T)[]) => void;

  setPage: (page: number) => void;
  setPageSize: (size: number) => void;

  selectItem: (id: string) => void;
  deselectItem: (id: string) => void;
  selectAll: () => void;
  deselectAll: () => void;
  toggleSelection: (id: string) => void;

  // 계산된 값들
  getFilteredItems: () => T[];
  getSortedItems: () => T[];
  getSearchedItems: () => T[];
  getPaginatedItems: () => {
    items: T[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  getSelectedItems: () => T[];

  // 유틸리티
  getItemById: (id: string) => T | undefined;
  hasItem: (id: string) => boolean;
  getItemCount: () => number;
  getSelectedCount: () => number;
  isSelected: (id: string) => boolean;
  isAllSelected: () => boolean;
  isPartiallySelected: () => boolean;
}

/**
 * 정규화된 스토어 생성 함수
 * @param name - 스토어 이름
 * @param searchFields - 검색할 필드들
 * @param pageSize - 기본 페이지 크기
 * @returns 정규화된 스토어
 */
export function createNormalizedStore<T extends BaseEntity>(
  name: string,
  searchFields: (keyof T)[] = [],
  pageSize: number = 20
) {
  return create<NormalizedStoreState<T>>()(
    devtools(
      (set, get) => ({
        // 초기 상태
        data: { byId: {}, allIds: [] },
        loading: false,
        error: null,
        filters: {},
        sortBy: null,
        sortOrder: 'asc',
        searchQuery: '',
        searchFields,
        currentPage: 0,
        pageSize,
        selectedIds: [],

        // 데이터 액션들
        setData: items => {
          const normalizedData = normalizeArray(items, item => item.id);
          set({ data: normalizedData, error: null });
        },

        addItem: item => {
          set(state => ({
            data: addItem(state.data, item, item => item.id),
            error: null,
          }));
        },

        updateItem: (id, updates) => {
          set(state => ({
            data: updateItem(state.data, id, updates),
            error: null,
          }));
        },

        removeItem: id => {
          set(state => ({
            data: removeItem(state.data, id),
            selectedIds: state.selectedIds.filter(
              selectedId => selectedId !== id
            ),
          }));
        },

        removeItems: ids => {
          set(state => ({
            data: removeItems(state.data, ids),
            selectedIds: state.selectedIds.filter(
              selectedId => !ids.includes(selectedId)
            ),
          }));
        },

        reorderItems: (fromIndex, toIndex) => {
          set(state => ({
            data: reorderItems(state.data, fromIndex, toIndex),
          }));
        },

        // 상태 액션들
        setLoading: loading => set({ loading }),
        setError: error => set({ error }),

        // 필터링 및 정렬
        setFilters: filters => set({ filters, currentPage: 0 }),
        setSorting: (sortBy, sortOrder) =>
          set({ sortBy, sortOrder, currentPage: 0 }),
        setSearchQuery: query => set({ searchQuery: query, currentPage: 0 }),
        setSearchFields: fields => set({ searchFields: fields }),

        // 페이지네이션
        setPage: page => set({ currentPage: page }),
        setPageSize: size => set({ pageSize: size, currentPage: 0 }),

        // 선택 관리
        selectItem: id => {
          set(state => ({
            selectedIds: state.selectedIds.includes(id)
              ? state.selectedIds
              : [...state.selectedIds, id],
          }));
        },

        deselectItem: id => {
          set(state => ({
            selectedIds: state.selectedIds.filter(
              selectedId => selectedId !== id
            ),
          }));
        },

        selectAll: () => {
          const state = get();
          const allIds = state.getFilteredItems().map(item => item.id);
          set({ selectedIds: allIds });
        },

        deselectAll: () => set({ selectedIds: [] }),

        toggleSelection: id => {
          const state = get();
          if (state.isSelected(id)) {
            state.deselectItem(id);
          } else {
            state.selectItem(id);
          }
        },

        // 계산된 값들
        getFilteredItems: () => {
          const state = get();
          return filterItems(state.data, item => {
            return Object.entries(state.filters).every(([key, value]) => {
              if (value === null || value === undefined || value === '')
                return true;
              const itemValue = item[key as keyof T];
              if (typeof itemValue === 'string') {
                return itemValue.toLowerCase().includes(value.toLowerCase());
              }
              return itemValue === value;
            });
          });
        },

        getSortedItems: () => {
          const state = get();
          const filteredItems = state.getFilteredItems();

          if (!state.sortBy) return filteredItems;

          return sortItems(
            {
              byId: state.data.byId,
              allIds: filteredItems.map(item => item.id),
            },
            (a, b) => {
              const aValue = a[state.sortBy as keyof T];
              const bValue = b[state.sortBy as keyof T];

              if (aValue < bValue) return state.sortOrder === 'asc' ? -1 : 1;
              if (aValue > bValue) return state.sortOrder === 'asc' ? 1 : -1;
              return 0;
            }
          );
        },

        getSearchedItems: () => {
          const state = get();
          const sortedItems = state.getSortedItems();

          if (!state.searchQuery) return sortedItems;

          return searchItems(
            { byId: state.data.byId, allIds: sortedItems.map(item => item.id) },
            state.searchQuery,
            state.searchFields
          );
        },

        getPaginatedItems: () => {
          const state = get();
          const searchedItems = state.getSearchedItems();

          return paginateItems(
            {
              byId: state.data.byId,
              allIds: searchedItems.map(item => item.id),
            },
            state.currentPage,
            state.pageSize
          );
        },

        getSelectedItems: () => {
          const state = get();
          return state.selectedIds
            .map(id => state.data.byId[id])
            .filter((item): item is T => item !== undefined);
        },

        // 유틸리티
        getItemById: id => {
          const state = get();
          return state.data.byId[id];
        },

        hasItem: id => {
          const state = get();
          return id in state.data.byId;
        },

        getItemCount: () => {
          const state = get();
          return state.data.allIds.length;
        },

        getSelectedCount: () => {
          const state = get();
          return state.selectedIds.length;
        },

        isSelected: id => {
          const state = get();
          return state.selectedIds.includes(id);
        },

        isAllSelected: () => {
          const state = get();
          const filteredItems = state.getFilteredItems();
          return (
            filteredItems.length > 0 &&
            filteredItems.every(item => state.selectedIds.includes(item.id))
          );
        },

        isPartiallySelected: () => {
          const state = get();
          const filteredItems = state.getFilteredItems();
          const selectedCount = filteredItems.filter(item =>
            state.selectedIds.includes(item.id)
          ).length;

          return selectedCount > 0 && selectedCount < filteredItems.length;
        },
      }),
      { name }
    )
  );
}
