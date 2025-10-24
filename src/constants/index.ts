import type { Category } from '@/types'

// 카테고리 상수
export const CATEGORIES: readonly Category[] = ['프로젝트', '질문', '리뷰', '팁', '이벤트'] as const

// 정렬 옵션
export const SORT_OPTIONS = {
  POPULAR: 'popular' as const,
  LATEST: 'latest' as const
} as const

// 필터 옵션
export const FILTER_OPTIONS = {
  ALL: 'all' as const,
  FOLLOWING: 'following' as const
} as const

// UI 상수
export const SPACING = {
  CARD_PADDING: 'px-[44px]',
  CONTAINER_PADDING: 'px-6',
  HEADER_PADDING: 'py-3',
  HEADER_HEIGHT: 'h-16'
} as const

export const COLORS = {
  PRIMARY: 'text-gray-900',
  SECONDARY: 'text-gray-500',
  MUTED: 'text-muted-foreground',
  HOVER: 'hover:text-gray-900'
} as const

export const SIZES = {
  ICON_SM: 'w-4 h-4',
  ICON_MD: 'w-5 h-5',
  ICON_LG: 'w-6 h-6',
  AVATAR: 'w-9 h-9'
} as const
