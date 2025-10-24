import { memo, useMemo } from 'react'
import { PersonIcon, HeartIcon, ChatBubbleIcon, Share2Icon } from '@radix-ui/react-icons'
import type { PostCardProps } from '@/types'
import { SPACING, COLORS, SIZES } from '@/constants'

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
  // 실제 줄 수로 판단 (줄바꿈 개수 기준) - 성능 최적화
  const shouldShowMoreButton = useMemo(() => {
    const lineCount = content.split('\n').length
    return lineCount > 10
  }, [content])
  return (
    <div className={`${isFirst ? 'pt-6 pb-4' : 'py-4'} ${isLast ? 'mb-6' : ''}`}>
      <div className="rounded-lg flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-start flex-1">
            <div className="flex-shrink-0">
              <div className={`${SIZES.AVATAR} rounded-full flex items-center justify-center mr-2 border-2 border-gray-300`}>
                <PersonIcon className={`${SIZES.ICON_MD} ${COLORS.SECONDARY}`} />
              </div>
            </div>
            <div className="flex-grow min-w-0 overflow-hidden">
                  <div className="flex items-baseline gap-1 overflow-hidden">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <p className={`font-semibold ${COLORS.HOVER} text-sm md:text-base`}>{author}</p>
                        <p className={`text-xs ${COLORS.MUTED} flex-shrink-0`}>·&nbsp;&nbsp;{timestamp}</p>
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
        
        <div className={`cursor-pointer py-1 ${SPACING.CARD_PADDING}`} style={{ marginTop: '-12px' }}>
          <div className="mb-3">
            <div className="relative">
                  <p className="text-sm md:text-base whitespace-pre-wrap" style={{ 
                    display: shouldShowMoreButton ? '-webkit-box' : 'block',
                    WebkitLineClamp: shouldShowMoreButton ? 10 : 'none', 
                    WebkitBoxOrient: 'vertical', 
                    overflow: 'hidden', 
                    maxHeight: shouldShowMoreButton ? '15rem' : 'none'
                  }}>
                    {content}
                  </p>
                  {shouldShowMoreButton && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                  )}
            </div>
            {shouldShowMoreButton && (
              <div className="mt-2 text-right pr-4">
                <button className="text-gray-500 hover:text-gray-700 text-sm md:text-base">
                  더 보기 →
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 해시태그 */}
        {hashtags && hashtags.length > 0 && (
          <div className={`${SPACING.CARD_PADDING} py-2`}>
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
        
        <div className={`flex justify-between items-center text-xs md:text-sm ${COLORS.MUTED} ${SPACING.CARD_PADDING} pt-2`}>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-red-100 group disabled:opacity-50">
            <HeartIcon className={`${SIZES.ICON_SM} ${COLORS.MUTED} group-hover:text-red-500`} />
            <span className="group-hover:text-red-500">{likes}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500">
            <ChatBubbleIcon className={SIZES.ICON_SM} />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-blue-100 hover:text-blue-500">
            <Share2Icon className={SIZES.ICON_SM} />
          </button>
        </div>
      </div>
      {!isLast && <div className="border-b border-gray-200 mt-6"></div>}
    </div>
  )
})