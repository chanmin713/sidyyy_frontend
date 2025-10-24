/**
 * 프로젝트 상태 타입은 common.ts에서 import
 */
// import type { ProjectStatus } from '@/types/common'; // TODO: 향후 사용 예정

/**
 * 프로젝트 상태 설정
 */
export const PROJECT_STATUS_CONFIG = {
  active: {
    text: '진행 중',
    color: 'bg-green-100 text-green-800',
    icon: '🟢',
  },
  completed: {
    text: '완료',
    color: 'bg-blue-100 text-blue-800',
    icon: '✅',
  },
  paused: {
    text: '일시 중단',
    color: 'bg-yellow-100 text-yellow-800',
    icon: '⏸️',
  },
} as const;

/**
 * 프로젝트 카테고리
 */
export const PROJECT_CATEGORIES = [
  'Sidyyy',
  'DevTools',
  'CodeShare',
  'TechBlog',
] as const;

/**
 * 프로젝트 태그
 */
export const PROJECT_TAGS = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Vue.js',
  'Next.js',
  'Docker',
  'AWS',
  'MongoDB',
  'PostgreSQL',
] as const;
