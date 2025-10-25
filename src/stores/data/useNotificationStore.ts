import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { NotificationState } from '../types';
import { SAMPLE_NOTIFICATIONS } from '@/constants/notification';

// 헬퍼 함수들
const getNotificationTitle = (type: string): string => {
  const titles = {
    like: '좋아요 알림',
    comment: '댓글 알림',
    follow: '팔로우 알림',
    mention: '멘션 알림',
  };
  return titles[type as keyof typeof titles] || '알림';
};

const formatTimestamp = (timestamp: string): string => {
  const now = new Date();
  const notificationTime = new Date(timestamp);
  const diffInMinutes = Math.floor(
    (now.getTime() - notificationTime.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return '방금 전';
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}시간 전`;
  return `${Math.floor(diffInMinutes / 1440)}일 전`;
};

export const useNotificationStore = create<NotificationState>()(
  devtools(
    set => ({
      notifications: SAMPLE_NOTIFICATIONS.map(notification => ({
        id: notification.id,
        type: notification.type,
        title: getNotificationTitle(notification.type),
        content: notification.message,
        time: formatTimestamp(notification.timestamp),
        isRead: notification.read,
      })),
      unreadCount: SAMPLE_NOTIFICATIONS.filter(n => !n.read).length,

      addNotification: notification =>
        set(state => {
          const newNotification = {
            ...notification,
            id: Date.now().toString(),
            isRead: false,
          };
          return {
            notifications: [newNotification, ...state.notifications],
            unreadCount: state.unreadCount + 1,
          };
        }),

      markAsRead: id =>
        set(state => ({
          notifications: state.notifications.map(notif =>
            notif.id === id ? { ...notif, isRead: true } : notif
          ),
          unreadCount: Math.max(0, state.unreadCount - 1),
        })),

      markAllAsRead: () =>
        set(state => ({
          notifications: state.notifications.map(notif => ({
            ...notif,
            isRead: true,
          })),
          unreadCount: 0,
        })),

      clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
    }),
    {
      name: 'notification-store',
    }
  )
);
