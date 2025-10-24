import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { samplePosts } from '@/data/samplePosts';
import type { Post } from '@/types';

export const WritePostPage = memo(function WritePostPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageAttach = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = e => {
        const imageUrl = e.target?.result as string;
        setImages(prev => [...prev, imageUrl]);
        // 커서 위치에 이미지 삽입
        insertImageAtCursor(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const insertImageAtCursor = (imageUrl: string) => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const textBefore = content.substring(0, start);
      const textAfter = content.substring(end);
      const imageMarkdown = `![이미지](${imageUrl})`;
      const newContent = textBefore + imageMarkdown + textAfter;
      setContent(newContent);

      // 커서를 이미지 뒤로 이동
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + imageMarkdown.length,
          start + imageMarkdown.length
        );
      }, 0);
    }
  };

  const handleHashtagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && hashtagInput.trim()) {
      e.preventDefault();
      const newHashtag = hashtagInput.trim().replace('#', '');
      if (!hashtags.includes(newHashtag)) {
        setHashtags([...hashtags, newHashtag]);
        setHashtagInput('');
      }
    }
  };

  const handleHashtagRemove = (hashtagToRemove: string) => {
    setHashtags(hashtags.filter(hashtag => hashtag !== hashtagToRemove));
  };

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    // 실제로는 API 호출
    const newPost: Post = {
      id: (samplePosts.length + 1).toString(),
      author: '현재 사용자', // 실제로는 로그인한 사용자 정보
      timestamp: '방금 전',
      content: content.trim(),
      hashtags: hashtags.length > 0 ? hashtags : undefined,
      likes: 0,
      comments: 0,
      hasImage: images.length > 0,
      category: category || undefined,
    };

    // 임시로 샘플 데이터에 추가 (실제로는 서버에 저장)
    samplePosts.unshift(newPost);

    console.log('새 글 작성:', newPost);

    // 작성 완료 후 로그 페이지로 이동
    navigate('/log');
  };

  const handleCancel = () => {
    if (content.trim() || hashtags.length > 0) {
      if (confirm('작성 중인 내용이 있습니다. 정말 취소하시겠습니까?')) {
        navigate('/log');
      }
    } else {
      navigate('/log');
    }
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-6'>
      {/* 헤더 */}
      <div className='flex items-center justify-between mb-6'>
        <button
          onClick={handleBack}
          className='flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors'
        >
          <ArrowLeftIcon className='w-5 h-5' />
          <span>뒤로가기</span>
        </button>

        <div className='flex items-center gap-3'>
          <button
            onClick={handleCancel}
            className='px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors'
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !content.trim()}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
          >
            {isSubmitting ? '작성 중...' : '게시하기'}
          </button>
        </div>
      </div>

      {/* 글 작성 폼 */}
      <div className='bg-white rounded-lg border border-gray-200 p-6'>
        {/* 프로젝트 선택 */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            프로젝트
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder='무슨 일이 일어나고 있나요?'
            className='w-full min-h-[300px] p-4 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500'
          />
        </div>

        {/* 해시태그 */}
        <div className='mb-4'>
          <div className='flex flex-wrap gap-2 mb-3'>
            {hashtags.map((hashtag, index) => (
              <span
                key={index}
                className='inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
              >
                #{hashtag}
                <button
                  onClick={() => handleHashtagRemove(hashtag)}
                  className='ml-1 hover:text-blue-600'
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type='text'
            value={hashtagInput}
            onChange={e => setHashtagInput(e.target.value)}
            onKeyPress={handleHashtagAdd}
            placeholder='해시태그를 ,로 구분하여 입력해주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        {/* 하단 액션 버튼들 */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleImageAttach}
              className='p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors'
              title='이미지 첨부'
            >
              <svg
                className='w-5 h-5'
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
        </div>

        {/* 숨겨진 파일 input */}
        <input
          ref={fileInputRef}
          type='file'
          className='hidden'
          accept='image/*'
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
});
