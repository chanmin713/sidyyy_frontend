import { useState } from 'react'
import { MagnifyingGlassIcon, HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* 상단: 로고 + 아이콘들 */}
        <div className="flex items-center justify-between">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <Cross2Icon className="w-5 h-5 text-gray-600" />
              ) : (
                <HamburgerMenuIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* 햄버거 메뉴 */}
        {isMenuOpen && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
