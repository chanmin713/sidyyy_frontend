import { memo, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { sampleProjects } from '@/data/sampleProjects';
import { LAYOUT } from '@/constants';

export const ProjectDetailPage = memo(function ProjectDetailPage() {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();

  // URL 디코딩
  const decodedProjectName = projectName ? decodeURIComponent(projectName) : '';

  // 해당 프로젝트 정보 찾기
  const project = useMemo(() => {
    return sampleProjects.find(p => p.name === decodedProjectName);
  }, [decodedProjectName]);

  // 페이지 로드 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!decodedProjectName || !project) {
    return (
      <div className='min-h-screen bg-white'>
        <div className={LAYOUT.PAGE_CONTAINER}>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-900 mb-4'>
              프로젝트를 찾을 수 없습니다
            </h1>
            <button
              onClick={handleBackClick}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className={LAYOUT.PAGE_CONTAINER}>
        {/* 헤더 */}
        <div className='mb-8'>
          <button
            onClick={handleBackClick}
            className='flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors'
          >
            <ArrowLeftIcon className='w-4 h-4' />
            <span>돌아가기</span>
          </button>

          <div className='text-center py-20'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              {project.name}
            </h1>
            <p className='text-lg text-gray-600'>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectDetailPage;
