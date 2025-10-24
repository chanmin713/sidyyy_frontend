import { memo, useState } from 'react';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import type { ProjectProperties } from '@/types';

interface ProjectInteractionsProps {
  project: ProjectProperties;
  onLike?: () => void;
  onComment?: () => void;
}

export const ProjectInteractions = memo(function ProjectInteractions({
  project,
  onLike,
  onComment,
}: ProjectInteractionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
    onLike?.();
  };

  return (
    <div className='flex items-center gap-6 pt-4 border-t border-gray-200'>
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isLiked
            ? 'text-red-500 bg-red-50 hover:bg-red-100'
            : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
        }`}
        title={isLiked ? '좋아요 취소' : '좋아요'}
      >
        <HeartIcon className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        <span className='text-sm font-medium'>{likeCount}</span>
        <span className='text-xs text-gray-400 ml-1'>좋아요</span>
      </button>

      <button
        onClick={onComment}
        className='flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors'
        title='댓글 보기'
      >
        <ChatBubbleIcon className='w-4 h-4' />
        <span className='text-sm font-medium'>{project.comments}</span>
        <span className='text-xs text-gray-400 ml-1'>댓글</span>
      </button>
    </div>
  );
});
