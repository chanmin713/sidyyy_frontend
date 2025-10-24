import { memo } from 'react';
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
  HeartIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';
import { Dropdown } from '@/components/ui/dropdown';
import { ProfileSection } from '@/components/common/ProfileSection';
import { Post } from '@/types';
import { samplePosts } from '@/data/samplePosts';

interface PostContentProps {
  post: Post;
  onProjectClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCommentClick: () => void;
}

// 프로젝트 로고 아이콘 반환
const getProjectLogo = (logoName?: string) => {
  switch (logoName) {
    case 'VercelLogoIcon':
      return <VercelLogoIcon className='w-6 h-6' />;
    case 'GitHubLogoIcon':
      return <GitHubLogoIcon className='w-6 h-6' />;
    case 'NotionLogoIcon':
      return <NotionLogoIcon className='w-6 h-6' />;
    case 'DiscordLogoIcon':
      return <DiscordLogoIcon className='w-6 h-6' />;
    case 'FigmaLogoIcon':
      return <FigmaLogoIcon className='w-6 h-6' />;
    case 'InstagramLogoIcon':
      return <InstagramLogoIcon className='w-6 h-6' />;
    default:
      return <GitHubLogoIcon className='w-6 h-6' />;
  }
};

// 프로젝트별 로그 번호 계산
const getProjectLogNumber = (postId: string, category?: string) => {
  if (!category || !postId) return 1;

  // 해당 프로젝트의 모든 로그를 찾아서 순서 계산
  const projectLogs = samplePosts
    .filter(post => post.category === category)
    .sort((a, b) => {
      // 시간순으로 정렬 (최신순)
      const getTimeValue = (time: string) => {
        if (time.includes('시간 전')) return 0;
        if (time.includes('일 전')) return 1;
        if (time.includes('주 전')) return 2;
        if (time.includes('개월 전')) return 3;
        if (time.includes('년 전')) return 4;
        return 5;
      };
      return getTimeValue(a.timestamp) - getTimeValue(b.timestamp);
    });

  // 현재 로그의 순서 찾기
  const currentIndex = projectLogs.findIndex(post => post.id === postId);
  return currentIndex + 1;
};

// 이미지가 포함된 콘텐츠 렌더링
const renderContentWithImages = (content: string) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const parts = content.split(imageRegex);

  return parts
    .map((part, index) => {
      if (index % 3 === 0) {
        // 텍스트 부분
        return <span key={index}>{part}</span>;
      } else if (index % 3 === 1) {
        // 이미지 alt 텍스트 (사용하지 않음)
        return null;
      } else {
        // 이미지 URL
        return (
          <img
            key={index}
            src={part}
            alt='첨부된 이미지'
            className='inline-block max-w-full h-auto rounded-lg my-2 mx-1'
            style={{ maxHeight: '300px' }}
          />
        );
      }
    })
    .filter(Boolean);
};

export const PostContent = memo(function PostContent({
  post,
  onProjectClick,
  onEdit,
  onDelete,
  onCommentClick,
}: PostContentProps) {
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
              {getProjectLogo(post.projectLogo)}
              {post.category} #{getProjectLogNumber(post.id, post.category)}
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
            {renderContentWithImages(post.content)}
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
          <div
            className='relative w-full rounded-lg overflow-hidden bg-gray-100'
            style={{ aspectRatio: '16 / 9' }}
          >
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
