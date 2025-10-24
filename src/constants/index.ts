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

// 애니메이션 상수
export const ANIMATIONS = {
  DURATION_FAST: 'duration-150',
  DURATION_NORMAL: 'duration-300',
  DURATION_SLOW: 'duration-500',
  EASE_OUT: 'ease-out',
  EASE_IN: 'ease-in',
} as const

// 레이아웃 상수
export const LAYOUT = {
  MAX_WIDTH: 'max-w-4xl',
  CONTAINER_CENTER: 'mx-auto',
  STICKY_TOP: 'top-[69px]',
} as const
