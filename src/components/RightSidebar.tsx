import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpIcon, GitHubLogoIcon, FigmaLogoIcon, NotionLogoIcon, DiscordLogoIcon, StarFilledIcon, PersonIcon } from '@radix-ui/react-icons'

export function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 h-full border-l border-gray-200 pl-6 pt-6 bg-white overflow-y-auto">
      <div className="space-y-6">
        {/* 인기 프로젝트 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <StarFilledIcon className="w-4 h-4 text-orange-500" />
              인기 프로젝트
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <GitHubLogoIcon className="w-6 h-6 text-gray-700" />
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
                <div className="w-10 h-10 flex items-center justify-center">
                  <FigmaLogoIcon className="w-6 h-6 text-gray-700" />
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
                <div className="w-10 h-10 flex items-center justify-center">
                  <NotionLogoIcon className="w-6 h-6 text-gray-700" />
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
                <div className="w-10 h-10 flex items-center justify-center">
                  <DiscordLogoIcon className="w-6 h-6 text-gray-700" />
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
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <PersonIcon className="w-4 h-4 text-blue-500" />
              추천 멤버
            </h3>
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
