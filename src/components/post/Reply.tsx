import { memo, useState } from 'react'
import { PersonIcon, HeartIcon, ReplyIcon } from '@radix-ui/react-icons'
import type { Reply } from '@/types'

interface ReplyProps {
  reply: Reply
  onReply?: (parentId: string) => void
}

export const ReplyComponent = memo(function ReplyComponent({ reply, onReply }: ReplyProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')

  const handleReply = () => {
    if (replyText.trim()) {
      // 실제로는 API 호출
      console.log('답글 작성:', replyText)
      setReplyText('')
      setIsReplying(false)
    }
  }

  const handleReplyClick = () => {
    if (onReply) {
      onReply(reply.id)
    } else {
      setIsReplying(!isReplying)
    }
  }

  return (
    <div className="ml-8 mt-3 pl-4 border-l-2 border-gray-100">
      <div className="flex gap-3">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
          <PersonIcon className="w-3 h-3 text-gray-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">{reply.author}</span>
            <span className="text-xs text-gray-500">{reply.timestamp}</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            {reply.content}
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
              <HeartIcon className="w-3 h-3" />
              <span>{reply.likes}</span>
            </button>
            <button 
              onClick={handleReplyClick}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              답글
            </button>
          </div>

          {/* 답글 작성 폼 */}
          {isReplying && (
            <div className="mt-3">
              <div className="flex gap-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="답글을 작성하세요..."
                  className="flex-1 p-2 text-xs border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  rows={2}
                />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setIsReplying(false)}
                  className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  취소
                </button>
                <button
                  onClick={handleReply}
                  className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  답글 작성
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})
