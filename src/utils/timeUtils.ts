/**
 * ISO 시간 문자열을 상대적 시간으로 변환합니다
 * @param timestamp - ISO 시간 문자열
 * @returns 상대적 시간 문자열
 */
export const formatTimestamp = (timestamp: string): string => {
  const now = new Date();
  const notificationTime = new Date(timestamp);
  const diffInMinutes = Math.floor(
    (now.getTime() - notificationTime.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return '방금 전';
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}시간 전`;
  return `${Math.floor(diffInMinutes / 1440)}일 전`;
};

/**
 * 시간 문자열을 숫자로 변환합니다 (정렬용)
 * @param time - 시간 문자열
 * @returns 시간 값 (낮을수록 최신)
 */
export const getTimeValue = (time: string): number => {
  if (time.includes('시간 전')) return 0;
  if (time.includes('일 전')) return 1;
  if (time.includes('주 전')) return 2;
  if (time.includes('개월 전')) return 3;
  if (time.includes('년 전')) return 4;
  return 5;
};

/**
 * 현재 시간을 ISO 문자열로 반환합니다
 * @returns ISO 시간 문자열
 */
export const getCurrentISOTime = (): string => {
  return new Date().toISOString();
};

/**
 * 지정된 시간 전의 ISO 문자열을 반환합니다
 * @param minutesAgo - 몇 분 전인지
 * @returns ISO 시간 문자열
 */
export const getTimeAgo = (minutesAgo: number): string => {
  return new Date(Date.now() - minutesAgo * 60 * 1000).toISOString();
};
