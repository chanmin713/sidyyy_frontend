import { memo, useState } from 'react';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import type { ProjectComment } from '@/types';
import { ProfileSection } from '@/components/common/ProfileSection';

interface ProjectCommentsProps {
  comments: ProjectComment[];
  onAddComment?: (content: string) => void;
  onReply?: (commentId: string, content: string) => void;
}

export const ProjectComments = memo(function ProjectComments({
  comments,
  onAddComment,
  onReply,
}: ProjectCommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment?.(newComment.trim());
      setNewComment('');
    }
  };

  const handleSubmitReply = (commentId: string) => {
    if (replyContent.trim()) {
      onReply?.(commentId, replyContent.trim());
      setReplyContent('');
      setReplyingTo(null);
    }
  };

  return (
    <div className='space-y-6'>
      {/* 댓글 작성 */}
      <div className='bg-white border border-gray-200 rounded-lg p-4'>
        <form onSubmit={handleSubmitComment} className='space-y-3'>
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder='프로젝트에 대한 의견을 남겨보세요...'
            className='w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            rows={3}
          />
          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={!newComment.trim()}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              댓글 작성
            </button>
          </div>
        </form>
      </div>

      {/* 댓글 목록 */}
      <div className='space-y-4'>
        {comments.map(comment => (
          <div
            key={comment.id}
            className='bg-white border border-gray-200 rounded-lg p-4'
          >
            <div className='flex items-start gap-3'>
              <ProfileSection
                author={comment.author}
                size='md'
                className='flex-shrink-0'
              />
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-xs text-gray-500'>
                    {comment.timestamp}
                  </span>
                </div>
                <p className='text-sm text-gray-700 mb-3 leading-relaxed'>
                  {comment.content}
                </p>

                <div className='flex items-center gap-4'>
                  <button className='flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors'>
                    <HeartIcon className='w-4 h-4' />
                    <span className='text-xs'>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() =>
                      setReplyingTo(
                        replyingTo === comment.id ? null : comment.id
                      )
                    }
                    className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
                  >
                    <ChatBubbleIcon className='w-4 h-4' />
                    <span className='text-xs'>답글</span>
                  </button>
                </div>

                {/* 답글 작성 */}
                {replyingTo === comment.id && (
                  <div className='mt-3 pl-4 border-l-2 border-gray-100'>
                    <div className='space-y-2'>
                      <textarea
                        value={replyContent}
                        onChange={e => setReplyContent(e.target.value)}
                        placeholder='답글을 작성하세요...'
                        className='w-full p-2 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        rows={2}
                      />
                      <div className='flex gap-2'>
                        <button
                          onClick={() => handleSubmitReply(comment.id)}
                          disabled={!replyContent.trim()}
                          className='px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                        >
                          답글 작성
                        </button>
                        <button
                          onClick={() => {
                            setReplyingTo(null);
                            setReplyContent('');
                          }}
                          className='px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors'
                        >
                          취소
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 답글 목록 */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className='mt-3 space-y-3'>
                    {comment.replies.map(reply => (
                      <div
                        key={reply.id}
                        className='flex items-start gap-3 pl-4 border-l-2 border-gray-100'
                      >
                        <ProfileSection
                          author={reply.author}
                          size='sm'
                          className='flex-shrink-0'
                        />
                        <div className='flex-1 min-w-0'>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-xs text-gray-500'>
                              {reply.timestamp}
                            </span>
                          </div>
                          <p className='text-xs text-gray-700 mb-2 leading-relaxed'>
                            {reply.content}
                          </p>
                          <button className='flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors'>
                            <HeartIcon className='w-3 h-3' />
                            <span className='text-xs'>{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
