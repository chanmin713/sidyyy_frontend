import { useState } from 'react'
import { MagnifyingGlassIcon, HamburgerMenuIcon, Cross2Icon, BellIcon, PersonIcon } from '@radix-ui/react-icons'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center">
        {/* 상단: 로고 + 아이콘들 또는 검색창 */}
        <div className="w-full">
        {!isSearchOpen ? (
          <div className="flex items-center justify-between">
            {/* 왼쪽: Sidyyy 로고 */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
            </div>

            {/* 오른쪽: 아이콘들 */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors relative">
                <BellIcon className="w-5 h-5 text-gray-600" />
                {/* 알림 뱃지 */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  3
                </span>
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
                  isMenuOpen 
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg' 
                    : 'hover:bg-gray-100 hover:shadow-sm'
                }`}
              >
                {isMenuOpen ? (
                  <Cross2Icon className={`w-5 h-5 transition-colors duration-300 ${
                    isMenuOpen 
                      ? 'text-gray-800' 
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`} />
                ) : (
                  <HamburgerMenuIcon className={`w-5 h-5 transition-colors duration-300 ${
                    isMenuOpen 
                      ? 'text-gray-800' 
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`} />
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in-0 slide-in-from-top-2 duration-500 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                className="w-full py-2.5 px-3 pr-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 shadow-lg transition-all duration-500 placeholder:text-gray-600"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Cross2Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
      
      {/* 햄버거 메뉴 */}
      {isMenuOpen && (
        <div className="animate-in fade-in-0 slide-in-from-top-2 duration-500 bg-gray-50 border-b px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-2">
              <button className="w-full text-left py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm">
                피드
              </button>
              <button className="w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md">
                프로젝트
              </button>
              <button className="w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md">
                모집
              </button>
              <button className="w-full text-left py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-white rounded-md">
                마이페이지
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
