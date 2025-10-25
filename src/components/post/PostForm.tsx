import { memo, useRef } from 'react';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';
import { HashtagInput } from './HashtagInput';

interface PostFormProps {
  content: string;
  onContentChange: (content: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  hashtags: string[];
  onHashtagsChange: (hashtags: string[]) => void;
  onImageAttach: () => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PostForm = memo(function PostForm({
  content,
  onContentChange,
  category,
  onCategoryChange,
  hashtags,
  onHashtagsChange,
  onImageAttach,
  onFileChange,
}: PostFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageAttach = () => {
    fileInputRef.current?.click();
    onImageAttach();
  };

  return (
    <div className='bg-white bg-gray-800 rounded-lg border border-gray-200 border-gray-700 p-6 shadow-sm'>
      {/* 프로젝트 선택 */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 text-gray-300 mb-2'>
          프로젝트
        </label>
        <select
          value={category}
          onChange={e => onCategoryChange(e.target.value)}
          className='w-full p-3 border border-gray-300 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-gray-700 text-gray-900 text-white'
        >
          <option value='' disabled>
            프로젝트를 선택하세요
          </option>
          <option value='웹 개발'>웹 개발</option>
          <option value='모바일 앱'>모바일 앱</option>
          <option value='데이터 분석'>데이터 분석</option>
          <option value='AI/ML'>AI/ML</option>
          <option value='블록체인'>블록체인</option>
          <option value='게임 개발'>게임 개발</option>
          <option value='기타'>기타</option>
        </select>
      </div>

      {/* 내용 입력 */}
      <div className='mb-4'>
        <label
          htmlFor='content'
          className='block text-sm font-medium text-gray-700 text-gray-300 mb-2'
        >
          내용
        </label>
        <textarea
          id='content'
          value={content}
          onChange={e => onContentChange(e.target.value)}
          placeholder='무슨 일이 일어나고 있나요?'
          className='w-full min-h-[300px] p-4 text-lg border border-gray-300 border-gray-600 rounded-lg resize-none focus:outline-none placeholder-gray-500 placeholder-gray-400 bg-white bg-gray-700 text-gray-900 text-white'
          aria-describedby='content-help'
        />
        <p
          id='content-help'
          className='mt-1 text-sm text-gray-500 text-gray-400'
        >
          마크다운 문법을 사용할 수 있습니다.
        </p>
      </div>

      {/* 해시태그 */}
      <HashtagInput hashtags={hashtags} onHashtagsChange={onHashtagsChange} />

      {/* 하단 액션 버튼들 */}
      <div className='flex items-center justify-between pt-4 border-t border-gray-200 border-gray-700'>
        <div className='flex items-center gap-4'>
          <AccessibleButton
            onClick={handleImageAttach}
            variant='ghost'
            size='sm'
            className='p-2 text-gray-500 text-gray-400 hover:text-blue-500 hover:text-blue-400 hover:bg-blue-50 hover:bg-blue-900/20 rounded-lg transition-colors'
            ariaLabel='이미지 첨부'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </AccessibleButton>
        </div>
      </div>

      {/* 숨겨진 파일 input */}
      <input
        ref={fileInputRef}
        type='file'
        className='hidden'
        accept='image/*'
        onChange={onFileChange}
      />
    </div>
  );
});
