import { memo } from 'react';
import { HeartIcon, PersonIcon } from '@radix-ui/react-icons';
import { Comment } from '@/types';

interface CommentSectionProps {
  comments: Comment[];
  onFileAttach: () => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  commentInputRef: React.RefObject<HTMLTextAreaElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

export const CommentSection = memo(function CommentSection({
  comments,
  onFileAttach,
  onFileChange,
  commentInputRef,
  fileInputRef,
}: CommentSectionProps) {
  return (
    <div className='mt-8 bg-white rounded-lg border border-gray-200 p-6'>
      <h2 className='text-lg font-semibold mb-4'>댓글 {comments.length}개</h2>

      {/* 댓글 작성 */}
      <div className='mb-6'>
        <div className='flex gap-3'>
          <div className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0'>
            <PersonIcon className='w-4 h-4 text-gray-500' />
          </div>
          <div className='flex-1'>
            <div className='relative'>
              <textarea
                ref={commentInputRef}
                placeholder='댓글을 작성하세요...'
                className='w-full p-3.5 pr-12 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                rows={3}
              />
              {/* 파일 첨부 버튼 */}
              <button
                onClick={onFileAttach}
                className='absolute right-3 top-3 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors'
                title='이미지 첨부'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                  />
                </svg>
              </button>
            </div>

            {/* 숨겨진 파일 input */}
            <input
              ref={fileInputRef}
              type='file'
              className='hidden'
              accept='image/*'
              onChange={onFileChange}
            />

            <div className='flex justify-end mt-2.5'>
              <button className='px-5 py-2.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                댓글 작성
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 목록 */}
      <div className='space-y-4'>
        {comments.map(comment => (
          <div key={comment.id}>
            {/* 최상위 댓글 */}
            <div className='flex gap-3'>
              <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0'>
                <PersonIcon className='w-4 h-4 text-gray-500' />
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='font-medium text-sm'>{comment.author}</span>
                  <span className='text-xs text-gray-500'>
                    {comment.timestamp}
                  </span>
                </div>
                <p className='text-sm text-gray-700 mb-2'>{comment.content}</p>
                <div className='flex items-center gap-4'>
                  <button className='flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors'>
                    <HeartIcon className='w-3 h-3' />
                    <span>{comment.likes}</span>
                  </button>
                  <button className='text-xs text-gray-500 hover:text-gray-700 transition-colors'>
                    답글
                  </button>
                </div>
              </div>
            </div>

            {/* 답글들 - 들여쓰기와 시각적 차이 적용 */}
            {comment.replies && comment.replies.length > 0 && (
              <div className='mt-3 ml-11 border-l-2 border-gray-100 pl-4 space-y-3'>
                {comment.replies.map(reply => (
                  <div key={reply.id} className='flex gap-2'>
                    {/* 대댓글 프로필 아이콘 - 더 작게 */}
                    <div className='w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0'>
                      <PersonIcon className='w-3 h-3 text-gray-400' />
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-center gap-2 mb-1'>
                        <span className='font-medium text-sm text-gray-700'>
                          {reply.author}
                        </span>
                        <span className='text-xs text-gray-500'>
                          {reply.timestamp}
                        </span>
                      </div>
                      <p className='text-sm text-gray-700 mb-2 leading-relaxed'>
                        {reply.content}
                      </p>
                      <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors'>
                          <HeartIcon className='w-3 h-3' />
                          <span>{reply.likes}</span>
                        </button>
                        <button className='text-xs text-gray-500 hover:text-gray-700 transition-colors'>
                          답글
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
