import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HamburgerMenuIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/feedback/notification-dropdown';
import { useUI } from '@/stores';

export function MobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUI();

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  // 현재 경로에 따라 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  // 현재 경로 확인 함수
  const isActivePath = (path: string) => {
    if (path === '/log') {
      return location.pathname === '/log';
    }
    return location.pathname === path;
  };

  return (
    <header className='border-b bg-white border-gray-200 fixed top-0 left-0 right-0 z-50'>
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
                onClick={() => navigate('/message')}
                className='w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group'
                title='메시지'
                aria-label='메시지'
              >
                <PaperPlaneIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
              </button>
              <button
                onClick={toggleMobileMenu}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
                  mobileMenuOpen
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg'
                    : 'hover:bg-gray-100 hover:shadow-sm'
                }`}
              >
                <HamburgerMenuIcon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    mobileMenuOpen
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
      {mobileMenuOpen && (
        <div className='animate-in fade-in-0 slide-in-from-top-2 duration-500 bg-gray-50 border-b px-4 py-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='space-y-2'>
              <button
                onClick={() => handleMenuClick('/log')}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/log')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                로그
              </button>
              <button
                onClick={() => handleMenuClick('/project')}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/project')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                프로젝트
              </button>
              <button
                onClick={() => handleMenuClick('/recruit')}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/recruit')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                모집
              </button>
              <button
                onClick={() => handleMenuClick('/member')}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/member')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                멤버
              </button>
              <button
                onClick={() => handleMenuClick('/profile')}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/profile')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                마이페이지
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
