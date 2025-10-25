import { memo, useMemo, useCallback } from 'react';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import type { PostCardProps } from '@/types';
import {
  truncateText,
  getProjectLogo,
  getProjectLogNumber,
  renderContentWithImages,
} from '@/utils';
import { ProfileSection } from '@/components/shared/ProfileSection';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';
import { useNavigation } from '@/hooks';
import { LAYOUT } from '@/constants';

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

  // 프로젝트 로고 아이콘 컴포넌트 반환
  const ProjectLogoComponent = useMemo(
    () => getProjectLogo(category || ''),
    [category]
  );

  // 프로젝트별 로그 번호 계산
  const projectLogNumber = useMemo(
    () => getProjectLogNumber(id, category),
    [id, category]
  );

  // 이미지가 포함된 콘텐츠 렌더링
  const contentWithImages = useMemo(
    () => renderContentWithImages(textInfo.truncatedText),
    [textInfo.truncatedText]
  );
  return (
    <div
      className={`${isFirst ? 'pt-6 pb-4' : 'py-4'} ${isLast ? 'mb-6' : ''}`}
    >
      <div className='rounded-lg flex flex-col'>
        {/* 프로젝트 제목과 시간 */}
        <div className='flex items-center justify-between mb-2 pr-0'>
          <div className='flex items-center gap-3 flex-1 min-w-0'>
            {category && (
              <AccessibleButton
                onClick={handleProjectClick}
                variant='ghost'
                className='text-left hover:underline group'
                ariaLabel={`${category} 프로젝트 로그 ${projectLogNumber}번 보기`}
              >
                <h2 className='text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors flex items-center gap-2'>
                  <ProjectLogoComponent className='w-5 h-5' />
                  {category} #{projectLogNumber}
                </h2>
              </AccessibleButton>
            )}
            <span className='text-gray-400 text-lg'>by</span>
            <ProfileSection author={author} authorRole={authorRole} size='sm' />
          </div>
          <time
            className='text-sm text-gray-500 flex-shrink-0'
            dateTime={timestamp}
            aria-label={`작성 시간: ${timestamp}`}
          >
            {timestamp}
          </time>
        </div>

        {/* 구분선 */}
        <div className='border-b border-gray-100 mb-2'></div>

        <div
          className='cursor-pointer py-1 px-4 mt-1'
          onClick={handlePostClick}
          role='button'
          tabIndex={0}
          aria-label={`포스트 상세 보기: ${content.substring(0, 50)}...`}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePostClick();
            }
          }}
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
              <div className='mt-2 text-right pr-0'>
                <AccessibleButton
                  variant='ghost'
                  size='sm'
                  className='text-gray-500 text-xs'
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handlePostClick();
                  }}
                  ariaLabel='포스트 전체 내용 보기'
                >
                  더 보기 →
                </AccessibleButton>
              </div>
            )}
          </div>
        </div>

        {/* 해시태그 */}
        {hashtags && hashtags.length > 0 && (
          <div className='px-4 py-2'>
            <div className='flex flex-wrap gap-2'>
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-600 bg-gray-100/60 backdrop-blur-sm border border-gray-200/20 hover:bg-gray-200/80 hover:text-gray-700 hover:border-gray-300/30 cursor-pointer transition-colors duration-150 shadow-sm hover:shadow-sm'
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

        <div className='flex items-center gap-8 text-xs md:text-sm text-muted-foreground px-4 pt-2'>
          <AccessibleButton
            variant='ghost'
            size='sm'
            className='flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-red-100 group disabled:opacity-50'
            ariaLabel={`좋아요 ${likes}개`}
          >
            <HeartIcon className='w-icon-sm h-icon-sm text-muted-foreground group-hover:text-red-500' />
            <span className='group-hover:text-red-500'>{likes}</span>
          </AccessibleButton>
          <AccessibleButton
            variant='ghost'
            size='sm'
            className='flex items-center gap-1 rounded-md p-2 -m-2 bg-transparent hover:bg-green-100 hover:text-green-500'
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleCommentClick();
            }}
            ariaLabel={`댓글 ${comments}개 보기`}
          >
            <ChatBubbleIcon className='w-icon-sm h-icon-sm' />
            <span>{comments}</span>
          </AccessibleButton>
        </div>
      </div>
      {!isLast && (
        <div className={`${LAYOUT.DIVIDER} ${LAYOUT.DIVIDER_MARGIN}`}></div>
      )}
    </div>
  );
});
