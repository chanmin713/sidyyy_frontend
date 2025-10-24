import { Card, CardContent } from '@/components/ui/card'

interface PostCardProps {
  author: string
  title: string
  subtitle: string
  timestamp: string
  content: string
  likes: number
  comments: number
  shares: number
  bookmarks: number
}

export function PostCard({ 
  author, 
  title, 
  subtitle, 
  timestamp, 
  content, 
  likes, 
  comments, 
  shares, 
  bookmarks 
}: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold text-gray-900">{author}</span>
              <span className="text-gray-600 text-sm">{title}</span>
              <span className="text-gray-500 text-sm">·</span>
              <span className="text-gray-500 text-sm">{timestamp}</span>
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed whitespace-pre-line">{content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">{likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm">{comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span className="text-sm">{shares}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-yellow-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="text-sm">{bookmarks}</span>
                </button>
              </div>
              <button className="text-gray-500 hover:text-gray-700 text-sm">
                ...더 보기
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
