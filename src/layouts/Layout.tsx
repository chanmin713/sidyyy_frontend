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
      
      <div className="max-w-6xl mx-auto min-h-screen">
        <main className="flex justify-center gap-x-8 pb-3 md:px-5 md:pb-5 min-h-[calc(100vh-140px)]">
          {/* 중앙 콘텐츠 */}
          <div className="w-full lg:w-3/5 pb-20 md:pb-24 bg-white px-6 md:px-8 pt-6 md:pt-8">
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
