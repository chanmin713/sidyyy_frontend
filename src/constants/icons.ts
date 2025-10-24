import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  VercelLogoIcon,
  HeartIcon,
  ChatBubbleIcon,
  PersonIcon,
  ExclamationTriangleIcon,
  BellIcon,
} from '@radix-ui/react-icons';

/**
 * 프로젝트 로고 아이콘 매핑
 */
export const PROJECT_ICONS = {
  VercelLogoIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  FigmaLogoIcon,
  InstagramLogoIcon,
} as const;

/**
 * 알림 아이콘 매핑
 */
export const NOTIFICATION_ICONS = {
  like: HeartIcon,
  comment: ChatBubbleIcon,
  follow: PersonIcon,
  mention: ExclamationTriangleIcon,
  default: BellIcon,
} as const;

/**
 * 아이콘 크기 상수
 */
export const ICON_SIZES = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
} as const;
