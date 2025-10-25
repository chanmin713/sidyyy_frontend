import { memo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { samplePosts } from '@/data/samplePosts';
import type { Post } from '@/types';
import { useSearch } from '@/stores';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';
import { ProjectSelector } from '@/components/ui/forms/project-selector';

export const WritePostPage = memo(function WritePostPage() {
  const navigate = useNavigate();
  const { clearSearch } = useSearch();

  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [ReactQuill, setReactQuill] = useState<any>(null);
  const quillRef = useRef<any>(null);

  const handleAddNewProject = () => {
    // TODO: 프로젝트 추가 모달 열기
    alert('프로젝트 추가 기능은 추후 구현될 예정입니다.');
  };

  // 클라이언트에서만 ReactQuill 로드
  useEffect(() => {
    setIsClient(true);

    const loadReactQuill = async () => {
      const ReactQuillModule = await import('react-quill');
      await import('react-quill/dist/quill.snow.css');
      setReactQuill(() => ReactQuillModule.default);
    };

    loadReactQuill();
  }, []);

  // ReactQuill이 마운트된 후 초기화
  useEffect(() => {
    if (quillRef.current && ReactQuill) {
      const editor = quillRef.current.getEditor();
      if (editor) {
        // 에디터가 완전히 로드될 때까지 기다린 후 포커스
        setTimeout(() => {
          try {
            if (editor.root && document.contains(editor.root)) {
              // 포커스 대신 클릭 이벤트로 대체
              editor.root.click();
            }
          } catch (error) {
            console.log('Focus error (safe to ignore):', error);
          }
        }, 500);
      }
    }
  }, [ReactQuill]);

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

  // HTML 텍스트에서 순수 텍스트만 추출하여 글자 수 계산
  const getTextLength = (htmlContent: string) => {
    if (
      !htmlContent ||
      htmlContent === '<p><br></p>' ||
      htmlContent === '<p></p>'
    )
      return 0;
    // HTML 태그 제거
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    // 공백 제거 후 글자 수 계산
    return textContent.trim().length;
  };

  // ReactQuill 설정 - 안정적인 최대 기능
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    keyboard: {
      bindings: {
        tab: {
          key: 9,
          handler: function () {
            return true;
          },
        },
        'remove tab': {
          key: 9,
          shiftKey: true,
          handler: function () {
            return true;
          },
        },
      },
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'script',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
    'direction',
  ];

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
          <div className='quill-editor-container'>
            {isClient && ReactQuill ? (
              <ReactQuill
                ref={quillRef}
                defaultValue={content}
                onChange={value => {
                  try {
                    console.log('ReactQuill onChange:', value);
                    setContent(value);
                  } catch (error) {
                    console.log('onChange error (safe to ignore):', error);
                  }
                }}
                onFocus={() => {
                  console.log('ReactQuill focused');
                }}
                onBlur={() => {
                  console.log('ReactQuill blurred');
                }}
                modules={modules}
                formats={formats}
                placeholder='무슨 일이 일어나고 있나요?'
                style={{ height: 'auto', minHeight: '500px' }}
                theme='snow'
                preserveWhitespace={true}
              />
            ) : (
              <div className='flex items-center justify-center h-[500px] border border-gray-300 rounded-lg bg-gray-50'>
                <div className='text-gray-500'>에디터를 로딩 중...</div>
              </div>
            )}
          </div>
          <div className='mt-1 flex justify-end'>
            <span className='text-sm text-gray-500'>
              {getTextLength(content) || 0}자
            </span>
          </div>
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
