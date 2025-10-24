import { Header } from './Header'
import { Footer } from './Footer'
import { LeftSidebar } from './LeftSidebar'
import { MobileNavigation } from './MobileNavigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto h-full">
        <main className="flex justify-center gap-x-5 pb-3 md:px-5 md:pb-5">
          {/* 왼쪽 사이드바 - 데스크톱에서만 보임 */}
          <LeftSidebar />
          
          {/* 중앙 콘텐츠 */}
          <div className="w-full md:w-4/5 pb-16 md:pb-0">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
      
      {/* 모바일 하단 네비게이션 */}
      <MobileNavigation />
    </div>
  )
}
