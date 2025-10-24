import { memo } from 'react';
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
  HeartIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { Dropdown } from '@/components/ui/navigation/dropdown';
import { ProfileSection } from '@/components/common/ProfileSection';
import { Post } from '@/types';
import {
  getProjectLogo,
  getProjectLogNumber,
  renderContentWithImages,
} from '@/utils';

interface PostContentProps {
  post: Post;
  onProjectClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCommentClick: () => void;
}

export const PostContent = memo(function PostContent({
  post,
  onProjectClick,
  onEdit,
  onDelete,
  onCommentClick,
}: PostContentProps) {
  // 프로젝트 로고 아이콘 반환
  const ProjectLogo = getProjectLogo(post.projectLogo);

  // 프로젝트별 로그 번호 계산
  const projectLogNumber = getProjectLogNumber(post.id, post.category);

  // 이미지가 포함된 콘텐츠 렌더링
  const contentWithImages = renderContentWithImages(post.content);
  return (
    <article className='bg-white rounded-lg border border-gray-200 p-6'>
      {/* 프로젝트 제목과 날짜 */}
      {post.category && (
        <div className='mb-4 flex items-center justify-between'>
          <button
            onClick={onProjectClick}
            className='text-left hover:underline'
          >
            <h1 className='text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-3'>
              <ProjectLogo className='w-6 h-6' />
              {post.category} #{projectLogNumber}
            </h1>
          </button>
          <span className='text-sm text-gray-500'>{post.timestamp}</span>
        </div>
      )}

      {/* 작성자 정보와 더보기 메뉴 */}
      <div className='flex items-start justify-between mb-4'>
        <ProfileSection
          author={post.author}
          authorRole={post.authorRole}
          size='md'
        />

        {/* 더보기 메뉴 */}
        <Dropdown
          trigger={
            <button
              className='p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors'
              title='더보기'
            >
              <DotsHorizontalIcon className='w-5 h-5' />
            </button>
          }
          align='right'
          className='w-36'
        >
          <div className='py-1'>
            <button
              onClick={onEdit}
              className='w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2'
            >
              <Pencil1Icon className='w-4 h-4' />
              수정
            </button>
            <button
              onClick={onDelete}
              className='w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2'
            >
              <TrashIcon className='w-4 h-4' />
              삭제
            </button>
          </div>
        </Dropdown>
      </div>

      {/* 글 본문 */}
      <div className='mb-6'>
        <div className='prose max-w-none'>
          <div className='text-base leading-relaxed whitespace-pre-wrap'>
            {contentWithImages}
          </div>
        </div>
      </div>

      {/* 해시태그 */}
      {post.hashtags && post.hashtags.length > 0 && (
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {post.hashtags.map((hashtag, index) => (
              <span
                key={index}
                className='text-sm text-blue-600 hover:text-blue-800 cursor-pointer hover:underline'
              >
                #{hashtag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 이미지 */}
      {post.hasImage && (
        <div className='mb-6'>
          <div className='relative w-full rounded-lg overflow-hidden bg-gray-100 aspect-video'>
            <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
              <span className='text-gray-500 text-lg'>이미지</span>
            </div>
          </div>
        </div>
      )}

      {/* 액션 버튼들 */}
      <div className='flex items-center gap-8 text-sm text-gray-600 pt-4 border-t border-gray-200'>
        <button className='flex items-center gap-2 rounded-lg p-3 -m-3 bg-transparent hover:bg-red-50 group transition-colors'>
          <HeartIcon className='w-5 h-5 text-gray-500 group-hover:text-red-500' />
          <span className='group-hover:text-red-500 font-medium'>
            {post.likes}
          </span>
        </button>
        <button
          className='flex items-center gap-2 rounded-lg p-3 -m-3 bg-transparent hover:bg-green-50 hover:text-green-600 transition-colors'
          onClick={onCommentClick}
        >
          <ChatBubbleIcon className='w-5 h-5' />
          <span className='font-medium'>{post.comments}</span>
        </button>
      </div>
    </article>
  );
});
