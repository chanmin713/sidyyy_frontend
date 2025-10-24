import { PersonIcon } from '@radix-ui/react-icons'

export function PostInput() {
  return (
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="flex items-center cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-3 border-2 border-gray-300">
          <PersonIcon className="w-5 h-5 text-gray-600" />
        </div>
        <div className="text-gray-500">무슨 생각을 하고 계신가요?</div>
      </div>
    </div>
  )
}