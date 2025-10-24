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
  hasImage?: boolean
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
  bookmarks,
  hasImage = false
}: PostCardProps) {
  return (
    <div className="px-4">
      <div className="rounded-lg flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div className="flex-grow min-w-0 overflow-hidden">
              <div className="flex items-baseline gap-1 overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold hover:underline text-sm md:text-base">{author}</p>
                    {title && (
                      <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    )}
                  </div>
                </div>
                {subtitle && (
                  <p className="text-xs text-muted-foreground flex-grow min-w-0 truncate">{subtitle}</p>
                )}
                <p className="text-xs text-muted-foreground flex-shrink-0">·&nbsp;&nbsp;{timestamp}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cursor-pointer py-1 pl-[44px]" style={{ marginTop: '-12px' }}>
          <div className="mb-3 relative">
            <p className="text-sm md:text-base whitespace-pre-wrap" style={{ 
              display: '-webkit-box', 
              WebkitLineClamp: 12, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden', 
              maxHeight: '18rem' 
            }}>
              {content}
            </p>
            <button className="text-gray-500 hover:text-gray-700 text-sm md:text-base absolute bottom-0 right-0 pl-4">
              ...더 보기
            </button>
          </div>
        </div>
        
        {hasImage && (
          <div className="relative w-full mt-3 rounded-md overflow-hidden bg-blue-100" style={{ aspectRatio: '16 / 9' }}>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">이미지</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground px-[44px] pt-2">
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-red-100 group disabled:opacity-50">
            <svg className="w-4 h-4 text-muted-foreground group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="group-hover:text-red-500">{likes}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-blue-100 hover:text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
            </svg>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-yellow-100 group disabled:opacity-50">
            <svg className="w-4 h-4 text-muted-foreground group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="group-hover:text-yellow-500">{bookmarks}</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 my-4"></div>
    </div>
  )
}