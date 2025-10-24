import { Card, CardContent } from '@/components/ui/card'

export function LeftSidebar() {
  return (
    <div className="hidden md:block w-1/5 sticky top-[70px] self-start h-screen">
      <div className="flex flex-col items-center p-4 rounded-lg text-center">
        <div className="w-14 h-14 bg-black rounded-full mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
