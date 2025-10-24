import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RightSidebar } from '../components/RightSidebar'
import { ScrollToTopButton } from '../components/ScrollToTopButton'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto h-full">
        <main className="flex justify-center gap-x-8 pb-3 md:px-5 md:pb-5">
          {/* 중앙 콘텐츠 */}
          <div className="w-full lg:w-3/5 pb-16 md:pb-0 bg-white px-4 md:px-6">
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
