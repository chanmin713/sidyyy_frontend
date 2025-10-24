import { MagnifyingGlassIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'

export function MobileHeader() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* 상단: 로고 + 아이콘들 */}
        <div className="flex items-center justify-between mb-4">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-200 border border-transparent hover:border-white/30">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-200 border border-transparent hover:border-white/30">
              <HamburgerMenuIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* 하단: 탭 네비게이션 */}
        <div>
          <div className="flex bg-white/20 backdrop-blur-md rounded-lg p-1 border border-white/30 shadow-lg">
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white/40 backdrop-blur-sm rounded-md shadow-sm border border-white/20">
              피드
            </button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/20 rounded-md transition-all duration-200">
              프로젝트
            </button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/20 rounded-md transition-all duration-200">
              모집
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
