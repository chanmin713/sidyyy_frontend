import { filterItems, sortItems, searchItems, paginateItems } from '@/utils';
import type { BaseEntity } from './types';

export function createSelectors<T extends BaseEntity>() {
  return {
    getFilteredItems: () => (get: any) => {
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

    getSortedItems: () => (get: any) => {
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

    getSearchedItems: () => (get: any) => {
      const state = get();
      const sortedItems = state.getSortedItems();

      if (!state.searchQuery) return sortedItems;

      return searchItems(
        { byId: state.data.byId, allIds: sortedItems.map(item => item.id) },
        state.searchQuery,
        state.searchFields
      );
    },

    getPaginatedItems: () => (get: any) => {
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

    getSelectedItems: () => (get: any) => {
      const state = get();
      return state.selectedIds
        .map(id => state.data.byId[id])
        .filter((item): item is T => item !== undefined);
    },
  };
}
