// 기존 함수들은 분리된 유틸리티에서 import
export { getNotificationIcon, getNotificationIconClass } from './iconUtils';

/**
 * 알림 타입에 따른 제목을 반환합니다
 * @param type - 알림 타입
 * @returns 알림 제목
 */
export const getNotificationTitle = (type: string): string => {
  switch (type) {
    case 'like':
      return '좋아요 알림';
    case 'comment':
      return '댓글 알림';
    case 'follow':
      return '팔로우 알림';
    case 'mention':
      return '멘션 알림';
    default:
      return '알림';
  }
};

/**
 * 알림 타입에 따른 색상을 반환합니다
 * @param type - 알림 타입
 * @returns Tailwind CSS 클래스
 */
export const getNotificationColor = (type: string): string => {
  switch (type) {
    case 'like':
      return 'text-red-500';
    case 'comment':
      return 'text-blue-500';
    case 'follow':
      return 'text-green-500';
    case 'mention':
      return 'text-orange-500';
    default:
      return 'text-gray-500';
  }
};
