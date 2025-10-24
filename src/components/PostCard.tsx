import { Card, CardContent } from '@/components/ui/card'
import { PersonIcon, HeartIcon, ChatBubbleIcon, Share2Icon, BookmarkIcon } from '@radix-ui/react-icons'

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
  isLast?: boolean
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
  hasImage = false,
  isLast = false
}: PostCardProps) {
  return (
    <div>
      <div className="rounded-lg flex flex-col bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                <PersonIcon className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex-grow min-w-0 overflow-hidden">
              <div className="flex items-baseline gap-1 overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold hover:underline text-sm md:text-base">{author}</p>
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
            <HeartIcon className="w-4 h-4 text-muted-foreground group-hover:text-red-500" />
            <span className="group-hover:text-red-500">{likes}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500">
            <ChatBubbleIcon className="w-4 h-4" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-blue-100 hover:text-blue-500">
            <Share2Icon className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-yellow-100 group disabled:opacity-50">
            <BookmarkIcon className="w-4 h-4 text-muted-foreground group-hover:text-yellow-500" />
            <span className="group-hover:text-yellow-500">{bookmarks}</span>
          </button>
        </div>
      </div>
      {!isLast && <div className="border-b border-gray-200 my-4"></div>}
    </div>
  )
}