/**
 * 알림 관련 유틸리티 함수들
 */

import React from 'react';
import {
  HeartIcon,
  ChatBubbleIcon,
  PersonIcon,
  SpeakerLoudIcon,
  BellIcon,
} from '@radix-ui/react-icons';

/**
 * 알림 타입에 따른 아이콘 컴포넌트 반환
 * @param type - 알림 타입
 * @returns 아이콘 컴포넌트
 */
export const getNotificationIcon = (
  type: string
): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    like: HeartIcon,
    comment: ChatBubbleIcon,
    follow: PersonIcon,
    mention: SpeakerLoudIcon,
    system: BellIcon,
  };

  return iconMap[type] || BellIcon;
};

/**
 * 알림 타입에 따른 제목 반환
 * @param type - 알림 타입
 * @returns 알림 제목
 */
export const getNotificationTitle = (type: string): string => {
  const titleMap: Record<string, string> = {
    like: '좋아요',
    comment: '댓글',
    follow: '팔로우',
    mention: '멘션',
    system: '시스템',
  };

  return titleMap[type] || '알림';
};

/**
 * 타임스탬프를 포맷팅
 * @param timestamp - 타임스탬프 문자열
 * @returns 포맷된 시간 문자열
 */
export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;

  return date.toLocaleDateString('ko-KR');
};
