import { memo, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  HeartIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { sampleProjects } from '@/data/sampleProjects';
import { sampleProjectComments } from '@/data/sampleProjectComments';
import { ProjectPropertiesPanel } from '@/components/project/ProjectPropertiesPanel';
import { ProjectInteractions } from '@/components/project/ProjectInteractions';
import { ProjectComments } from '@/components/project/ProjectComments';

export const ProjectDetailPage = memo(function ProjectDetailPage() {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();

  // URL 디코딩
  const decodedProjectName = projectName ? decodeURIComponent(projectName) : '';

  // 해당 프로젝트 정보 찾기
  const project = useMemo(() => {
    return sampleProjects.find(p => p.name === decodedProjectName);
  }, [decodedProjectName]);

  // 해당 프로젝트의 댓글들
  const projectComments = useMemo(() => {
    return project ? sampleProjectComments[project.id] || [] : [];
  }, [project]);

  const [showComments, setShowComments] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = (content: string) => {
    console.log('새 댓글:', content);
    // 실제 구현에서는 API 호출
  };

  const handleReply = (commentId: string, content: string) => {
    console.log('답글:', commentId, content);
    // 실제 구현에서는 API 호출
  };

  if (!decodedProjectName || !project) {
    return (
      <div className='min-h-screen bg-white'>
        <div className='max-w-4xl mx-auto px-4 py-8'>
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
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* 헤더 */}
        <div className='mb-8'>
          <button
            onClick={handleBackClick}
            className='flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors'
          >
            <ArrowLeftIcon className='w-4 h-4' />
            <span>돌아가기</span>
          </button>

          <div className='bg-white rounded-lg border border-gray-200 p-6'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              {project.name}
            </h1>
            <div className='flex items-center gap-6 text-sm text-gray-500'>
              <div className='flex items-center gap-1'>
                <HeartIcon className='w-4 h-4 text-red-400' />
                <span>{project.likes}개 좋아요</span>
              </div>
              <div className='flex items-center gap-1'>
                <ChatBubbleIcon className='w-4 h-4 text-blue-400' />
                <span>{project.comments}개 댓글</span>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* 프로젝트 속성 패널 */}
          <div className='lg:col-span-1'>
            <ProjectPropertiesPanel project={project} />
            <ProjectInteractions
              project={project}
              onComment={handleCommentClick}
            />
          </div>

          {/* 댓글 섹션 */}
          <div className='lg:col-span-2'>
            {showComments && (
              <div className='bg-white rounded-lg border border-gray-200 p-6'>
                <ProjectComments
                  comments={projectComments}
                  onAddComment={handleAddComment}
                  onReply={handleReply}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
