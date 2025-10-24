import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import {
  PersonIcon,
  CalendarIcon,
  FileTextIcon,
  HeartIcon,
} from '@radix-ui/react-icons';
import { PROJECT_ICONS } from '@/constants/icons';
import { formatNumber, getTrendColor, getTrendIcon } from '@/utils/ui';
import {
  popularProjects,
  recommendedMembers,
  popularLogs,
  popularRecruits,
  type SidebarProject,
  type SidebarMember,
  type SidebarLog,
  type SidebarRecruit,
} from '@/data/sidebarData';

// 아이콘 매핑 함수
const getIcon = (iconName: string) => {
  return (
    PROJECT_ICONS[iconName as keyof typeof PROJECT_ICONS] ||
    PROJECT_ICONS.GitHubLogoIcon
  );
};

export function SidebarContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const content = useMemo(() => {
    const currentPath = location.pathname;
    const displayCount = 7; // 항상 7개 항목 표시

    if (currentPath === '/project') {
      return {
        title: '인기 프로젝트',
        icon: <FileTextIcon className='w-4 h-4 text-orange-500' />,
        data: popularProjects.slice(0, displayCount),
        renderItem: (project: SidebarProject) => {
          const ProjectItem = () => {
            return (
              <div
                className='flex items-center space-x-2 px-1 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
                onClick={() =>
                  navigate(`/project/${encodeURIComponent(project.name)}`)
                }
              >
                <div className='w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                  {React.createElement(getIcon(project.icon), {
                    className:
                      'w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200',
                  })}
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between'>
                    <div className='flex-1 min-w-0 overflow-hidden'>
                      <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
                        {project.name}
                      </h4>
                      <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
                        {project.description}
                      </p>
                    </div>
                    <div className='flex items-center gap-2 ml-2 flex-shrink-0'>
                      <div
                        className={`text-xs ${getTrendColor(project.trend)} flex items-center gap-1`}
                      >
                        <span>{getTrendIcon(project.trend)}</span>
                      </div>
                      <div className='text-xs text-gray-400'>
                        <span>{formatNumber(project.stats.upvotes)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          return <ProjectItem />;
        },
        hasMore: false,
        moreLink: '/project',
      };
    }

    if (currentPath === '/member') {
      return {
        title: '추천 멤버',
        icon: <PersonIcon className='w-4 h-4 text-blue-500' />,
        data: recommendedMembers.slice(0, displayCount),
        renderItem: (member: SidebarMember) => {
          const MemberItem = () => {
            return (
              <div
                className='flex items-center space-x-2 px-1 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
                onClick={() => navigate(`/member/${member.id}`)}
              >
                <div className='w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                  <span className='text-sm font-medium text-blue-600'>
                    {member.initial}
                  </span>
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between'>
                    <div className='flex-1 min-w-0 overflow-hidden'>
                      <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
                        {member.name}
                      </h4>
                      <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
                        {member.bio}
                      </p>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-gray-400 ml-2 flex-shrink-0'>
                      <PersonIcon className='w-3 h-3' />
                      <span>{formatNumber(member.stats.followers)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          return <MemberItem />;
        },
        hasMore: false,
        moreLink: '/member',
      };
    }

    if (currentPath === '/recruit') {
      return {
        title: '인기 모집',
        icon: <CalendarIcon className='w-4 h-4 text-green-500' />,
        data: popularRecruits.slice(0, displayCount),
        renderItem: (recruit: SidebarRecruit) => {
          const RecruitItem = () => {
            return (
              <div
                className='flex items-center space-x-2 px-1 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
                onClick={() => navigate(`/recruit/${recruit.id}`)}
              >
                <div className='w-7 h-7 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                  <CalendarIcon className='w-4 h-4 text-green-600' />
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between'>
                    <div className='flex-1 min-w-0 overflow-hidden'>
                      <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
                        {recruit.title}
                      </h4>
                      <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
                        {recruit.description}
                      </p>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-gray-400 ml-2 flex-shrink-0'>
                      <HeartIcon className='w-3 h-3' />
                      <span>{recruit.stats.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          return <RecruitItem />;
        },
        hasMore: false,
        moreLink: '/recruit',
      };
    }

    // 기본 홈페이지 - 인기 로그
    return {
      title: '인기 로그',
      icon: <FileTextIcon className='w-4 h-4 text-purple-500' />,
      data: popularLogs.slice(0, displayCount),
      renderItem: (log: SidebarLog) => {
        const LogItem = () => {
          return (
            <div
              className='flex items-center space-x-2 px-1 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
              onClick={() => navigate(`/post/${log.id}`)}
            >
              <div className='w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                <FileTextIcon className='w-4 h-4 text-purple-600' />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center justify-between'>
                  <div className='flex-1 min-w-0 overflow-hidden'>
                    <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
                      {log.title}
                    </h4>
                    <p className='text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 truncate'>
                      {log.content}
                    </p>
                    <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
                      {log.author}
                    </p>
                  </div>
                  <div className='flex items-center gap-1 text-xs text-gray-400 ml-2 flex-shrink-0'>
                    <HeartIcon className='w-3 h-3' />
                    <span>{log.stats.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        return <LogItem />;
      },
      hasMore: false,
      moreLink: '/',
    };
  }, [location.pathname, navigate]);

  return content;
}
