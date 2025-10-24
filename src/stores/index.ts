// 개별 스토어들
import { useUserStore } from './useUserStore';
import { useSearchStore } from './useSearchStore';
import { useUIStore } from './useUIStore';
import { useNotificationStore } from './useNotificationStore';

// 타입들
export type {
  UserState,
  SearchState,
  UIState,
  NotificationState,
  AppState,
} from './types';

// 개별 스토어들 export
export { useUserStore, useSearchStore, useUIStore, useNotificationStore };

// 편의를 위한 통합 훅들
export const useUser = () => useUserStore();
export const useSearch = () => useSearchStore();
export const useUI = () => useUIStore();
export const useNotifications = () => useNotificationStore();
