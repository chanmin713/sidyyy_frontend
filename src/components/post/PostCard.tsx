import { memo, useMemo } from 'react'
import { PersonIcon, HeartIcon, ChatBubbleIcon, Share2Icon } from '@radix-ui/react-icons'
import type { PostCardProps } from '@/types'
import { truncateText } from '@/utils/text-utils'

export const PostCard = memo(function PostCard({ 
  author, 
  timestamp, 
  content, 
  hashtags,
  likes, 
  comments, 
  hasImage = false,
  isLast = false,
  isFirst = false,
  category
}: PostCardProps) {
  // 텍스트 줄 수 판단 및 자르기 - 성능 최적화
  const textInfo = useMemo(() => {
    return truncateText(content, 10)
  }, [content])
  return (
    <div className={`${isFirst ? 'pt-6 pb-4' : 'py-4'} ${isLast ? 'mb-6' : ''}`}>
      <div className="rounded-lg flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-start flex-1">
            <div className="flex-shrink-0">
              <div className="w-avatar h-avatar rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                <PersonIcon className="w-icon-md h-icon-md text-gray-500" />
              </div>
            </div>
            <div className="flex-grow min-w-0 overflow-hidden">
                  <div className="flex items-baseline gap-1 overflow-hidden">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <p className="font-semibold hover:underline text-sm md:text-base">{author}</p>
                        <p className="text-xs text-muted-foreground flex-shrink-0">·&nbsp;&nbsp;{timestamp}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          
          {/* 카테고리 칩 */}
          {category && (
            <div className="flex-shrink-0 ml-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
                {category}
              </span>
            </div>
          )}
        </div>
        
        <div className="cursor-pointer py-1 px-card-padding" style={{ marginTop: '-12px' }}>
          <div className="mb-3">
            <div className="relative">
                  <p className="text-sm md:text-base whitespace-pre-wrap" style={{ 
                    display: textInfo.shouldTruncate ? '-webkit-box' : 'block',
                    WebkitLineClamp: textInfo.shouldTruncate ? 10 : 'none', 
                    WebkitBoxOrient: 'vertical', 
                    overflow: 'hidden', 
                    maxHeight: textInfo.shouldTruncate ? '15rem' : 'none'
                  }}>
                    {textInfo.truncatedText}
                  </p>
                  {textInfo.shouldTruncate && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                  )}
            </div>
            {textInfo.shouldTruncate && (
              <div className="mt-2 text-right pr-8">
                <button className="text-gray-500 hover:text-gray-700 text-xs">
                  더 보기 →
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 해시태그 */}
        {hashtags && hashtags.length > 0 && (
          <div className="px-card-padding py-2">
            <div className="flex flex-wrap gap-1">
              {hashtags.map((hashtag, index) => (
                <span key={index} className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {hasImage && (
          <div className="relative w-full mt-3 rounded-md overflow-hidden bg-blue-100" style={{ aspectRatio: '16 / 9' }}>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">이미지</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground px-card-padding pt-2">
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-red-100 group disabled:opacity-50">
            <HeartIcon className="w-icon-sm h-icon-sm text-muted-foreground group-hover:text-red-500" />
            <span className="group-hover:text-red-500">{likes}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500">
            <ChatBubbleIcon className="w-icon-sm h-icon-sm" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-blue-100 hover:text-blue-500">
            <Share2Icon className="w-icon-sm h-icon-sm" />
          </button>
        </div>
      </div>
      {!isLast && <div className="border-b border-gray-200 mt-6"></div>}
    </div>
  )
})