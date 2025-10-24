import { useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { RightSidebar } from '../components/layout/RightSidebar';
import { ScrollToTopButton } from '../components/common/ScrollToTopButton';
import { FloatingWriteButton } from '../components/common/FloatingWriteButton';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isPostDetail = location.pathname.startsWith('/post/');
  const isWritePage = location.pathname === '/write';
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <div
        className={
          isPostDetail || isWritePage || isProjectDetail
            ? 'max-w-7xl mx-auto'
            : 'max-w-6xl mx-auto'
        }
      >
        <main
          className={`${isPostDetail || isWritePage || isProjectDetail ? 'pt-[69px] px-4' : 'flex justify-center gap-x-4 md:px-5 pt-[69px]'}`}
        >
          {/* 중앙 콘텐츠 */}
          <div
            className={`w-full bg-white ${isPostDetail || isWritePage || isProjectDetail ? 'px-0' : 'lg:w-3/4 px-6 md:px-8'}`}
          >
            {children}
          </div>

          {/* 오른쪽 사이드바 - 데스크톱에서만 보임, 상세 페이지와 글쓰기 페이지, 프로젝트 페이지에서는 숨김 */}
          {!isPostDetail && !isWritePage && !isProjectDetail && (
            <RightSidebar />
          )}
        </main>
      </div>

      <Footer />

      {/* 맨 위로 버튼 */}
      <ScrollToTopButton />

      {/* 플로팅 로그 쓰기 버튼 (모바일만) */}
      <FloatingWriteButton />
    </div>
  );
}
