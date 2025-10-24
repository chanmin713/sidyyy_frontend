import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RightSidebar } from '../components/layout/RightSidebar'
import { ScrollToTopButton } from '../components/common/ScrollToTopButton'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto min-h-screen">
        <main className="flex justify-center gap-x-8 md:px-5 min-h-[calc(100vh-140px)] mt-20">
          {/* 중앙 콘텐츠 */}
          <div className="w-full lg:w-3/5 bg-white px-6 md:px-8">
            {children}
          </div>
          
          {/* 오른쪽 사이드바 - 데스크톱에서만 보임 */}
          <RightSidebar />
        </main>
      </div>
      
      <Footer />
      
      {/* 맨 위로 버튼 */}
      <ScrollToTopButton />
    </div>
  )
}
