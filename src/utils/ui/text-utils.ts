/**
 * 텍스트 관련 유틸리티 함수들
 */

/**
 * 텍스트를 지정된 줄 수로 자릅니다
 * @param text - 자를 텍스트
 * @param maxLines - 최대 줄 수 (기본값: 10)
 * @returns 잘린 텍스트와 원본 텍스트
 */
export function truncateText(text: string | undefined, maxLines: number = 10) {
  if (!text) {
    return {
      originalText: '',
      truncatedText: '',
      shouldTruncate: false,
      lineCount: 0,
      maxLines,
    };
  }

  const lines = text.split('\n');
  const shouldTruncate = lines.length > maxLines;

  return {
    originalText: text,
    truncatedText: shouldTruncate ? lines.slice(0, maxLines).join('\n') : text,
    shouldTruncate,
    lineCount: lines.length,
    maxLines,
  };
}

/**
 * 이미지가 포함된 콘텐츠를 렌더링합니다
 * @param content - 렌더링할 콘텐츠
 * @returns 렌더링된 HTML 문자열
 */
export function renderContentWithImages(content: string): string {
  if (!content) return '';

  // 이미지 URL 패턴 매칭
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;

  return content.replace(imageRegex, (_, alt, src) => {
    return `<img src="${src}" alt="${alt}" class="max-w-full h-auto rounded-lg" loading="lazy" />`;
  });
}

/**
 * 알림 제목을 생성합니다
 * @param type - 알림 타입
 * @param data - 알림 데이터
 * @returns 알림 제목
 */
export function getNotificationTitle(type: string): string {
  switch (type) {
    case 'like':
      return '좋아요를 받았습니다';
    case 'comment':
      return '새 댓글이 달렸습니다';
    case 'follow':
      return '새 팔로워가 생겼습니다';
    case 'mention':
      return '멘션을 받았습니다';
    default:
      return '새 알림이 있습니다';
  }
}

/**
 * 타임스탬프를 포맷합니다
 * @param timestamp - 포맷할 타임스탬프
 * @returns 포맷된 시간 문자열
 */
export function formatTimestamp(timestamp: string | number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return '방금 전';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  return date.toLocaleDateString('ko-KR');
}
