import { useLocation } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RightSidebar } from '../components/layout/RightSidebar'
import { ScrollToTopButton } from '../components/common/ScrollToTopButton'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isPostDetail = location.pathname.startsWith('/post/')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className={isPostDetail ? "max-w-7xl mx-auto" : "max-w-6xl mx-auto"}>
        <main className={`flex justify-center gap-x-4 md:px-5 pt-[69px] ${isPostDetail ? 'px-4' : ''}`}>
          {/* 중앙 콘텐츠 */}
          <div className={`w-full bg-white ${isPostDetail ? 'px-0' : 'lg:w-3/4 px-6 md:px-8'}`}>
            {children}
          </div>
          
          {/* 오른쪽 사이드바 - 데스크톱에서만 보임, 상세 페이지에서는 숨김 */}
          {!isPostDetail && <RightSidebar />}
        </main>
      </div>
      
      <Footer />
      
      {/* 맨 위로 버튼 */}
      <ScrollToTopButton />
    </div>
  )
}
