import {
  normalizeArray,
  addItem,
  updateItem,
  removeItem,
  removeItems,
  reorderItems,
} from '@/utils';
import type { BaseEntity } from './types';

export function createDataActions<T extends BaseEntity>() {
  return {
    setData: (items: T[]) => (set: any) => {
      const normalizedData = normalizeArray(items, item => item.id);
      set({ data: normalizedData, error: null });
    },

    addItem: (item: T) => (set: any, get: any) => {
      const state = get();
      set({
        data: addItem(state.data, item, item => item.id),
        error: null,
      });
    },

    updateItem: (id: string, updates: Partial<T>) => (set: any, get: any) => {
      const state = get();
      set({
        data: updateItem(state.data, id, updates),
        error: null,
      });
    },

    removeItem: (id: string) => (set: any, get: any) => {
      const state = get();
      set({
        data: removeItem(state.data, id),
        selectedIds: state.selectedIds.filter(
          (selectedId: string) => selectedId !== id
        ),
      });
    },

    removeItems: (ids: string[]) => (set: any, get: any) => {
      const state = get();
      set({
        data: removeItems(state.data, ids),
        selectedIds: state.selectedIds.filter(
          (selectedId: string) => !ids.includes(selectedId)
        ),
      });
    },

    reorderItems:
      (fromIndex: number, toIndex: number) => (set: any, get: any) => {
        const state = get();
        set({
          data: reorderItems(state.data, fromIndex, toIndex),
        });
      },

    setLoading: (loading: boolean) => (set: any) => set({ loading }),
    setError: (error: string | null) => (set: any) => set({ error }),
  };
}
