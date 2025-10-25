/**
 * 프로젝트 관련 유틸리티 함수들
 */

import {
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  FigmaLogoIcon,
} from '@radix-ui/react-icons';

/**
 * 프로젝트 카테고리에 따른 로고 컴포넌트 반환
 * @param category - 프로젝트 카테고리
 * @returns 프로젝트 로고 컴포넌트
 */
export const getProjectLogo = (category: string) => {
  const logoMap: Record<string, React.ComponentType<{ className?: string }>> = {
    // 실제 사용되는 카테고리들만 - 실제 서비스 로고 사용
    Sidyyy: VercelLogoIcon, // Vercel 로고 (메인 플랫폼)
    DevTools: GitHubLogoIcon, // GitHub 로고 (개발 도구)
    CodeShare: FigmaLogoIcon, // Figma 로고 (코드 공유)
    TechBlog: NotionLogoIcon, // Notion 로고 (기술 블로그)
  };

  const IconComponent = logoMap[category] || GitHubLogoIcon;
  return IconComponent;
};

/**
 * 프로젝트별 로그 번호 계산
 * @param postId - 포스트 ID
 * @param category - 프로젝트 카테고리 (선택사항)
 * @returns 로그 번호 (1-100)
 */
export const getProjectLogNumber = (
  postId: string,
  category?: string
): number => {
  // 간단한 해시 기반 로그 번호 계산
  let hash = 0;
  for (let i = 0; i < postId.length; i++) {
    const char = postId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 32bit 정수로 변환
  }

  // 카테고리가 있으면 추가로 해시에 반영
  if (category) {
    for (let i = 0; i < category.length; i++) {
      const char = category.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
  }

  // 1-100 범위로 정규화
  return (Math.abs(hash) % 100) + 1;
};
