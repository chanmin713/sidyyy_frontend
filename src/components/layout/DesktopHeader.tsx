import { useState } from 'react'
import { PersonIcon, MagnifyingGlassIcon, Cross2Icon, BellIcon } from '@radix-ui/react-icons'

export function DesktopHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('feed')
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 h-[69px] flex items-center">
        {/* 상단: 로고 + 네비게이션/검색창 + 아이콘들 */}
        <div className="flex items-center justify-between w-full">
          {/* 왼쪽: Sidyyy 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
          </div>

          {/* 중앙: 탭 네비게이션 또는 검색창 */}
          <div className="flex-1 max-w-2xl mx-8">
            {!isSearchOpen ? (
              <div className="flex bg-gray-50 rounded-lg p-0.5 shadow-sm relative animate-in fade-in-0 slide-in-from-top-2 duration-500">
                {/* 움직이는 흰색 배경 */}
                <div 
                  className={`absolute top-0.5 bottom-0.5 bg-white rounded-md shadow-sm transition-all duration-500 ease-out ${
                    hoveredTab === 'feed' ? 'left-0.5 w-[calc(33.333%-0.125rem)]' :
                    hoveredTab === 'project' ? 'left-[calc(33.333%+0.125rem)] w-[calc(33.333%-0.125rem)]' :
                    hoveredTab === 'recruit' ? 'left-[calc(66.666%+0.125rem)] w-[calc(33.333%-0.125rem)]' :
                    activeTab === 'feed' ? 'left-0.5 w-[calc(33.333%-0.125rem)]' :
                    activeTab === 'project' ? 'left-[calc(33.333%+0.125rem)] w-[calc(33.333%-0.125rem)]' :
                    'left-[calc(66.666%+0.125rem)] w-[calc(33.333%-0.125rem)]'
                  }`}
                />
                
                <button 
                  onClick={() => setActiveTab('feed')}
                  onMouseEnter={() => setHoveredTab('feed')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                    activeTab === 'feed' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  피드
                </button>
                <button 
                  onClick={() => setActiveTab('project')}
                  onMouseEnter={() => setHoveredTab('project')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                    activeTab === 'project' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  프로젝트
                </button>
                <button 
                  onClick={() => setActiveTab('recruit')}
                  onMouseEnter={() => setHoveredTab('recruit')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-1.5 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                    activeTab === 'recruit' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  모집
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in-0 slide-in-from-top-2 duration-500">
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

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
                isSearchOpen 
                  ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg' 
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`}
            >
              <MagnifyingGlassIcon className={`w-5 h-5 transition-colors duration-300 ${
                isSearchOpen 
                  ? 'text-gray-800' 
                  : 'text-gray-600 group-hover:text-gray-900'
              }`} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group relative">
              <BellIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
              {/* 알림 뱃지 */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group">
              <PersonIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
