import { useMemo } from 'react';
import type { NotificationState } from '@/stores/types';

/**
 * 알림 데이터를 표시용으로 변환하는 훅
 * @param notifications - 원본 알림 데이터
 * @returns 변환된 알림 데이터
 */
export const useNotificationHandling = (
  notifications: NotificationState['notifications']
) => {
  const displayNotifications = useMemo(() => {
    return notifications.map(notification => ({
      id: notification.id,
      title: notification.title, // 이미 포맷된 제목을 그대로 사용
      content: notification.content,
      time: notification.time, // 이미 포맷된 시간을 그대로 사용
      isRead: notification.isRead,
      type: notification.type,
    }));
  }, [notifications]);

  return {
    displayNotifications,
  };
};
