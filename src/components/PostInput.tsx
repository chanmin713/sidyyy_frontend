export function PostInput() {
  return (
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="flex items-center cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-3 border-2 border-gray-300">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <div className="text-gray-500">무슨 생각을 하고 계신가요?</div>
      </div>
    </div>
  )
}