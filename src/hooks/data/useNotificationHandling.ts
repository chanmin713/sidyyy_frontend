import { useMemo } from 'react';
import { getNotificationTitle } from '@/utils';
import { formatTimestamp } from '@/utils';
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
      title: getNotificationTitle(notification.type),
      content: notification.content,
      time: formatTimestamp(notification.time),
      isRead: notification.isRead,
      type: notification.type,
    }));
  }, [notifications]);

  return {
    displayNotifications,
  };
};
