import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { SearchState } from '../types';

const initialFilters = {
  category: [],
  sortBy: 'popular' as const,
  filterBy: 'all' as const,
};

export const useSearchStore = create<SearchState>()(
  devtools(
    set => ({
      query: '',
      filters: initialFilters,
      setQuery: query => set({ query }),
      setFilters: newFilters =>
        set(state => ({
          filters: { ...state.filters, ...newFilters },
        })),
      clearSearch: () =>
        set({
          query: '',
          filters: initialFilters,
        }),
    }),
    {
      name: 'search-store',
    }
  )
);
