import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { sampleRecruits } from '@/data/sampleRecruits';
import {
  PersonIcon,
  CalendarIcon,
  ClockIcon,
  StarFilledIcon,
  HeartIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';

export function RecruitPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [filterBy, setFilterBy] = useState<
    'all' | 'frontend' | 'backend' | 'fullstack' | 'design'
  >('all');

  // 검색 및 필터링된 모집 목록
  const filteredRecruits = useMemo(() => {
    let filtered = sampleRecruits.filter(recruit => {
      // 검색 필터링
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          recruit.title.toLowerCase().includes(query) ||
          recruit.description.toLowerCase().includes(query) ||
          recruit.skills.some(skill => skill.toLowerCase().includes(query)) ||
          recruit.company.toLowerCase().includes(query)
        );
      }

      // 카테고리 필터링
      if (filterBy !== 'all') {
        return recruit.category === filterBy;
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
  }, [searchQuery, sortBy, filterBy]);

  const handleRecruitClick = () => {
    // 모집 상세 페이지는 아직 구현되지 않았으므로 알림 표시
    alert('모집 상세 페이지는 준비 중입니다!');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-100 text-blue-800';
      case 'backend':
        return 'bg-green-100 text-green-800';
      case 'fullstack':
        return 'bg-purple-100 text-purple-800';
      case 'design':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'frontend':
        return '프론트엔드';
      case 'backend':
        return '백엔드';
      case 'fullstack':
        return '풀스택';
      case 'design':
        return '디자인';
      default:
        return category;
    }
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-6'>
      {/* 헤더 */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>모집</h1>
        <p className='text-gray-600'>
          함께 프로젝트를 진행할 팀원을 찾아보세요
        </p>
      </div>

      {/* 검색 및 필터 */}
      <div className='mb-6 space-y-4'>
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
          <div className='flex-1 max-w-md'>
            <input
              type='text'
              placeholder='모집 공고 검색...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <div className='flex gap-2'>
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
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className='flex flex-wrap gap-2'>
          {['all', 'frontend', 'backend', 'fullstack', 'design'].map(
            category => (
              <button
                key={category}
                onClick={() => setFilterBy(category as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterBy === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? '전체' : getCategoryText(category)}
              </button>
            )
          )}
        </div>
      </div>

      {/* 모집 목록 */}
      <div className='space-y-4'>
        {filteredRecruits.map(recruit => (
          <Card
            key={recruit.id}
            className='cursor-pointer hover:shadow-lg transition-shadow duration-200'
            onClick={handleRecruitClick}
          >
            <CardContent className='p-6'>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(recruit.category)}`}
                    >
                      {getCategoryText(recruit.category)}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {recruit.company}
                    </span>
                    <span className='text-sm text-gray-500'>•</span>
                    <span className='text-sm text-gray-500'>
                      {recruit.location}
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {recruit.title}
                  </h3>
                  <p className='text-gray-600 text-sm line-clamp-2 mb-4'>
                    {recruit.description}
                  </p>
                </div>
                <div className='flex items-center gap-1 text-orange-500 ml-4'>
                  <StarFilledIcon className='w-4 h-4' />
                  <span className='text-sm font-medium'>{recruit.likes}</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-4'>
                {recruit.skills.map((skill, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between text-sm text-gray-500'>
                <div className='flex items-center gap-6'>
                  <div className='flex items-center gap-1'>
                    <PersonIcon className='w-4 h-4' />
                    <span>{recruit.participants}명 모집</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <ClockIcon className='w-4 h-4' />
                    <span>{recruit.duration}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='w-4 h-4 flex items-center justify-center'>
                      📍
                    </span>
                    <span>{recruit.location}</span>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <HeartIcon className='w-4 h-4' />
                    <span>{recruit.likes}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <ChatBubbleIcon className='w-4 h-4' />
                    <span>{recruit.comments}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>{recruit.createdAt}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecruits.length === 0 && (
        <div className='text-center py-12'>
          <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <PersonIcon className='w-8 h-8 text-gray-400' />
          </div>
          <h3 className='text-lg font-medium text-gray-900 mb-2'>
            모집 공고가 없습니다
          </h3>
          <p className='text-gray-500'>
            {searchQuery || filterBy !== 'all'
              ? '검색 결과가 없습니다. 다른 조건으로 시도해보세요.'
              : '아직 등록된 모집 공고가 없습니다.'}
          </p>
        </div>
      )}
    </div>
  );
}
