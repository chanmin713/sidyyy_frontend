import { useState } from 'react';
import { PersonIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/notification-dropdown';

export function DesktopHeader() {
  const [activeTab, setActiveTab] = useState('feed');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <header className='border-b bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 네비게이션/검색창 + 아이콘들 */}
        <div className='flex items-center justify-between w-full'>
          {/* 왼쪽: Sidyyy 로고 */}
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold text-gray-900'>Sidyyy</h1>
          </div>

          {/* 중앙: 탭 네비게이션 */}
          <div className='flex-1 max-w-2xl mx-8'>
            <div className='flex bg-gray-50 rounded-lg p-1 shadow-sm relative animate-in fade-in-0 slide-in-from-top-2 duration-500'>
              {/* 움직이는 흰색 배경 */}
              <div
                className={`absolute top-1 bottom-1 bg-white rounded-md shadow-sm transition-all duration-500 ease-out ${
                  hoveredTab === 'feed'
                    ? 'left-1 w-[calc(33.333%-0.25rem)]'
                    : hoveredTab === 'project'
                      ? 'left-[calc(33.333%+0.25rem)] w-[calc(33.333%-0.25rem)]'
                      : hoveredTab === 'recruit'
                        ? 'left-[calc(66.666%+0.25rem)] w-[calc(33.333%-0.25rem)]'
                        : activeTab === 'feed'
                          ? 'left-1 w-[calc(33.333%-0.25rem)]'
                          : activeTab === 'project'
                            ? 'left-[calc(33.333%+0.25rem)] w-[calc(33.333%-0.25rem)]'
                            : 'left-[calc(66.666%+0.25rem)] w-[calc(33.333%-0.25rem)]'
                }`}
              />

              <button
                onClick={() => setActiveTab('feed')}
                onMouseEnter={() => setHoveredTab('feed')}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === 'feed'
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                로그
              </button>
              <button
                onClick={() => setActiveTab('project')}
                onMouseEnter={() => setHoveredTab('project')}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === 'project'
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                프로젝트
              </button>
              <button
                onClick={() => setActiveTab('recruit')}
                onMouseEnter={() => setHoveredTab('recruit')}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === 'recruit'
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                모집
              </button>
            </div>
          </div>

          {/* 오른쪽: 아이콘들 */}
          <div className='flex items-center gap-4'>
            <NotificationDropdown />
            <button className='w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group'>
              <PersonIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
