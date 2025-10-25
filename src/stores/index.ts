// 기능별 스토어들
export * from './user';
export * from './ui';
export * from './data';

// 타입들
export type {
  UserState,
  SearchState,
  UIState,
  NotificationState,
  AppState,
} from './types';

// 편의를 위한 통합 훅들
import { useUserStore } from './user/useUserStore';
import { useSearchStore } from './data/useSearchStore';
import { useUIStore } from './ui/useUIStore';
import { useNotificationStore } from './data/useNotificationStore';

export const useUser = () => useUserStore();
export const useSearch = () => useSearchStore();
export const useUI = () => useUIStore();
export const useNotifications = () => useNotificationStore();
