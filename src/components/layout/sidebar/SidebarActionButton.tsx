import { useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  StarFilledIcon,
  Pencil1Icon,
  CalendarIcon,
} from '@radix-ui/react-icons';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';

export function SidebarActionButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleWriteClick = useCallback(() => {
    navigate('/write');
  }, [navigate]);

  const handleProjectCreateClick = useCallback(() => {
    navigate('/project/create');
  }, [navigate]);

  const handleRecruitCreateClick = useCallback(() => {
    navigate('/recruit/create');
  }, [navigate]);

  const actionButton = useMemo(() => {
    if (location.pathname === '/project') {
      return (
        <AccessibleButton
          onClick={handleProjectCreateClick}
          variant='primary'
          fullWidth
          className='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
          ariaLabel='새 프로젝트 생성'
        >
          <StarFilledIcon className='w-4 h-4' />
          프로젝트 생성
        </AccessibleButton>
      );
    }

    if (location.pathname === '/recruit') {
      return (
        <AccessibleButton
          onClick={handleRecruitCreateClick}
          variant='primary'
          fullWidth
          className='bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
          ariaLabel='새 모집 작성'
        >
          <CalendarIcon className='w-4 h-4' />
          모집 작성
        </AccessibleButton>
      );
    }

    // 멤버 페이지에서는 버튼을 표시하지 않음
    if (location.pathname === '/member') {
      return null;
    }

    // 기본 로그 쓰기 버튼
    return (
      <AccessibleButton
        onClick={handleWriteClick}
        variant='primary'
        fullWidth
        className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm'
        ariaLabel='새 로그 작성'
      >
        <Pencil1Icon className='w-4 h-4' />
        로그 쓰기
      </AccessibleButton>
    );
  }, [
    location.pathname,
    handleProjectCreateClick,
    handleRecruitCreateClick,
    handleWriteClick,
  ]);

  return actionButton;
}
