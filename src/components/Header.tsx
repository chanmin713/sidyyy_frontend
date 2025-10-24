import { Card, CardContent } from '@/components/ui/card'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 오픈채팅 */}
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
            </svg>
            <span className="text-gray-900 font-medium">Sidyyy 오픈채팅</span>
          </div>

          {/* 중앙: 로고와 탭 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-black font-medium border-b-2 border-black pb-1">로그</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">소셜링</a>
            </div>
          </div>

          {/* 오른쪽: 검색과 프로필 */}
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}