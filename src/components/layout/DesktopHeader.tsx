import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PersonIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { NotificationDropdown } from '../ui/feedback/notification-dropdown';
import { AccessibleButton } from '../ui/forms/accessible-button';
import { KEYBOARD_KEYS, isActionKey } from '@/utils/accessibility';

export function DesktopHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // 현재 경로에 따라 활성 탭 설정
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/log':
        setActiveTab('home');
        break;
      case '/project':
        setActiveTab('project');
        break;
      case '/recruit':
        setActiveTab('recruit');
        break;
      case '/member':
        setActiveTab('member');
        break;
      case '/':
        setActiveTab('');
        break;
      default:
        setActiveTab('');
    }
  }, [location.pathname]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home':
        navigate('/log');
        break;
      case 'project':
        navigate('/project');
        break;
      case 'recruit':
        navigate('/recruit');
        break;
      case 'member':
        navigate('/member');
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, tab: string) => {
    if (isActionKey(e)) {
      e.preventDefault();
      handleTabClick(tab);
    } else if (e.key === KEYBOARD_KEYS.ARROW_RIGHT) {
      e.preventDefault();
      const tabs = ['home', 'project', 'recruit', 'member'];
      const currentIndex = tabs.indexOf(tab);
      const nextTab = tabs[(currentIndex + 1) % tabs.length];
      handleTabClick(nextTab);
    } else if (e.key === KEYBOARD_KEYS.ARROW_LEFT) {
      e.preventDefault();
      const tabs = ['home', 'project', 'recruit', 'member'];
      const currentIndex = tabs.indexOf(tab);
      const prevTab = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
      handleTabClick(prevTab);
    }
  };

  return (
    <header className='border-b bg-white border-gray-200 fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center'>
        {/* 상단: 로고 + 네비게이션/검색창 + 아이콘들 */}
        <div className='flex items-center justify-between w-full'>
          {/* 왼쪽: Sidyyy 로고 */}
          <div className='flex items-center'>
            <AccessibleButton
              onClick={() => navigate('/')}
              variant='ghost'
              className='text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors'
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
              className='flex bg-gray-50 rounded-lg p-1 shadow-sm relative animate-in fade-in-0 slide-in-from-top-2 duration-500'
            >
              {/* 움직이는 흰색 배경 */}
              {(hoveredTab || activeTab) && (
                <div
                  className={`absolute top-1 bottom-1 bg-white rounded-md shadow-sm transition-all duration-500 ease-out ${
                    hoveredTab === 'home'
                      ? 'left-1 w-[calc(25%-0.25rem)]'
                      : hoveredTab === 'project'
                        ? 'left-[calc(25%+0.25rem)] w-[calc(25%-0.25rem)]'
                        : hoveredTab === 'recruit'
                          ? 'left-[calc(50%+0.25rem)] w-[calc(25%-0.25rem)]'
                          : hoveredTab === 'member'
                            ? 'left-[calc(75%+0.25rem)] w-[calc(25%-0.25rem)]'
                            : activeTab === 'home'
                              ? 'left-1 w-[calc(25%-0.25rem)]'
                              : activeTab === 'project'
                                ? 'left-[calc(25%+0.25rem)] w-[calc(25%-0.25rem)]'
                                : activeTab === 'recruit'
                                  ? 'left-[calc(50%+0.25rem)] w-[calc(25%-0.25rem)]'
                                  : activeTab === 'member'
                                    ? 'left-[calc(75%+0.25rem)] w-[calc(25%-0.25rem)]'
                                    : 'hidden'
                  }`}
                />
              )}

              <button
                role='tab'
                aria-selected={activeTab === 'home'}
                aria-controls='log-panel'
                tabIndex={activeTab === 'home' ? 0 : -1}
                onClick={() => handleTabClick('home')}
                onKeyDown={e => handleKeyDown(e, 'home')}
                onMouseEnter={() => setHoveredTab('home')}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === 'home'
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                로그
              </button>
              <button
                role='tab'
                aria-selected={activeTab === 'project'}
                aria-controls='project-panel'
                tabIndex={activeTab === 'project' ? 0 : -1}
                onClick={() => handleTabClick('project')}
                onKeyDown={e => handleKeyDown(e, 'project')}
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
                role='tab'
                aria-selected={activeTab === 'recruit'}
                aria-controls='recruit-panel'
                tabIndex={activeTab === 'recruit' ? 0 : -1}
                onClick={() => handleTabClick('recruit')}
                onKeyDown={e => handleKeyDown(e, 'recruit')}
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
              <button
                role='tab'
                aria-selected={activeTab === 'member'}
                aria-controls='member-panel'
                tabIndex={activeTab === 'member' ? 0 : -1}
                onClick={() => handleTabClick('member')}
                onKeyDown={e => handleKeyDown(e, 'member')}
                onMouseEnter={() => setHoveredTab('member')}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === 'member'
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                멤버
              </button>
            </nav>
          </div>

          {/* 오른쪽: 아이콘들 */}
          <div className='flex items-center gap-4'>
            <NotificationDropdown />
            <AccessibleButton
              onClick={() => navigate('/message')}
              variant='ghost'
              className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group'
              ariaLabel='메시지'
            >
              <PaperPlaneIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
            </AccessibleButton>
            <AccessibleButton
              onClick={() => {
                console.log('프로필 버튼 클릭됨');
                navigate('/profile');
              }}
              variant='ghost'
              className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group'
              ariaLabel='프로필'
            >
              <PersonIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
            </AccessibleButton>
          </div>
        </div>
      </div>
    </header>
  );
}
