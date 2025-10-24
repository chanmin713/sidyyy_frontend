import { memo, useMemo, useCallback } from 'react';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import type { PostCardProps } from '@/types';
import {
  truncateText,
  getProjectLogo,
  getProjectLogNumber,
  renderContentWithImages,
} from '@/utils';
import { ProfileSection } from '@/components/common/ProfileSection';
import { useNavigation } from '@/hooks';

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
  const { navigateToPost, navigateToProject } = useNavigation();

  // 텍스트 줄 수 판단 및 자르기 - 성능 최적화
  const textInfo = useMemo(() => {
    return truncateText(content, 10);
  }, [content]);

  const handlePostClick = useCallback(() => {
    if (id) {
      navigateToPost(id);
    }
  }, [id, navigateToPost]);

  const handleCommentClick = useCallback(() => {
    if (id) {
      navigateToPost(id);
    }
  }, [id, navigateToPost]);

  const handleProjectClick = useCallback(() => {
    if (category) {
      navigateToProject(category);
    }
  }, [category, navigateToProject]);

  // 프로젝트 로고 아이콘 반환
  const ProjectLogo = useMemo(() => getProjectLogo(projectLogo), [projectLogo]);

  // 프로젝트별 로그 번호 계산
  const projectLogNumber = useMemo(
    () => getProjectLogNumber(id, category),
    [id, category]
  );

  // 이미지가 포함된 콘텐츠 렌더링
  const contentWithImages = useMemo(
    () => renderContentWithImages(textInfo.truncatedText, '200px'),
    [textInfo.truncatedText]
  );
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
                <ProjectLogo className='w-5 h-5' />
                {category} #{projectLogNumber}
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
          className='cursor-pointer py-1 pl-card-padding mt-2'
          onClick={handlePostClick}
        >
          <div className='mb-3'>
            <div className='relative'>
              <div
                className={`text-sm md:text-base whitespace-pre-wrap ${
                  textInfo.shouldTruncate
                    ? 'line-clamp-10 max-h-60 overflow-hidden'
                    : ''
                }`}
              >
                {contentWithImages}
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
          <div className='relative w-full mt-3 rounded-md overflow-hidden bg-blue-100 aspect-video'>
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
