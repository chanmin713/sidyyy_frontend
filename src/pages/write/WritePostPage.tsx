import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Image as ImageIcon } from 'lucide-react';
import { samplePosts } from '@/data/samplePosts';
import type { Post } from '@/types';
import { useSearch } from '@/stores';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';
import { ProjectSelector } from '@/components/ui/forms/project-selector';
import { MarkdownToolbar } from '@/components/markdown';

export const WritePostPage = memo(function WritePostPage() {
  const navigate = useNavigate();
  const { clearSearch } = useSearch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleAddNewProject = () => {
    // TODO: 프로젝트 추가 모달 열기
    alert('프로젝트 추가 기능은 추후 구현될 예정입니다.');
  };

  // 텍스트 변경 핸들러
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  // 마크다운 툴바에서 텍스트 삽입 핸들러
  const handleInsertText = (
    text: string,
    selection?: { start: number; end: number }
  ) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = selection?.start ?? textarea.selectionStart;
    const end = selection?.end ?? textarea.selectionEnd;

    const newContent =
      content.substring(0, start) + text + content.substring(end);
    setContent(newContent);

    // 커서 위치 설정
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  // 파일 업로드 핸들러
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = event => {
          const imageUrl = event.target?.result as string;
          setUploadedImages(prev => [...prev, imageUrl]);

          // 이미지를 콘텐츠 맨 아래에 추가
          const imageMarkdown = `\n\n![${file.name}](${imageUrl})\n\n`;
          const newContent = content + imageMarkdown;
          setContent(newContent);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  // 드래그 앤 드롭 핸들러
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = event => {
          const imageUrl = event.target?.result as string;
          setUploadedImages(prev => [...prev, imageUrl]);

          // 이미지를 콘텐츠 맨 아래에 추가
          const imageMarkdown = `\n\n![${file.name}](${imageUrl})\n\n`;
          const newContent = content + imageMarkdown;
          setContent(newContent);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHashtagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === ',' || e.key === 'Enter') && hashtagInput.trim()) {
      e.preventDefault();
      addHashtag(hashtagInput.trim());
    }
  };

  const addHashtag = (hashtag: string) => {
    // # 기호 제거
    const cleanHashtag = hashtag.replace(/^#+/, '').trim();

    // 빈 문자열이거나 이미 존재하는 해시태그인지 확인
    if (cleanHashtag && !hashtags.includes(cleanHashtag)) {
      setHashtags([...hashtags, cleanHashtag]);
      setHashtagInput('');
    }
  };

  const handleHashtagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHashtagInput(value);

    // 쉼표가 포함된 경우 자동으로 해시태그 추가
    if (value.includes(',')) {
      const hashtags = value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag);
      hashtags.forEach(tag => addHashtag(tag));
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

    try {
      // 실제로는 API 호출
      const newPost: Post = {
        id: (samplePosts.length + 1).toString(),
        author: '현재 사용자', // 실제로는 로그인한 사용자 정보
        timestamp: '방금 전',
        content: content.trim(),
        hashtags: hashtags.length > 0 ? hashtags : undefined,
        likes: 0,
        comments: 0,
        views: 0,
        hasImage: content.includes('!['),
        category: (category as any) || undefined,
        title: content.replace(/[#*`]/g, '').split('\n')[0] || '새로운 포스트',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: hashtags.length > 0 ? hashtags : [],
        isPublished: true,
      };

      // 임시로 샘플 데이터에 추가 (실제로는 서버에 저장)
      samplePosts.unshift(newPost);

      console.log('새 글 작성:', newPost);

      // 작성 완료 후 로그 페이지로 이동하고 검색 상태 초기화
      clearSearch();
      navigate('/log');
    } catch (error) {
      console.error('글 작성 중 오류 발생:', error);
      alert('글 작성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
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

  // 텍스트 길이 계산
  const getTextLength = (text: string) => {
    return text ? text.trim().length : 0;
  };

  return (
    <div className='py-6'>
      {/* 헤더 */}
      <div className='flex items-center justify-between mb-6'>
        <AccessibleButton
          onClick={handleBack}
          variant='ghost'
          className='flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors'
          ariaLabel='이전 페이지로 돌아가기'
        >
          <ArrowLeftIcon className='w-5 h-5' />
          <span>뒤로가기</span>
        </AccessibleButton>

        <div className='flex items-center gap-3'>
          <AccessibleButton
            onClick={handleCancel}
            variant='ghost'
            className='px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors'
            ariaLabel='작성 취소'
          >
            취소
          </AccessibleButton>
          <AccessibleButton
            onClick={handleSubmit}
            disabled={isSubmitting}
            variant='primary'
            loading={isSubmitting}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
            ariaLabel={isSubmitting ? '글 작성 중' : '글 게시하기'}
          >
            {isSubmitting ? '작성 중...' : '게시하기'}
          </AccessibleButton>
        </div>
      </div>

      {/* 글 작성 폼 */}
      <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm'>
        {/* 프로젝트 선택 */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            프로젝트
          </label>
          <ProjectSelector
            value={category}
            onChange={setCategory}
            onAddNew={handleAddNewProject}
          />
        </div>

        {/* 내용 입력 */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            내용
          </label>

          {/* 마크다운 툴바 */}
          <MarkdownToolbar
            onInsert={handleInsertText}
            textareaRef={textareaRef}
          />

          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleContentChange}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            placeholder='무슨 일이 일어나고 있나요? 마크다운 문법을 사용할 수 있습니다.'
            className='w-full p-4 border border-gray-300 border-t-0 rounded-b-lg focus:outline-none bg-white text-gray-900 placeholder-gray-500 resize-none min-h-[400px] font-mono text-sm'
            rows={20}
            maxLength={5000}
          />
          <div className='mt-2 flex justify-end'>
            <span className='text-sm text-gray-500'>
              {getTextLength(content) || 0}자
            </span>
          </div>
        </div>

        {/* 파일 업로드 */}
        <div className='mb-4 mt-2'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            이미지 업로드
          </label>
          <div className='flex items-center gap-4'>
            <input
              type='file'
              accept='image/*'
              multiple
              onChange={handleFileUpload}
              className='hidden'
              id='image-upload'
            />
            <label
              htmlFor='image-upload'
              className='flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'
            >
              <ImageIcon className='w-4 h-4' />
              <span>이미지 선택</span>
            </label>
            <span className='text-sm text-gray-500'>
              또는 이미지를 텍스트 영역에 드래그하세요
            </span>
          </div>
          {uploadedImages.length > 0 && (
            <div className='mt-3'>
              <p className='text-sm text-gray-600 mb-2'>업로드된 이미지:</p>
              <div className='flex flex-wrap gap-2'>
                {uploadedImages.map((imageUrl, index) => (
                  <div key={index} className='relative'>
                    <img
                      src={imageUrl}
                      alt={`업로드된 이미지 ${index + 1}`}
                      className='w-16 h-16 object-cover rounded border'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 해시태그 */}
        <div className='mb-4 mt-2'>
          <label
            htmlFor='hashtags'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            해시태그
          </label>
          <div className='flex flex-wrap gap-2 mb-3'>
            {hashtags.map((hashtag, index) => (
              <span
                key={index}
                className='inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-sm border border-gray-200'
              >
                #{hashtag}
                <button
                  onClick={() => handleHashtagRemove(hashtag)}
                  className='ml-1 hover:text-gray-600 focus:outline-none rounded'
                  aria-label={`${hashtag} 해시태그 제거`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            id='hashtags'
            type='text'
            value={hashtagInput}
            onChange={handleHashtagInputChange}
            onKeyDown={handleHashtagAdd}
            placeholder='해시태그를 입력하고 쉼표(,) 또는 엔터를 눌러주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-white text-gray-900 placeholder-gray-500'
            maxLength={100}
          />
        </div>
      </div>
    </div>
  );
});

export default WritePostPage;
