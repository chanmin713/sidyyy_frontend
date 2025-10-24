import { PROJECT_ICONS, NOTIFICATION_ICONS } from '@/constants/icons';
import type { NotificationType } from '@/types/common';

/**
 * 프로젝트 로고 아이콘을 반환합니다
 * @param logoName - 프로젝트 로고 이름
 * @returns React 컴포넌트
 */
export const getProjectLogo = (logoName?: string) => {
  if (!logoName) return PROJECT_ICONS.GitHubLogoIcon;

  const IconComponent = PROJECT_ICONS[logoName as keyof typeof PROJECT_ICONS];
  return IconComponent || PROJECT_ICONS.GitHubLogoIcon;
};

/**
 * 알림 타입에 따른 아이콘을 반환합니다
 * @param type - 알림 타입
 * @returns React 컴포넌트
 */
export const getNotificationIcon = (type: NotificationType) => {
  const IconComponent = NOTIFICATION_ICONS[type];
  return IconComponent || NOTIFICATION_ICONS.default;
};

/**
 * 알림 아이콘 클래스를 반환합니다
 * @param type - 알림 타입
 * @returns CSS 클래스 문자열
 */
export const getNotificationIconClass = (type: string): string => {
  const iconClasses = {
    like: 'w-4 h-4 text-red-500',
    comment: 'w-4 h-4 text-blue-500',
    follow: 'w-4 h-4 text-green-500',
    mention: 'w-4 h-4 text-orange-500',
    default: 'w-4 h-4 text-gray-500',
  };
  return iconClasses[type as keyof typeof iconClasses] || iconClasses.default;
};
