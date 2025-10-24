import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { sampleProjects } from '@/data/sampleProjects';
import {
  GitHubLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  VercelLogoIcon,
  InstagramLogoIcon,
  StarFilledIcon,
  HeartIcon,
  ChatBubbleIcon,
  CalendarIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

// 아이콘 매핑 함수
const getIcon = (iconName: string) => {
  const iconMap = {
    GitHubLogoIcon: GitHubLogoIcon,
    FigmaLogoIcon: FigmaLogoIcon,
    NotionLogoIcon: NotionLogoIcon,
    DiscordLogoIcon: DiscordLogoIcon,
    VercelLogoIcon: VercelLogoIcon,
    InstagramLogoIcon: InstagramLogoIcon,
  };
  return iconMap[iconName as keyof typeof iconMap] || GitHubLogoIcon;
};

export function ProjectPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('popular');

  // 검색 및 정렬된 프로젝트 목록
  const filteredProjects = useMemo(() => {
    let filtered = sampleProjects.filter(project => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      return true;
    });

    // 정렬
    filtered.sort((a, b) => {
      if (sortBy === 'popular') {
        return b.likes - a.likes;
      } else {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  const handleProjectClick = (projectName: string) => {
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-6'>
      {/* 헤더 */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>프로젝트</h1>
        <p className='text-gray-600'>
          개발자들이 진행 중인 다양한 사이드 프로젝트를 확인해보세요
        </p>
      </div>

      {/* 검색 및 정렬 */}
      <div className='mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
        <div className='flex-1 max-w-md'>
          <input
            type='text'
            placeholder='프로젝트 검색...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => setSortBy('popular')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'popular'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            인기순
          </button>
          <button
            onClick={() => setSortBy('latest')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'latest'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            최신순
          </button>
        </div>
      </div>

      {/* 프로젝트 그리드 */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProjects.map(project => {
          const IconComponent = getIcon('GitHubLogoIcon'); // 기본 아이콘 사용
          return (
            <Card
              key={project.id}
              className='cursor-pointer hover:shadow-lg transition-shadow duration-200'
              onClick={() => handleProjectClick(project.name)}
            >
              <CardContent className='p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center'>
                      <IconComponent className='w-6 h-6 text-gray-700' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 text-lg'>
                        {project.name}
                      </h3>
                      <p className='text-sm text-gray-500'>{project.status}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-1 text-orange-500'>
                    <StarFilledIcon className='w-4 h-4' />
                    <span className='text-sm font-medium'>{project.likes}</span>
                  </div>
                </div>

                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1 mb-4'>
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs'
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                      <HeartIcon className='w-4 h-4' />
                      <span>{project.likes}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <ChatBubbleIcon className='w-4 h-4' />
                      <span>{project.comments}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>{project.createdAt}</span>
                  </div>
                </div>

                <div className='mt-4 pt-4 border-t border-gray-100'>
                  <div className='flex items-center gap-2'>
                    <PersonIcon className='w-4 h-4 text-gray-400' />
                    <span className='text-sm text-gray-600'>
                      {project.participants.length}명 참여
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className='text-center py-12'>
          <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <GitHubLogoIcon className='w-8 h-8 text-gray-400' />
          </div>
          <h3 className='text-lg font-medium text-gray-900 mb-2'>
            프로젝트가 없습니다
          </h3>
          <p className='text-gray-500'>
            {searchQuery
              ? '검색 결과가 없습니다. 다른 키워드로 시도해보세요.'
              : '아직 등록된 프로젝트가 없습니다.'}
          </p>
        </div>
      )}
    </div>
  );
}
