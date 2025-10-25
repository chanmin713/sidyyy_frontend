/**
 * 네비게이션 관련 상수들
 */

export const NAVIGATION_TABS = [
  { id: 'home', label: '로그', path: '/log' },
  { id: 'project', label: '프로젝트', path: '/project' },
  { id: 'recruit', label: '모집', path: '/recruit' },
  { id: 'member', label: '멤버', path: '/member' },
] as const;

export const NAVIGATION_PATHS = {
  HOME: '/',
  LOG: '/log',
  PROJECT: '/project',
  RECRUIT: '/recruit',
  MEMBER: '/member',
  MESSAGE: '/message',
  PROFILE: '/profile',
} as const;

export type NavigationTabId = (typeof NAVIGATION_TABS)[number]['id'];
export type NavigationPath =
  (typeof NAVIGATION_PATHS)[keyof typeof NAVIGATION_PATHS];
