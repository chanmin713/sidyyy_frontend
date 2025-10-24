import React from 'react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { PostCard } from '@/components/PostCard'

function App() {
  // 샘플 데이터
  const posts = [
    {
      author: "김시디",
      content: "오늘도 새로운 도전을 시작했습니다! Sidyyy와 함께라서 더욱 즐거운 여정이 될 것 같아요. 여러분도 새로운 도전을 시작해보세요!",
      timestamp: "2시간 전",
      likes: 24,
      comments: 8
    },
    {
      author: "이시디",
      content: "주체적인 삶을 살아가는 것이 정말 중요하다고 생각해요. Sidyyy에서 만난 분들과의 대화가 항상 영감을 줍니다.",
      timestamp: "5시간 전",
      likes: 18,
      comments: 12
    },
    {
      author: "박시디",
      content: "1200+명의 Sidyyy들과 함께하는 이 커뮤니티가 정말 소중해요. 모두 함께 성장해나가요!",
      timestamp: "1일 전",
      likes: 35,
      comments: 15
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* 메인 콘텐츠 */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">로그</h2>
              <p className="text-gray-600">Sidyyy들의 이야기를 확인해보세요</p>
            </div>
            
            {/* 포스트 목록 */}
            <div className="space-y-4">
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  author={post.author}
                  content={post.content}
                  timestamp={post.timestamp}
                  likes={post.likes}
                  comments={post.comments}
                />
              ))}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* 모바일 하단 네비게이션 */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-3">
          <a href="#" className="flex flex-col items-center space-y-1 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">홈</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs">소셜링</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-1 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">프로필</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App