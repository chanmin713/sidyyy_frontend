import { HomeIcon, FileTextIcon, PlusIcon, PersonIcon, PersonIcon as UsersIcon } from '@radix-ui/react-icons'

export function MobileNavigation() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="flex justify-around py-3">
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900 text-xs">
          <HomeIcon className="w-5 h-5 mb-1" />
          <span>피드</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900 text-xs">
          <FileTextIcon className="w-5 h-5 mb-1" />
          <span>프로젝트</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900 text-xs">
          <PlusIcon className="w-5 h-5 mb-1" />
          <span>작성</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900 text-xs">
          <UsersIcon className="w-5 h-5 mb-1" />
          <span>모집</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900 text-xs">
          <PersonIcon className="w-5 h-5 mb-1" />
          <span>프로필</span>
        </a>
      </div>
    </nav>
  )
}
