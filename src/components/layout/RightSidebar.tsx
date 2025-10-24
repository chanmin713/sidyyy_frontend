import { Card, CardContent } from '@/components/ui/card';
import {
  GitHubLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  StarFilledIcon,
  Pencil1Icon,
  CalendarIcon,
} from '@radix-ui/react-icons';
import { popularProjects } from '@/data/sidebarData';
import { useNavigate, useLocation } from 'react-router-dom';

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

  const handleWriteClick = () => {
    navigate('/write');
  };

  const handleProjectCreateClick = () => {
    navigate('/project/create');
  };

  const handleRecruitCreateClick = () => {
    navigate('/recruit/create');
  };

  // 현재 페이지에 따른 버튼 렌더링
  const renderActionButton = () => {
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
  };

  return (
    <div className='hidden lg:block w-80 sticky top-[70px] self-start min-h-screen border-l border-gray-200 pl-6 pt-6 bg-white'>
      <div className='space-y-6'>
        {/* 액션 버튼 (페이지별로 다름) */}
        {renderActionButton()}

        {/* 인기 프로젝트 */}
        <Card>
          <CardContent className='p-6'>
            <h3 className='font-semibold text-gray-900 mb-4 flex items-center gap-2'>
              <StarFilledIcon className='w-4 h-4 text-orange-500' />
              인기 프로젝트
            </h3>
            <div className='space-y-3'>
              {popularProjects.slice(0, 5).map(project => {
                const IconComponent = getIcon(project.icon);
                return (
                  <div
                    key={project.id}
                    className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group'
                    onClick={() =>
                      navigate(`/project/${encodeURIComponent(project.name)}`)
                    }
                  >
                    <div className='w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                      <IconComponent className='w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200' />
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
                );
              })}
            </div>
            <div className='mt-3 text-right'>
              <button
                onClick={() => navigate('/project')}
                className='text-xs text-gray-500 hover:text-gray-700'
              >
                더보기 →
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
