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
  // 컨테이너 너비
  MAX_WIDTH: 'max-w-4xl',
  CONTAINER_CENTER: 'mx-auto',

  // 스티키 헤더
  STICKY_TOP: 'top-[69px]',

  // 페이지별 일관된 패딩
  PAGE_PADDING: 'px-4',
  PAGE_PADDING_MD: 'md:px-6',
  PAGE_PADDING_LG: 'lg:px-8',

  // 콘텐츠 패딩
  CONTENT_PADDING: 'px-container-padding',
  CONTENT_PADDING_Y: 'py-6',

  // 카드 패딩
  CARD_PADDING: 'px-card-padding',

  // 구분선 스타일
  DIVIDER: 'border-b border-gray-200',
  DIVIDER_MARGIN: 'mt-6',

  // 페이지별 컨테이너 클래스
  PAGE_CONTAINER: 'w-full px-4 py-6',
  PAGE_CONTAINER_CENTERED: 'w-full max-w-4xl mx-auto px-4 py-20',

  // 로그 페이지 전용
  LOG_PAGE_CONTAINER: 'w-full max-w-4xl mx-auto',
  LOG_PAGE_CONTENT: 'px-container-padding',
} as const;

// 새로운 상수들
export * from './icons';
export * from './project';
export * from './notification';
export * from './ui';
