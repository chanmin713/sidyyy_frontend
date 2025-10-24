import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeartIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';
import type { PostCardProps } from '@/types';
import { truncateText } from '@/utils';
import { ProfileSection } from '@/components/common/ProfileSection';
import { samplePosts } from '@/data/samplePosts';

export const PostCard = memo(function PostCard({
  author,
  authorRole,
  timestamp,
  content,
  hashtags,
  likes,
  comments,
  hasImage = false,
  isLast = false,
  isFirst = false,
  category,
  projectLogo,
  id,
}: PostCardProps) {
  const navigate = useNavigate();

  // 텍스트 줄 수 판단 및 자르기 - 성능 최적화
  const textInfo = useMemo(() => {
    return truncateText(content, 10);
  }, [content]);

  const handlePostClick = () => {
    if (id) {
      navigate(`/post/${id}`);
    }
  };

  const handleCommentClick = () => {
    if (id) {
      navigate(`/post/${id}#comments`);
    }
  };

  const handleProjectClick = () => {
    if (category) {
      navigate(`/project/${encodeURIComponent(category)}`);
    }
  };

  // 프로젝트 로고 아이콘 반환
  const getProjectLogo = (logoName?: string) => {
    switch (logoName) {
      case 'VercelLogoIcon':
        return <VercelLogoIcon className='w-5 h-5' />;
      case 'GitHubLogoIcon':
        return <GitHubLogoIcon className='w-5 h-5' />;
      case 'NotionLogoIcon':
        return <NotionLogoIcon className='w-5 h-5' />;
      case 'DiscordLogoIcon':
        return <DiscordLogoIcon className='w-5 h-5' />;
      case 'FigmaLogoIcon':
        return <FigmaLogoIcon className='w-5 h-5' />;
      case 'InstagramLogoIcon':
        return <InstagramLogoIcon className='w-5 h-5' />;
      default:
        return <GitHubLogoIcon className='w-5 h-5' />;
    }
  };

  // 프로젝트별 로그 번호 계산
  const getProjectLogNumber = () => {
    if (!category || !id) return 1;

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
    const currentIndex = projectLogs.findIndex(post => post.id === id);
    return currentIndex + 1;
  };

  // 이미지가 포함된 콘텐츠 렌더링
  const renderContentWithImages = (text: string) => {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const parts = text.split(imageRegex);

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
              className='inline-block max-w-full h-auto rounded-lg my-1 mx-1'
              style={{ maxHeight: '200px' }}
            />
          );
        }
      })
      .filter(Boolean);
  };
  return (
    <div
      className={`${isFirst ? 'pt-6 pb-4' : 'py-4'} ${isLast ? 'mb-6' : ''}`}
    >
      <div className='rounded-lg flex flex-col'>
        {/* 프로젝트 제목과 시간 */}
        <div className='flex items-center justify-between mb-3'>
          {category && (
            <button
              onClick={handleProjectClick}
              className='text-left hover:underline group'
            >
              <h2 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2'>
                {getProjectLogo(projectLogo)}
                {category} #{getProjectLogNumber()}
              </h2>
            </button>
          )}
          <span className='text-sm text-gray-500 flex-shrink-0'>
            {timestamp}
          </span>
        </div>

        {/* 작성자 정보 */}
        <div className='mb-2'>
          <ProfileSection author={author} authorRole={authorRole} size='sm' />
        </div>

        <div
          className='cursor-pointer py-1 pl-card-padding'
          style={{ marginTop: '8px' }}
          onClick={handlePostClick}
        >
          <div className='mb-3'>
            <div className='relative'>
              <div
                className='text-sm md:text-base whitespace-pre-wrap'
                style={{
                  display: textInfo.shouldTruncate ? '-webkit-box' : 'block',
                  WebkitLineClamp: textInfo.shouldTruncate ? 10 : 'none',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  maxHeight: textInfo.shouldTruncate ? '15rem' : 'none',
                }}
              >
                {renderContentWithImages(textInfo.truncatedText)}
              </div>
              {textInfo.shouldTruncate && (
                <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none'></div>
              )}
            </div>
            {textInfo.shouldTruncate && (
              <div className='mt-2 text-right'>
                <button
                  className='text-gray-500 text-xs'
                  onClick={e => {
                    e.stopPropagation();
                    handlePostClick();
                  }}
                >
                  더 보기 →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 해시태그 */}
        {hashtags && hashtags.length > 0 && (
          <div className='px-card-padding py-2'>
            <div className='flex flex-wrap gap-1'>
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className='text-xs text-blue-600 hover:text-blue-800 cursor-pointer'
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        )}

        {hasImage && (
          <div
            className='relative w-full mt-3 rounded-md overflow-hidden bg-blue-100'
            style={{ aspectRatio: '16 / 9' }}
          >
            <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
              <span className='text-gray-500'>이미지</span>
            </div>
          </div>
        )}

        <div className='flex items-center gap-8 text-xs md:text-sm text-muted-foreground px-card-padding pt-2'>
          <button className='flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-red-100 group disabled:opacity-50'>
            <HeartIcon className='w-icon-sm h-icon-sm text-muted-foreground group-hover:text-red-500' />
            <span className='group-hover:text-red-500'>{likes}</span>
          </button>
          <button
            className='flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500'
            onClick={e => {
              e.stopPropagation();
              handleCommentClick();
            }}
          >
            <ChatBubbleIcon className='w-icon-sm h-icon-sm' />
            <span>{comments}</span>
          </button>
        </div>
      </div>
      {!isLast && <div className='border-b border-gray-200 mt-6'></div>}
    </div>
  );
});
