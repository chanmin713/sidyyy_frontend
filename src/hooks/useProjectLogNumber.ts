import { useMemo } from 'react';
import { getProjectLogNumber } from '@/utils/projectUtils';

interface UseProjectLogNumberProps {
  postId: string;
  category?: string;
}

/**
 * 프로젝트별 로그 번호를 계산하는 훅
 * @param postId - 포스트 ID
 * @param category - 프로젝트 카테고리
 * @returns 로그 번호
 */
export const useProjectLogNumber = ({
  postId,
  category,
}: UseProjectLogNumberProps) => {
  return useMemo(() => {
    return getProjectLogNumber(postId, category);
  }, [postId, category]);
};
