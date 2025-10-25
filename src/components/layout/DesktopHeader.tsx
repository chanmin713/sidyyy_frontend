import { useState } from 'react';
import { PersonIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/feedback/notification-dropdown';
import { AccessibleButton } from '../ui/forms/accessible-button';
import { KEYBOARD_KEYS, isActionKey } from '@/utils/accessibility';
import { useNavigation } from '@/hooks/ui/useNavigation';
import { NAVIGATION_TABS } from '@/constants';

export function DesktopHeader() {
  const {
    activeTab,
    handleTabClick,
    navigateToHome,
    navigateToMessage,
    navigateToProfile,
  } = useNavigation();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (isActionKey(e)) {
      e.preventDefault();
      handleTabClick(tabId as any);
    } else if (e.key === KEYBOARD_KEYS.ARROW_RIGHT) {
      e.preventDefault();
      const currentIndex = NAVIGATION_TABS.findIndex(t => t.id === tabId);
      const nextTab =
        NAVIGATION_TABS[(currentIndex + 1) % NAVIGATION_TABS.length];
      handleTabClick(nextTab.id);
    } else if (e.key === KEYBOARD_KEYS.ARROW_LEFT) {
      e.preventDefault();
      const currentIndex = NAVIGATION_TABS.findIndex(t => t.id === tabId);
      const prevTab =
        NAVIGATION_TABS[
          (currentIndex - 1 + NAVIGATION_TABS.length) % NAVIGATION_TABS.length
        ];
      handleTabClick(prevTab.id);
    }
  };

  return (
    <header className='border-b bg-white border-gray-200 fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-2 md:px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 네비게이션/검색창 + 아이콘들 */}
        <div className='flex items-center justify-between w-full'>
          {/* 왼쪽: Sidyyy 로고 */}
          <div className='flex items-center'>
            <AccessibleButton
              onClick={navigateToHome}
              variant='ghost'
              className='text-2xl font-black text-gray-900 transition-colors'
              ariaLabel='Sidyyy 홈페이지로 이동'
            >
              Sidyyy
            </AccessibleButton>
          </div>

          {/* 중앙: 탭 네비게이션 */}
          <div className='flex-1 max-w-2xl mx-8'>
            <nav
              role='tablist'
              aria-label='메인 네비게이션'
              className='flex bg-gray-50 rounded-lg p-1 shadow-sm relative overflow-hidden'
            >
              {/* 움직이는 흰색 배경 */}
              {(hoveredTab || activeTab) && (
                <div
                  className='absolute top-1 bottom-1 bg-white rounded-md shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform'
                  style={{
                    transform: 'translateZ(0)', // GPU 가속 활성화
                    left: (() => {
                      const targetTab = hoveredTab || activeTab;
                      const index = NAVIGATION_TABS.findIndex(
                        t => t.id === targetTab
                      );
                      const tabWidth = 100 / NAVIGATION_TABS.length;
                      return `${index * tabWidth + 0.5}%`;
                    })(),
                    width: (() => {
                      const tabWidth = 100 / NAVIGATION_TABS.length;
                      return `${tabWidth - 0.5}%`;
                    })(),
                  }}
                />
              )}

              {NAVIGATION_TABS.map(tab => (
                <button
                  key={tab.id}
                  role='tab'
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onClick={() => handleTabClick(tab.id)}
                  onKeyDown={e => handleKeyDown(e, tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10 transform ${
                    activeTab === tab.id
                      ? 'text-gray-900 scale-105'
                      : 'text-gray-500 hover:text-gray-900 hover:scale-105'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* 오른쪽: 아이콘들 */}
          <div className='flex items-center gap-4'>
            <NotificationDropdown />
            <AccessibleButton
              onClick={navigateToMessage}
              variant='ghost'
              className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 hover:shadow-sm group'
              ariaLabel='메시지'
            >
              <PaperPlaneIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-all duration-300 group-hover:rotate-12' />
            </AccessibleButton>
            <AccessibleButton
              onClick={navigateToProfile}
              variant='ghost'
              className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 hover:shadow-sm group'
              ariaLabel='프로필'
            >
              <PersonIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110' />
            </AccessibleButton>
          </div>
        </div>
      </div>
    </header>
  );
}
