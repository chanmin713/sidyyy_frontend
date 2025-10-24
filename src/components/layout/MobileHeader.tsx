import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/notification-dropdown';

export function MobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // 현재 경로에 따라 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className='border-b bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 아이콘들 */}
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            {/* 왼쪽: Sidyyy 로고 */}
            <div className='flex items-center'>
              <button
                onClick={() => navigate('/')}
                className='text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors'
              >
                Sidyyy
              </button>
            </div>

            {/* 오른쪽: 아이콘들 */}
            <div className='flex items-center gap-4'>
              <NotificationDropdown />
              <button
                onClick={() => navigate('/profile')}
                className='w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors group'
                title='마이페이지'
                aria-label='마이페이지'
              >
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
              <button
                onClick={() => handleMenuClick('/')}
                className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'
              >
                로그
              </button>
              <button
                onClick={() => handleMenuClick('/project')}
                className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'
              >
                프로젝트
              </button>
              <button
                onClick={() => handleMenuClick('/recruit')}
                className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'
              >
                팀빌딩
              </button>
              <button
                onClick={() => handleMenuClick('/member')}
                className='w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md'
              >
                멤버
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
