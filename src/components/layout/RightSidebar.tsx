import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpIcon, GitHubLogoIcon, FigmaLogoIcon, NotionLogoIcon, DiscordLogoIcon, StarFilledIcon, PersonIcon } from '@radix-ui/react-icons'
import { popularProjects, recommendedMembers } from '@/data/sidebarData'

// 아이콘 매핑 함수
const getIcon = (iconName: string) => {
  const iconMap = {
    GitHubLogoIcon: GitHubLogoIcon,
    FigmaLogoIcon: FigmaLogoIcon,
    NotionLogoIcon: NotionLogoIcon,
    DiscordLogoIcon: DiscordLogoIcon,
  }
  return iconMap[iconName as keyof typeof iconMap] || GitHubLogoIcon
}

export function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 sticky top-[70px] self-start min-h-screen border-l border-gray-200 pl-6 pt-6 bg-white">
      <div className="space-y-6">
        {/* 인기 프로젝트 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <StarFilledIcon className="w-4 h-4 text-orange-500" />
              인기 프로젝트
            </h3>
            <div className="space-y-4">
              {popularProjects.map((project) => {
                const IconComponent = getIcon(project.icon)
                return (
                  <div key={project.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                    <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200">{project.name}</h4>
                      <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">{project.description}</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                      <span>{project.stats}</span>
                      <ArrowUpIcon className="w-3 h-3 ml-1 text-green-500 group-hover:text-green-600 transition-colors duration-200" />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-3 text-right pr-2">
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
              {recommendedMembers.map((member) => (
                <div key={member.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
                    <span className="text-gray-600 text-xs font-medium group-hover:text-gray-800 transition-colors duration-200">{member.initial}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200">{member.name}</h4>
                    <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">{member.role}</p>
                  </div>
                  <button className="text-xs text-blue-500 hover:text-blue-700 transition-colors duration-200">팔로우</button>
                </div>
              ))}
            </div>
            <div className="mt-3 text-right pr-2">
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
