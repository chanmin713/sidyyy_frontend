import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpIcon, PlayIcon, PaletteIcon, DesktopIcon, StarIcon } from '@radix-ui/react-icons'

export function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 sticky top-[70px] self-start h-screen border-l border-gray-200 pl-6 pt-6 bg-white">
      <div className="space-y-6">
        {/* 인기 프로젝트 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">🔥 인기 프로젝트</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">플레이포켓</h4>
                  <p className="text-xs text-gray-500">게임 가격 비교 서비스</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span>2.1k</span>
                  <ArrowUpIcon className="w-3 h-3 ml-1 text-green-500" />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <PaletteIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">디자인 가이드</h4>
                  <p className="text-xs text-gray-500">UI/UX 레퍼런스 모음</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span>1.8k</span>
                  <ArrowUpIcon className="w-3 h-3 ml-1 text-green-500" />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <DesktopIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">맥북 가이드</h4>
                  <p className="text-xs text-gray-500">개발자용 맥북 추천</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span>1.5k</span>
                  <ArrowUpIcon className="w-3 h-3 ml-1 text-green-500" />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">스타트업 로드맵</h4>
                  <p className="text-xs text-gray-500">창업 가이드북</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span>1.2k</span>
                  <ArrowUpIcon className="w-3 h-3 ml-1 text-green-500" />
                </div>
              </div>
            </div>
            <div className="mt-3 text-right">
              <button className="text-xs text-gray-500 hover:text-gray-700">
                더보기 →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* 추천 멤버 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">👥 추천 멤버</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">김</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">김개발</h4>
                  <p className="text-xs text-gray-500">프론트엔드 개발자</p>
                </div>
                <button className="text-xs text-blue-500 hover:text-blue-700">팔로우</button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">이</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">이디자인</h4>
                  <p className="text-xs text-gray-500">UI/UX 디자이너</p>
                </div>
                <button className="text-xs text-blue-500 hover:text-blue-700">팔로우</button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">박</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">박스타트업</h4>
                  <p className="text-xs text-gray-500">스타트업 창업자</p>
                </div>
                <button className="text-xs text-blue-500 hover:text-blue-700">팔로우</button>
              </div>
            </div>
            <div className="mt-3 text-right">
              <button className="text-xs text-gray-500 hover:text-gray-700">
                더보기 →
              </button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
