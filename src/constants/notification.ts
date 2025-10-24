/**
 * 알림 타입은 common.ts에서 import
 */
// import type { NotificationType } from '@/types/common'; // TODO: 향후 사용 예정

/**
 * 알림 타입 설정
 */
export const NOTIFICATION_TYPES = {
  like: {
    title: '좋아요 알림',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  comment: {
    title: '댓글 알림',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  follow: {
    title: '팔로우 알림',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  mention: {
    title: '멘션 알림',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
} as const;

/**
 * 알림 샘플 데이터
 */
export const SAMPLE_NOTIFICATIONS = [
  {
    id: '1',
    type: 'like' as const,
    message: '김개발님이 당신의 "React 프로젝트 완성!" 포스트를 좋아합니다',
    read: false,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    type: 'comment' as const,
    message: '박프론트님이 "TypeScript 질문있습니다"에 댓글을 남겼습니다',
    read: false,
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    type: 'follow' as const,
    message: '이백엔드님이 당신을 팔로우했습니다',
    read: true,
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    type: 'mention' as const,
    message: '최풀스택님이 댓글에서 당신을 멘션했습니다',
    read: true,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    type: 'like' as const,
    message: '정데이터님이 당신의 "Next.js 14 업데이트" 포스트를 좋아합니다',
    read: true,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
] as const;
