/**
 * 통계 정보 포맷팅 유틸리티 함수들
 */

/**
 * 숫자를 K, M 단위로 포맷팅합니다
 * @param num - 포맷팅할 숫자
 * @returns 포맷팅된 문자열 (예: "1.2K", "3.4M")
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * 트렌드에 따른 색상 클래스를 반환합니다
 * @param trend - 트렌드 ('up' | 'down' | 'stable')
 * @returns 색상 클래스 문자열
 */
export const getTrendColor = (trend: 'up' | 'down' | 'stable'): string => {
  switch (trend) {
    case 'up':
      return 'text-green-600';
    case 'down':
      return 'text-red-600';
    case 'stable':
      return 'text-gray-600';
    default:
      return 'text-gray-600';
  }
};

/**
 * 긴급도에 따른 색상 클래스를 반환합니다
 * @param urgency - 긴급도 ('high' | 'medium' | 'low')
 * @returns 색상 클래스 문자열
 */
export const getUrgencyColor = (urgency: 'high' | 'medium' | 'low'): string => {
  switch (urgency) {
    case 'high':
      return 'text-red-600 bg-red-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'low':
      return 'text-green-600 bg-green-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

/**
 * 트렌드 아이콘을 반환합니다
 * @param trend - 트렌드 ('up' | 'down' | 'stable')
 * @returns 아이콘 문자열
 */
export const getTrendIcon = (trend: 'up' | 'down' | 'stable'): string => {
  switch (trend) {
    case 'up':
      return '↗';
    case 'down':
      return '↘';
    case 'stable':
      return '→';
    default:
      return '→';
  }
};

/**
 * 통계 정보를 표시할 때 사용할 라벨을 반환합니다
 * @param type - 통계 타입
 * @returns 라벨 문자열
 */
export const getStatsLabel = (type: string): string => {
  const labels: Record<string, string> = {
    likes: '좋아요',
    upvotes: '업보트',
    views: '조회수',
    followers: '팔로워',
    comments: '댓글',
    projects: '프로젝트',
    applicants: '지원자',
    experience: '경력',
  };
  return labels[type] || type;
};
