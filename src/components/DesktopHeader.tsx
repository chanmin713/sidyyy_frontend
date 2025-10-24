import { useState } from 'react'
import { PersonIcon, MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

export function DesktopHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* 상단: 로고 + 네비게이션/검색창 + 아이콘들 */}
        <div className="flex items-center justify-between">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 중앙: 탭 네비게이션 또는 검색창 */}
          {!isSearchOpen ? (
            <div className="flex bg-gray-50 rounded-lg p-1 shadow-sm">
              <button className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                피드
              </button>
              <button className="py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-white hover:rounded-md hover:shadow-sm transition-all duration-200 hover:scale-105">
                프로젝트
              </button>
              <button className="py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-white hover:rounded-md hover:shadow-sm transition-all duration-200 hover:scale-105">
                모집
              </button>
            </div>
          ) : (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  className="w-full py-2 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded transition-all duration-200 hover:scale-110 group"
                >
                  <Cross2Icon className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
                </button>
              </div>
            </div>
          )}

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-sm group"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-sm group">
              <PersonIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
