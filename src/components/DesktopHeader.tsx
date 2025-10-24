import { useState } from 'react'
import { PersonIcon, MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

export function DesktopHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('feed')
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

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
          <div className="flex-1 max-w-2xl mx-8">
            {!isSearchOpen ? (
              <div className="flex bg-gray-50 rounded-lg p-1 shadow-sm relative animate-in fade-in-0 slide-in-from-top-2 duration-500">
                {/* 움직이는 흰색 배경 */}
                <div 
                  className={`absolute top-1 bottom-1 bg-white rounded-md shadow-sm transition-all duration-500 ease-out ${
                    hoveredTab === 'feed' ? 'left-1 w-[calc(33.333%-0.25rem)]' :
                    hoveredTab === 'project' ? 'left-[calc(33.333%+0.25rem)] w-[calc(33.333%-0.25rem)]' :
                    hoveredTab === 'recruit' ? 'left-[calc(66.666%+0.25rem)] w-[calc(33.333%-0.25rem)]' :
                    activeTab === 'feed' ? 'left-1 w-[calc(33.333%-0.25rem)]' :
                    activeTab === 'project' ? 'left-[calc(33.333%+0.25rem)] w-[calc(33.333%-0.25rem)]' :
                    'left-[calc(66.666%+0.25rem)] w-[calc(33.333%-0.25rem)]'
                  }`}
                />
                
                <button 
                  onClick={() => setActiveTab('feed')}
                  onMouseEnter={() => setHoveredTab('feed')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                    activeTab === 'feed' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  피드
                </button>
                <button 
                  onClick={() => setActiveTab('project')}
                  onMouseEnter={() => setHoveredTab('project')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
                    activeTab === 'project' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  프로젝트
                </button>
                <button 
                  onClick={() => setActiveTab('recruit')}
                  onMouseEnter={() => setHoveredTab('recruit')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-all duration-500 relative z-10 ${
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
                    className="w-full py-3 px-4 pr-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 shadow-lg transition-all duration-500 placeholder:text-gray-600"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
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
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group">
              <PersonIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
