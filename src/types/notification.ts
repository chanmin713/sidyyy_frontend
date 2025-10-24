// 알림 타입은 common.ts에서 import
import type { NotificationType } from './common';

// 알림 인터페이스 (표시용)
export interface Notification {
  id: string;
  title: string;
  content: string;
  time: string;
  isRead: boolean;
  type: NotificationType;
}

// 알림 데이터 인터페이스 (저장용)
export interface NotificationData {
  id: string;
  type: NotificationType;
  message: string;
  read: boolean;
  timestamp: string;
}

// 알림 생성 입력 타입
export interface NotificationCreateInput {
  type: NotificationType;
  message: string;
  userId?: string;
}

// 알림 필터 타입
export interface NotificationFilters {
  type?: NotificationType[];
  read?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}
