// 알림 관련 타입
export interface Notification {
  id: string;
  title: string;
  content: string;
  time: string;
  isRead: boolean;
  type: 'like' | 'comment' | 'follow' | 'mention';
}
