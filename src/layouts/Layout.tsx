import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RightSidebar } from '../components/RightSidebar'
import { ScrollToTopButton } from '../components/ScrollToTopButton'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* 고정 헤더 */}
      <Header />
      
      {/* 메인 컨텐츠 영역 - 스크롤 가능 */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto h-full">
          <main className="flex justify-center gap-x-8 h-full">
            {/* 중앙 콘텐츠 - 스크롤 가능 */}
            <div className="w-full lg:w-3/5 bg-white px-6 md:px-8 pt-4 pb-8 overflow-y-auto">
              {children}
            </div>
            
            {/* 오른쪽 사이드바 - 고정 */}
            <RightSidebar />
          </main>
        </div>
      </div>
      
      {/* 푸터 */}
      <Footer />
      
      {/* 맨 위로 버튼 */}
      <ScrollToTopButton />
    </div>
  )
}
