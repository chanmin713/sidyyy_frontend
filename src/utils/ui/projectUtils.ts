/**
 * 프로젝트 관련 유틸리티 함수들
 */

import {
  GlobeIcon,
  MobileIcon,
  DesktopIcon,
  PlayIcon,
  BarChartIcon,
  GearIcon,
  ReaderIcon,
  FileTextIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

/**
 * 프로젝트 카테고리에 따른 로고 컴포넌트 반환
 * @param category - 프로젝트 카테고리
 * @returns 프로젝트 로고 컴포넌트
 */
export const getProjectLogo = (category: string) => {
  const logoMap: Record<string, React.ComponentType<{ className?: string }>> = {
    '웹 개발': GlobeIcon,
    '모바일 앱': MobileIcon,
    'AI & ML': DesktopIcon,
    게임: PlayIcon,
    '데이터 분석': BarChartIcon,
    '개발 도구': GearIcon,
    교육: ReaderIcon,
    블로그: FileTextIcon,
    기타: RocketIcon,
  };

  const IconComponent = logoMap[category] || RocketIcon;
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
