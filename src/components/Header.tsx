import { PersonIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 중앙: 네비게이션 */}
          <nav className="flex space-x-8">
            <a href="#" className="text-black font-medium border-b-2 border-black pb-1">피드</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">프로젝트</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">모집</a>
          </nav>

          {/* 오른쪽: 유저 프로필 */}
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border-2 border-gray-300">
              <PersonIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}