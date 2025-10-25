import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { sampleProjects } from '@/data/sampleProjects';
import type { Project } from '@/types';
import { useSearch, useUI } from '@/stores';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';

export const WriteProjectPage = memo(function WriteProjectPage() {
  const navigate = useNavigate();
  const { clearSearch } = useSearch();
  const { setContent: setUIContent } = useUI();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [techInput, setTechInput] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState<
    'planning' | 'in_progress' | 'completed'
  >('planning');
  const [githubUrl, setGithubUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
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
    if (!title.trim() || !description.trim()) {
      alert('제목과 설명을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newProject: Project = {
        id: (sampleProjects.length + 1).toString(),
        name: title.trim(),
        description: description.trim(),
        content: content.trim(),
        author: '현재 사용자',
        techStack: techStack,
        category: category as any,
        status: status,
        githubUrl: githubUrl || undefined,
        demoUrl: demoUrl || undefined,
        likes: 0,
        comments: 0,
        views: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: techStack,
        isPublished: true,
      };

      // 임시로 샘플 데이터에 추가 (실제로는 서버에 저장)
      sampleProjects.unshift(newProject);

      console.log('새 프로젝트 작성:', newProject);

      // 작성 완료 후 프로젝트 페이지로 이동하고 검색 상태 초기화
      clearSearch();
      navigate('/project');
    } catch (error) {
      console.error('프로젝트 작성 중 오류 발생:', error);
      alert('프로젝트 작성 중 오류가 발생했습니다. 다시 시도해주세요.');
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
        navigate('/project');
      }
    } else {
      navigate('/project');
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
            ariaLabel={isSubmitting ? '프로젝트 작성 중' : '프로젝트 게시하기'}
          >
            {isSubmitting ? '작성 중...' : '게시하기'}
          </AccessibleButton>
        </div>
      </div>

      {/* 프로젝트 작성 폼 */}
      <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-6'>
        {/* 제목 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            프로젝트 제목 *
          </label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='프로젝트 제목을 입력해주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
            maxLength={100}
          />
        </div>

        {/* 설명 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            프로젝트 설명 *
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='프로젝트에 대한 간단한 설명을 입력해주세요'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 resize-none'
            rows={3}
            maxLength={500}
          />
        </div>

        {/* 카테고리와 상태 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              카테고리
            </label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            >
              <option value=''>카테고리 선택</option>
              <option value='web'>웹 개발</option>
              <option value='mobile'>모바일 앱</option>
              <option value='desktop'>데스크톱 앱</option>
              <option value='ai'>AI/ML</option>
              <option value='game'>게임</option>
              <option value='iot'>IoT</option>
              <option value='other'>기타</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              프로젝트 상태
            </label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value as any)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            >
              <option value='planning'>기획 중</option>
              <option value='in_progress'>개발 중</option>
              <option value='completed'>완료</option>
            </select>
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
                className='inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm border border-blue-200'
              >
                {tech}
                <button
                  onClick={() => handleTechRemove(tech)}
                  className='ml-1 hover:text-blue-600 focus:outline-none rounded'
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

        {/* URL 링크 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              GitHub URL
            </label>
            <input
              type='url'
              value={githubUrl}
              onChange={e => setGithubUrl(e.target.value)}
              placeholder='https://github.com/username/repo'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              데모 URL
            </label>
            <input
              type='url'
              value={demoUrl}
              onChange={e => setDemoUrl(e.target.value)}
              placeholder='https://your-demo-site.com'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500'
            />
          </div>
        </div>

        {/* 상세 내용 */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            상세 내용 (마크다운 지원)
          </label>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='프로젝트에 대한 자세한 내용을 작성해주세요. 마크다운 문법을 사용할 수 있습니다.'
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

export default WriteProjectPage;
