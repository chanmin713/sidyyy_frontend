// import type { BaseEntity } from './types';

export function createUtilities() {
  return {
    getItemById: (id: string) => (get: any) => {
      const state = get();
      return state.data.byId[id];
    },

    hasItem: (id: string) => (get: any) => {
      const state = get();
      return id in state.data.byId;
    },

    getItemCount: () => (get: any) => {
      const state = get();
      return state.data.allIds.length;
    },

    getSelectedCount: () => (get: any) => {
      const state = get();
      return state.selectedIds.length;
    },

    isSelected: (id: string) => (get: any) => {
      const state = get();
      return state.selectedIds.includes(id);
    },

    isAllSelected: () => (get: any) => {
      const state = get();
      const filteredItems = state.getFilteredItems();
      return (
        filteredItems.length > 0 &&
        filteredItems.every(item => state.selectedIds.includes(item.id))
      );
    },

    isPartiallySelected: () => (get: any) => {
      const state = get();
      const filteredItems = state.getFilteredItems();
      const selectedCount = filteredItems.filter(item =>
        state.selectedIds.includes(item.id)
      ).length;

      return selectedCount > 0 && selectedCount < filteredItems.length;
    },
  };
}
