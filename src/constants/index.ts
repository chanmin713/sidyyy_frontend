// 카테고리 상수
export const CATEGORIES = ['프로젝트', '질문', '리뷰', '팁', '이벤트'] as const

// 정렬 옵션
export const SORT_OPTIONS = {
  POPULAR: 'popular',
  LATEST: 'latest'
} as const

// 필터 옵션
export const FILTER_OPTIONS = {
  ALL: 'all',
  FOLLOWING: 'following'
} as const

// 타입 정의
export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS]
export type FilterOption = typeof FILTER_OPTIONS[keyof typeof FILTER_OPTIONS]
export type Category = typeof CATEGORIES[number]
