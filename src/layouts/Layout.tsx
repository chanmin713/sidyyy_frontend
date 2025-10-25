import { useLocation } from 'react-router-dom';

import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { RightSidebar } from '../components/layout/RightSidebar';
import { ScrollToTopButton } from '../components/shared/ScrollToTopButton';
import { FloatingWriteButton } from '../components/shared/FloatingWriteButton';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMessagePage = location.pathname === '/message';
  const isProfilePage = location.pathname === '/profile';
  const isMemberPage = location.pathname === '/member';
  const isPostDetail = location.pathname.startsWith('/post/');
  const isWritePage = location.pathname.startsWith('/write');
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <div
        className={
          isHomePage ||
          isMessagePage ||
          isProfilePage ||
          isPostDetail ||
          isProjectDetail ||
          isWritePage
            ? 'max-w-4xl mx-auto'
            : 'max-w-7xl mx-auto'
        }
      >
        <main
          className={`${isHomePage || isMessagePage || isProfilePage || isPostDetail || isProjectDetail || isWritePage ? 'pt-[69px] px-4 min-h-[calc(100vh-69px)]' : 'flex justify-center gap-x-4 md:px-5 pt-[69px]'}`}
        >
          {/* 중앙 콘텐츠 */}
          <div
            className={`w-full bg-white ${isHomePage || isMessagePage || isProfilePage || isPostDetail || isProjectDetail || isWritePage ? 'px-0' : 'lg:w-3/4 px-2 md:px-6 lg:px-8'}`}
          >
            {children}
          </div>

          {/* 오른쪽 사이드바 - 데스크톱에서만 보임, 홈페이지, 메시지 페이지, 프로필 페이지, 상세 페이지, 프로젝트 페이지, 글쓰기 페이지에서는 숨김 */}
          {!isHomePage &&
            !isMessagePage &&
            !isProfilePage &&
            !isPostDetail &&
            !isProjectDetail &&
            !isWritePage && <RightSidebar />}
        </main>
      </div>

      <Footer />

      {/* 맨 위로 버튼 */}
      <ScrollToTopButton />

      {/* 플로팅 로그 쓰기 버튼 (모바일만, 멤버 페이지와 글쓰기 페이지 제외) */}
      {!isMemberPage && !isWritePage && <FloatingWriteButton />}
    </div>
  );
}
