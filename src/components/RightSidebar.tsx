import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpIcon, InfoCircledIcon } from '@radix-ui/react-icons'

export function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 sticky top-[70px] self-start h-screen border-l border-gray-200 pl-6">
      <div className="space-y-6">
        {/* 인기 프로젝트 */}
        <div className="bg-white">
          <div className="flex items-center mb-4">
            <span className="text-orange-500 mr-2">🔥</span>
            <h3 className="font-semibold text-gray-900">인기 프로젝트</h3>
            <InfoCircledIcon className="w-4 h-4 text-gray-400 ml-2" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">1</span>
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">🏠</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 text-sm">플레이포켓</span>
                  <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">새로 나온</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">2</span>
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">🎨</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 text-sm">디자인 가이드</span>
                  <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">인기</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">3</span>
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">💻</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 text-sm">맥북 가이드</span>
                  <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">추천</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">4</span>
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">🚀</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 text-sm">스타트업 로드맵</span>
                  <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">핫</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 멤버 */}
        <div className="bg-white">
          <div className="flex items-center mb-4">
            <span className="text-orange-500 mr-2">🔥</span>
            <h3 className="font-semibold text-gray-900">추천 멤버</h3>
            <InfoCircledIcon className="w-4 h-4 text-gray-400 ml-2" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">1</span>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-medium">김</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900">김개발 님의 #프론트엔드</div>
                <div className="text-xs text-gray-500 truncate">React와 TypeScript로 웹앱 개발 중...</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">2</span>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs font-medium">이</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900">이디자인 님의 #UIUX</div>
                <div className="text-xs text-gray-500 truncate">사용자 경험을 고려한 디자인...</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-4">3</span>
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-medium">박</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900">박스타트업 님의 #창업</div>
                <div className="text-xs text-gray-500 truncate">스타트업 성장 스토리와 인사이트...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
