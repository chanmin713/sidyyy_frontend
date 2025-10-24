import { Card, CardContent } from '@/components/ui/card'

export function LeftSidebar() {
  return (
    <div className="hidden md:block w-1/5 sticky top-[70px] self-start h-screen border-r border-gray-200">
      <div className="flex flex-col items-center p-4 rounded-lg text-center">
        <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center border-2 border-gray-300">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <p className="text-sm font-semibold mb-4">
          주체적인 삶으로 가득한 세상,<br />
          1200+명의 Sidyyy와 함께해요.
        </p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
          Sidyyy 시작하기
        </button>
      </div>
    </div>
  )
}
