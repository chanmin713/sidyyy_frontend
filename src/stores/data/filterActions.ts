import type { BaseEntity } from './types';

export function createFilterActions<T extends BaseEntity>() {
  return {
    setFilters: (filters: Record<string, any>) => (set: any) =>
      set({
        filters,
        currentPage: 0,
      }),

    setSorting:
      (sortBy: string | null, sortOrder: 'asc' | 'desc') => (set: any) =>
        set({
          sortBy,
          sortOrder,
          currentPage: 0,
        }),

    setSearchQuery: (query: string) => (set: any) =>
      set({
        searchQuery: query,
        currentPage: 0,
      }),

    setSearchFields: (fields: (keyof T)[]) => (set: any) =>
      set({
        searchFields: fields,
      }),

    setPage: (page: number) => (set: any) =>
      set({
        currentPage: page,
      }),

    setPageSize: (size: number) => (set: any) =>
      set({
        pageSize: size,
        currentPage: 0,
      }),
  };
}
