import type { Category } from '@/types';

// 기존 상수들
export const CATEGORIES: readonly Category[] = [
  '프로젝트',
  '질문',
  '리뷰',
  '팁',
  '이벤트',
] as const;

export const SORT_OPTIONS = {
  POPULAR: 'popular' as const,
  LATEST: 'latest' as const,
} as const;

export const FILTER_OPTIONS = {
  ALL: 'all' as const,
  FOLLOWING: 'following' as const,
} as const;

export const LAYOUT = {
  MAX_WIDTH: 'max-w-4xl',
  CONTAINER_CENTER: 'mx-auto',
  STICKY_TOP: 'top-[69px]',
} as const;

// 새로운 상수들
export * from './icons';
export * from './project';
export * from './notification';
export * from './ui';
