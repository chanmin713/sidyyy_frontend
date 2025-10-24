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
