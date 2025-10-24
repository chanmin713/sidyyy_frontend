/**
 * 프로필 크기
 */
export type ProfileSize = 'sm' | 'md' | 'lg';

/**
 * 프로필 크기별 스타일
 */
export const PROFILE_SIZE_STYLES = {
  sm: {
    container: 'w-6 h-6',
    icon: 'w-3 h-3',
    name: 'text-xs',
    role: 'text-xs',
  },
  md: {
    container: 'w-8 h-8',
    icon: 'w-4 h-4',
    name: 'text-sm',
    role: 'text-xs',
  },
  lg: {
    container: 'w-10 h-10',
    icon: 'w-5 h-5',
    name: 'text-base',
    role: 'text-sm',
  },
} as const;

/**
 * 애니메이션 지속 시간
 */
export const ANIMATION_DURATION = {
  fast: 'duration-150',
  normal: 'duration-200',
  slow: 'duration-300',
  slower: 'duration-500',
} as const;

/**
 * 트랜지션 클래스
 */
export const TRANSITIONS = {
  colors: 'transition-colors',
  transform: 'transition-transform',
  all: 'transition-all',
  opacity: 'transition-opacity',
} as const;

/**
 * 호버 효과
 */
export const HOVER_EFFECTS = {
  scale: 'hover:scale-105',
  scale110: 'hover:scale-110',
  shadow: 'hover:shadow-md',
  shadowLg: 'hover:shadow-lg',
  bgGray: 'hover:bg-gray-50',
  bgBlue: 'hover:bg-blue-50',
} as const;
