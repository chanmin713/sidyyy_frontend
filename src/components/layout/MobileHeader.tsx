import { useEffect } from 'react';
import { HamburgerMenuIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/feedback/notification-dropdown';
import { AccessibleButton } from '../ui/forms/accessible-button';
import { useUI } from '@/stores';
import { useNavigation } from '@/hooks/ui/useNavigation';
import { NAVIGATION_TABS } from '@/constants';

export function MobileHeader() {
  const { currentPath, navigateToPath, navigateToMessage } = useNavigation();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUI();

  const handleMenuClick = (path: string) => {
    navigateToPath(path);
    setMobileMenuOpen(false);
  };

  // 현재 경로에 따라 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath, setMobileMenuOpen]);

  // 현재 경로 확인 함수
  const isActivePath = (path: string) => {
    if (path === '/log') {
      return currentPath === '/log';
    }
    return currentPath === path;
  };

  return (
    <header className='border-b bg-white border-gray-200 fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-2 md:px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 아이콘들 */}
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            {/* 왼쪽: Sidyyy 로고 */}
            <div className='flex items-center'>
              <AccessibleButton
                onClick={() => navigateToPath('/')}
                variant='ghost'
                className='text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors'
                ariaLabel='Sidyyy 홈페이지로 이동'
              >
                Sidyyy
              </AccessibleButton>
            </div>

            {/* 오른쪽: 아이콘들 */}
            <div className='flex items-center gap-4'>
              <NotificationDropdown />
              <AccessibleButton
                onClick={navigateToMessage}
                variant='ghost'
                className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group'
                ariaLabel='메시지'
              >
                <PaperPlaneIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
              </AccessibleButton>
              <AccessibleButton
                onClick={toggleMobileMenu}
                variant='ghost'
                className={`w-8 h-8 p-0 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
                  mobileMenuOpen
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg'
                    : 'hover:bg-gray-100 hover:shadow-sm'
                }`}
                ariaLabel='메뉴 열기/닫기'
              >
                <HamburgerMenuIcon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    mobileMenuOpen
                      ? 'text-gray-800'
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`}
                />
              </AccessibleButton>
            </div>
          </div>
        </div>
      </div>

      {/* 햄버거 메뉴 */}
      {mobileMenuOpen && (
        <div className='animate-in fade-in-0 slide-in-from-top-2 duration-500 bg-gray-50 border-b px-2 md:px-4 py-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='space-y-2'>
              {NAVIGATION_TABS.map(tab => (
                <AccessibleButton
                  key={tab.id}
                  onClick={() => handleMenuClick(tab.path)}
                  variant='ghost'
                  className={`w-full justify-start py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                    isActivePath(tab.path)
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                  }`}
                  ariaLabel={`${tab.label} 페이지로 이동`}
                >
                  {tab.label}
                </AccessibleButton>
              ))}
              <AccessibleButton
                onClick={() => handleMenuClick('/profile')}
                variant='ghost'
                className={`w-full justify-start py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/profile')
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
                ariaLabel='마이페이지로 이동'
              >
                마이페이지
              </AccessibleButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
