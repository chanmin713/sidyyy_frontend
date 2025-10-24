import { memo } from 'react';
import {
  CalendarIcon,
  PersonIcon,
  GitHubLogoIcon,
  ExternalLinkIcon,
  HeartIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import type { ProjectProperties } from '@/types';

interface ProjectPropertiesPanelProps {
  project: ProjectProperties;
}

export const ProjectPropertiesPanel = memo(function ProjectPropertiesPanel({
  project,
}: ProjectPropertiesPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '진행 중';
      case 'completed':
        return '완료';
      case 'paused':
        return '일시 중단';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return '🟢';
      case 'completed':
        return '✅';
      case 'paused':
        return '⏸️';
      default:
        return '⚪';
    }
  };

  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6'>
      <h2 className='text-lg font-semibold text-gray-900 mb-4'>
        프로젝트 정보
      </h2>

      <div className='space-y-4'>
        {/* 프로젝트명 */}
        <div className='flex items-start gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>이름</span>
          </div>
          <div className='flex-1'>
            <span className='text-sm text-gray-900'>{project.name}</span>
          </div>
        </div>

        {/* 설명 */}
        <div className='flex items-start gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>설명</span>
          </div>
          <div className='flex-1'>
            <p className='text-sm text-gray-900 leading-relaxed'>
              {project.description}
            </p>
          </div>
        </div>

        {/* 상태 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>상태</span>
          </div>
          <div className='flex-1'>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
            >
              <span className='text-xs'>{getStatusIcon(project.status)}</span>
              {getStatusText(project.status)}
            </span>
          </div>
        </div>

        {/* 생성자 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>생성자</span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <PersonIcon className='w-4 h-4 text-gray-400' />
              <span className='text-sm text-gray-900'>{project.creator}</span>
            </div>
          </div>
        </div>

        {/* 참여자 */}
        <div className='flex items-start gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>참여자</span>
          </div>
          <div className='flex-1'>
            <div className='flex flex-wrap gap-2'>
              {project.participants.map((participant, index) => (
                <div
                  key={index}
                  className='flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md'
                >
                  <PersonIcon className='w-3 h-3 text-gray-500' />
                  <span className='text-xs text-gray-700'>{participant}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub URL */}
        {project.githubUrl && (
          <div className='flex items-center gap-3'>
            <div className='w-20 flex-shrink-0'>
              <span className='text-sm font-medium text-gray-500'>GitHub</span>
            </div>
            <div className='flex-1'>
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline'
              >
                <GitHubLogoIcon className='w-4 h-4' />
                <span className='truncate'>{project.githubUrl}</span>
                <ExternalLinkIcon className='w-3 h-3 flex-shrink-0' />
              </a>
            </div>
          </div>
        )}

        {/* 배포 URL */}
        {project.deployUrl && (
          <div className='flex items-center gap-3'>
            <div className='w-20 flex-shrink-0'>
              <span className='text-sm font-medium text-gray-500'>배포</span>
            </div>
            <div className='flex-1'>
              <a
                href={project.deployUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline'
              >
                <ExternalLinkIcon className='w-4 h-4' />
                <span className='truncate'>{project.deployUrl}</span>
                <ExternalLinkIcon className='w-3 h-3 flex-shrink-0' />
              </a>
            </div>
          </div>
        )}

        {/* 태그 */}
        <div className='flex items-start gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>태그</span>
          </div>
          <div className='flex-1'>
            <div className='flex flex-wrap gap-1'>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className='inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 생성일 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>생성일</span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4 h-4 text-gray-400' />
              <span className='text-sm text-gray-900'>{project.createdAt}</span>
            </div>
          </div>
        </div>

        {/* 수정일 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>수정일</span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4 h-4 text-gray-400' />
              <span className='text-sm text-gray-900'>{project.updatedAt}</span>
            </div>
          </div>
        </div>

        {/* 좋아요 수 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>좋아요</span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <HeartIcon className='w-4 h-4 text-red-400' />
              <span className='text-sm text-gray-900'>{project.likes}개</span>
            </div>
          </div>
        </div>

        {/* 댓글 수 */}
        <div className='flex items-center gap-3'>
          <div className='w-20 flex-shrink-0'>
            <span className='text-sm font-medium text-gray-500'>댓글</span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <ChatBubbleIcon className='w-4 h-4 text-blue-400' />
              <span className='text-sm text-gray-900'>
                {project.comments}개
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
