export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 중앙: 네비게이션 */}
          <nav className="flex space-x-8">
            <a href="#" className="text-black font-medium border-b-2 border-black pb-1">로그</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">소셜링</a>
          </nav>

          {/* 오른쪽: 유저 프로필 */}
          <div className="flex items-center">
            <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}