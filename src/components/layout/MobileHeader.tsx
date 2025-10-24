import { useState } from 'react';
import { HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/notification-dropdown';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='border-b bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 아이콘들 */}
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            {/* 왼쪽: Sidyyy 로고 */}
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>Sidyyy</h1>
            </div>

            {/* 오른쪽: 아이콘들 */}
            <div className='flex items-center gap-4'>
              <NotificationDropdown />
              <button className='w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors group'>
                <PersonIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
                  isMenuOpen
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg'
                    : 'hover:bg-gray-100 hover:shadow-sm'
                }`}
              >
                <HamburgerMenuIcon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isMenuOpen
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 햄버거 메뉴 */}
      {isMenuOpen && (
        <div className='animate-in fade-in-0 slide-in-from-top-2 duration-500 bg-gray-50 border-b px-4 py-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='space-y-2'>
              <button className='w-full text-left py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm'>
                로그
              </button>
              <button className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'>
                프로젝트
              </button>
              <button className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'>
                모집
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
