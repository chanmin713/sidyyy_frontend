import { PersonIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export function DesktopHeader() {
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
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <PersonIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* 하단: 탭 네비게이션 */}
        <div>
          <div className="flex bg-gray-50 rounded-lg p-1">
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm">
              피드
            </button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              프로젝트
            </button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              모집
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
