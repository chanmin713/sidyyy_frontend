import { Card, CardContent } from '@/components/ui/card'

export function Sidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* 프로필 카드 */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sidyyy</h3>
            <p className="text-gray-600 text-sm mb-4">
              주체적인 삶으로 가득한 세상,<br />
              1200+명의 Sidyyy와 함께해요.
            </p>
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Sidyyy 시작하기
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
