import { Card, CardContent } from '@/components/ui/card'

export function PostInput() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm">U</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
              무슨 생각을 하고 계신가요?
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
