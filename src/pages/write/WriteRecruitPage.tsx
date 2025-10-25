import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useSearch, useUI } from '@/stores';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';

interface RecruitPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  position: string;
  techStack: string[];
  experience: string;
  location: string;
  workType: 'remote' | 'onsite' | 'hybrid';
  duration: string;
  compensation: string;
  contact: string;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  isPublished: boolean;
}

export const WriteRecruitPage = memo(function WriteRecruitPage() {
  const navigate = useNavigate();
  const { clearSearch } = useSearch();
  const { setContent: setUIContent } = useUI();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [position, setPosition] = useState('');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [techInput, setTechInput] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState<'remote' | 'onsite' | 'hybrid'>(
    'remote'
  );
  const [duration, setDuration] = useState('');
  const [compensation, setCompensation] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 텍스트 변경 핸들러
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setUIContent(newContent); // UI 스토어의 content도 업데이트
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleTechAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === ',' || e.key === 'Enter') && techInput.trim()) {
      e.preventDefault();
      addTech(techInput.trim());
    }
  };

  const addTech = (tech: string) => {
    const cleanTech = tech.trim();
    if (cleanTech && !techStack.includes(cleanTech)) {
      setTechStack([...techStack, cleanTech]);
      setTechInput('');
    }
  };

  const handleTechInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTechInput(value);

    if (value.includes(',')) {
      const techs = value
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech);
      techs.forEach(tech => addTech(tech));
    }
  };

  const handleTechRemove = (techToRemove: string) => {
    setTechStack(techStack.filter(tech => tech !== techToRemove));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !position.trim()) {
      alert('제목, 설명, 포지션을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newRecruit: RecruitPost = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        content: content.trim(),
        author: '현재 사용자',
        position: position.trim(),
        techStack: techStack,
        experience: experience.trim(),
        location: location.trim(),
        workType: workType,
        duration: duration.trim(),
        compensation: compensation.trim(),
        contact: contact.trim(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        likes: 0,
        comments: 0,
        views: 0,
        tags: techStack,
        isPublished: true,
      };

      console.log('새 모집 글 작성:', newRecruit);

      // TODO: 실제로는 서버에 저장
      // 임시로 로컬 스토리지에 저장
      const existingRecruits = JSON.parse(
        localStorage.getItem('recruitPosts') || '[]'
      );
      existingRecruits.unshift(newRecruit);
      localStorage.setItem('recruitPosts', JSON.stringify(existingRecruits));

      // 작성 완료 후 홈페이지로 이동하고 검색 상태 초기화
      clearSearch();
      navigate('/');
    } catch (error) {
      console.error('모집 글 작성 중 오류 발생:', error);
      alert('모집 글 작성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (
      title.trim() ||
      description.trim() ||
      content.trim() ||
      techStack.length > 0
    ) {
      if (confirm('작성 중인 내용이 있습니다. 정말 취소하시겠습니까?')) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
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
            ariaLabel={isSubmitting ? '모집 글 작성 중' : '모집 글 게시하기'}
          >
            {isSubmitting ? '작성 중...' : '게시하기'}
          </AccessibleButton>
        </div>
      </div>

      {/* 모집 글 작성 폼 */}
      <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-6'>
        {/* 제목 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            모집 제목 *
          </label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='모집 제목을 입력해주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
            maxLength={100}
          />
        </div>

        {/* 설명 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            모집 설명 *
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='모집에 대한 간단한 설명을 입력해주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 resize-none'
            rows={3}
            maxLength={500}
          />
        </div>

        {/* 포지션과 경력 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              포지션 *
            </label>
            <input
              type='text'
              value={position}
              onChange={e => setPosition(e.target.value)}
              placeholder='예: 프론트엔드 개발자, 백엔드 개발자'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
              maxLength={50}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              경력 요구사항
            </label>
            <select
              value={experience}
              onChange={e => setExperience(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            >
              <option value=''>경력 선택</option>
              <option value='newbie'>신입 (0-1년)</option>
              <option value='junior'>주니어 (1-3년)</option>
              <option value='mid'>미드레벨 (3-5년)</option>
              <option value='senior'>시니어 (5년+)</option>
              <option value='any'>경력 무관</option>
            </select>
          </div>
        </div>

        {/* 지역과 근무 형태 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              지역
            </label>
            <input
              type='text'
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder='예: 서울, 부산, 전국'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
              maxLength={50}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              근무 형태
            </label>
            <select
              value={workType}
              onChange={e => setWorkType(e.target.value as any)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            >
              <option value='remote'>원격</option>
              <option value='onsite'>출근</option>
              <option value='hybrid'>하이브리드</option>
            </select>
          </div>
        </div>

        {/* 기간과 보상 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              프로젝트 기간
            </label>
            <input
              type='text'
              value={duration}
              onChange={e => setDuration(e.target.value)}
              placeholder='예: 3개월, 6개월, 장기'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
              maxLength={50}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              보상
            </label>
            <input
              type='text'
              value={compensation}
              onChange={e => setCompensation(e.target.value)}
              placeholder='예: 협의, 100만원/월'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
              maxLength={100}
            />
          </div>
        </div>

        {/* 기술 스택 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            기술 스택
          </label>
          <div className='flex flex-wrap gap-2 mb-3'>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className='inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm border border-green-200'
              >
                {tech}
                <button
                  onClick={() => handleTechRemove(tech)}
                  className='ml-1 hover:text-green-600 focus:outline-none rounded'
                  aria-label={`${tech} 기술 스택 제거`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type='text'
            value={techInput}
            onChange={handleTechInputChange}
            onKeyDown={handleTechAdd}
            placeholder='기술 스택을 입력하고 쉼표(,) 또는 엔터를 눌러주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-white text-gray-900 placeholder-gray-500'
            maxLength={100}
          />
        </div>

        {/* 연락처 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            연락처
          </label>
          <input
            type='text'
            value={contact}
            onChange={e => setContact(e.target.value)}
            placeholder='이메일, 전화번호, 카카오톡 등'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
            maxLength={100}
          />
        </div>

        {/* 상세 내용 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            상세 내용 (마크다운 지원)
          </label>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='모집에 대한 자세한 내용을 작성해주세요. 마크다운 문법을 사용할 수 있습니다.'
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 resize-none min-h-[300px] font-mono text-sm'
            rows={15}
            maxLength={10000}
          />
          <div className='mt-2 flex justify-between'>
            <div className='text-xs text-gray-500'>
              마크다운 문법: **굵게**, *기울임*, `코드`, # 제목, - 리스트 등
            </div>
            <span className='text-sm text-gray-500'>
              {content.trim().length}자
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WriteRecruitPage;
