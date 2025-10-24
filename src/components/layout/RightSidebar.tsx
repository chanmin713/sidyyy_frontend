import { Card, CardContent } from '@/components/ui/card';
import {
  GitHubLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  StarFilledIcon,
  Pencil1Icon,
  CalendarIcon,
  PersonIcon,
  FileTextIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
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
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useMemo, useCallback } from 'react';
import React from 'react';
// import { useUI } from '@/stores'; // TODO: 향후 사용 예정

// 아이콘 매핑 함수
const getIcon = (iconName: string) => {
  const iconMap = {
    GitHubLogoIcon: GitHubLogoIcon,
    FigmaLogoIcon: FigmaLogoIcon,
    NotionLogoIcon: NotionLogoIcon,
    DiscordLogoIcon: DiscordLogoIcon,
  };
  return iconMap[iconName as keyof typeof iconMap] || GitHubLogoIcon;
};

export function RightSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);
  // const { sidebarOpen } = useUI(); // TODO: 향후 사용 예정

  const handleWriteClick = useCallback(() => {
    navigate('/write');
  }, [navigate]);

  const handleProjectCreateClick = useCallback(() => {
    navigate('/project/create');
  }, [navigate]);

  const handleRecruitCreateClick = useCallback(() => {
    navigate('/recruit/create');
  }, [navigate]);

  // 현재 페이지에 따른 사이드바 콘텐츠 렌더링
  const renderSidebarContent = useMemo(() => {
    const currentPath = location.pathname;
    const displayCount = showAll ? 10 : 5;

    if (currentPath === '/project') {
      return {
        title: '인기 프로젝트',
        icon: <StarFilledIcon className='w-4 h-4 text-orange-500' />,
        data: popularProjects.slice(0, displayCount),
        renderItem: (project: SidebarProject) => (
          <div
            key={project.id}
            className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
            onClick={() =>
              navigate(`/project/${encodeURIComponent(project.name)}`)
            }
          >
            <div className='w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
              {React.createElement(getIcon(project.icon), {
                className:
                  'w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200',
              })}
            </div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200'>
                {project.name}
              </h4>
              <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200'>
                {project.description}
              </p>
            </div>
          </div>
        ),
        hasMore: popularProjects.length > 5,
        moreLink: '/project',
      };
    }

    if (currentPath === '/member') {
      return {
        title: '추천 멤버',
        icon: <PersonIcon className='w-4 h-4 text-blue-500' />,
        data: recommendedMembers.slice(0, displayCount),
        renderItem: (member: SidebarMember) => (
          <div
            key={member.id}
            className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
            onClick={() => navigate(`/member/${member.id}`)}
          >
            <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
              <span className='text-sm font-medium text-blue-600'>
                {member.initial}
              </span>
            </div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200'>
                {member.name}
              </h4>
              <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200'>
                {member.role}
              </p>
            </div>
          </div>
        ),
        hasMore: recommendedMembers.length > 5,
        moreLink: '/member',
      };
    }

    if (currentPath === '/recruit') {
      return {
        title: '인기 모집',
        icon: <CalendarIcon className='w-4 h-4 text-green-500' />,
        data: popularRecruits.slice(0, displayCount),
        renderItem: (recruit: SidebarRecruit) => (
          <div
            key={recruit.id}
            className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
            onClick={() => navigate(`/recruit/${recruit.id}`)}
          >
            <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
              <CalendarIcon className='w-4 h-4 text-green-600' />
            </div>
            <div className='flex-1 min-w-0'>
              <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200'>
                {recruit.title}
              </h4>
              <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200'>
                {recruit.company} • {recruit.position}
              </p>
            </div>
          </div>
        ),
        hasMore: popularRecruits.length > 5,
        moreLink: '/recruit',
      };
    }

    // 기본 홈페이지 - 인기 로그
    return {
      title: '인기 로그',
      icon: <FileTextIcon className='w-4 h-4 text-purple-500' />,
      data: popularLogs.slice(0, displayCount),
      renderItem: (log: SidebarLog) => (
        <div
          key={log.id}
          className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
          onClick={() => navigate(`/post/${log.id}`)}
        >
          <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
            <FileTextIcon className='w-4 h-4 text-purple-600' />
          </div>
          <div className='flex-1 min-w-0'>
            <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200'>
              {log.title}
            </h4>
            <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200'>
              {log.author} • {log.category}
            </p>
          </div>
        </div>
      ),
      hasMore: popularLogs.length > 5,
      moreLink: '/',
    };
  }, [location.pathname, showAll, navigate]);

  // 현재 페이지에 따른 버튼 렌더링
  const renderActionButton = useMemo(() => {
    if (location.pathname === '/project') {
      return (
        <button
          onClick={handleProjectCreateClick}
          className='w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
        >
          <StarFilledIcon className='w-4 h-4' />
          프로젝트 생성
        </button>
      );
    }

    if (location.pathname === '/recruit') {
      return (
        <button
          onClick={handleRecruitCreateClick}
          className='w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
        >
          <CalendarIcon className='w-4 h-4' />
          모집 작성
        </button>
      );
    }

    // 멤버 페이지에서는 버튼을 표시하지 않음
    if (location.pathname === '/member') {
      return null;
    }

    // 기본 로그 쓰기 버튼
    return (
      <button
        onClick={handleWriteClick}
        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
      >
        <Pencil1Icon className='w-4 h-4' />
        로그 쓰기
      </button>
    );
  }, [
    location.pathname,
    handleProjectCreateClick,
    handleRecruitCreateClick,
    handleWriteClick,
  ]);

  return (
    <div className='hidden lg:block w-80 sticky top-[70px] self-start min-h-screen border-l border-gray-200 pl-6 pt-6 bg-white'>
      <div className='space-y-6'>
        {/* 액션 버튼 (페이지별로 다름) */}
        {renderActionButton}

        {/* 동적 사이드바 콘텐츠 */}
        <Card>
          <CardContent className='p-6'>
            {(() => {
              const content = renderSidebarContent;
              return (
                <>
                  <h3 className='font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                    {content.icon}
                    {content.title}
                  </h3>
                  <div className='space-y-3'>
                    {content.data.map(content.renderItem)}
                  </div>
                  {content.hasMore && (
                    <div className='mt-3 flex justify-end'>
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className='text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1'
                      >
                        {showAll ? (
                          <>
                            <ChevronUpIcon className='w-3 h-3' />
                            접기
                          </>
                        ) : (
                          <>
                            <ChevronDownIcon className='w-3 h-3' />
                            더보기
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </>
              );
            })()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
