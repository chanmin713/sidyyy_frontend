import React from 'react';
import { PersonIcon, FileTextIcon } from '@radix-ui/react-icons';
import {
  popularProjects,
  recommendedMembers,
  popularLogs,
} from '@/data/sidebarData';

export interface SidebarConfig {
  title: string;
  icon: React.ReactNode;
  data: any[];
  type: 'project' | 'member' | 'log';
  moreLink: string;
}

export const getSidebarConfig = (pathname: string): SidebarConfig => {
  const displayCount = 7;

  if (pathname === '/project') {
    return {
      title: '인기 프로젝트',
      icon: React.createElement(FileTextIcon, {
        className: 'w-4 h-4 text-orange-500',
      }),
      data: popularProjects.slice(0, displayCount),
      type: 'project' as const,
      moreLink: '/project',
    };
  }

  if (pathname === '/member') {
    return {
      title: '추천 멤버',
      icon: React.createElement(PersonIcon, {
        className: 'w-4 h-4 text-blue-500',
      }),
      data: recommendedMembers.slice(0, displayCount),
      type: 'member' as const,
      moreLink: '/member',
    };
  }

  // 기본 홈페이지 - 인기 로그
  return {
    title: '인기 로그',
    icon: React.createElement(FileTextIcon, {
      className: 'w-4 h-4 text-purple-500',
    }),
    data: popularLogs.slice(0, displayCount),
    type: 'log' as const,
    moreLink: '/',
  };
};
