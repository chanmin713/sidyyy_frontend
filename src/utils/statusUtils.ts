import type { ProjectStatus } from '@/types/common';

/**
 * 프로젝트 상태에 따른 색상을 반환합니다
 * @param status - 프로젝트 상태
 * @returns CSS 클래스 문자열
 */
export const getProjectStatusColor = (status: ProjectStatus): string => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    paused: 'bg-yellow-100 text-yellow-800',
  };
  return statusColors[status] || 'bg-gray-100 text-gray-800';
};

/**
 * 프로젝트 상태에 따른 텍스트를 반환합니다
 * @param status - 프로젝트 상태
 * @returns 상태 텍스트
 */
export const getProjectStatusText = (status: ProjectStatus): string => {
  const statusTexts = {
    active: '진행 중',
    completed: '완료',
    paused: '일시 중단',
  };
  return statusTexts[status] || status;
};

/**
 * 프로젝트 상태에 따른 아이콘을 반환합니다
 * @param status - 프로젝트 상태
 * @returns 상태 아이콘 이모지
 */
export const getProjectStatusIcon = (status: ProjectStatus): string => {
  const statusIcons = {
    active: '🟢',
    completed: '✅',
    paused: '⏸️',
  };
  return statusIcons[status] || '⚪';
};
