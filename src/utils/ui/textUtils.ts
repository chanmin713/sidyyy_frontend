/**
 * 텍스트 처리 유틸리티 함수들
 */

/**
 * 텍스트를 지정된 줄 수로 자르기
 * @param text - 자를 텍스트
 * @param maxLines - 최대 줄 수
 * @returns 텍스트 정보 객체
 */
export const truncateText = (
  text: string,
  maxLines: number
): {
  truncatedText: string;
  shouldTruncate: boolean;
  originalLength: number;
} => {
  const lines = text.split('\n');
  const shouldTruncate = lines.length > maxLines;
  const truncatedText = shouldTruncate
    ? lines.slice(0, maxLines).join('\n') + '...'
    : text;

  return {
    truncatedText,
    shouldTruncate,
    originalLength: text.length,
  };
};

/**
 * 콘텐츠에서 이미지를 렌더링
 * @param content - 콘텐츠 텍스트
 * @returns 이미지가 포함된 콘텐츠
 */
export const renderContentWithImages = (content: string): string => {
  // 간단한 이미지 URL 감지 및 렌더링
  const imageUrlRegex = /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp))/gi;
  return content.replace(imageUrlRegex, url => {
    return `![이미지](${url})`;
  });
};
