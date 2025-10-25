// import type { BaseEntity } from './types';

export function createSelectionActions() {
  return {
    selectItem: (id: string) => (set: any, get: any) => {
      const state = get();
      set({
        selectedIds: state.selectedIds.includes(id)
          ? state.selectedIds
          : [...state.selectedIds, id],
      });
    },

    deselectItem: (id: string) => (set: any, get: any) => {
      const state = get();
      set({
        selectedIds: state.selectedIds.filter(selectedId => selectedId !== id),
      });
    },

    selectAll: () => (set: any, get: any) => {
      const state = get();
      const allIds = state.getFilteredItems().map(item => item.id);
      set({ selectedIds: allIds });
    },

    deselectAll: () => (set: any) => set({ selectedIds: [] }),

    toggleSelection: (id: string) => (set: any, get: any) => {
      const state = get();
      if (state.isSelected(id)) {
        state.deselectItem(id);
      } else {
        state.selectItem(id);
      }
    },
  };
}
