/**
 * 텍스트 관련 유틸리티 함수들
 */

/**
 * 텍스트의 줄 수를 계산합니다
 * @param text - 줄 수를 계산할 텍스트
 * @returns 줄 수
 */
export function getLineCount(text: string): number {
  return text.split('\n').length
}

/**
 * 텍스트가 지정된 줄 수를 초과하는지 확인합니다
 * @param text - 확인할 텍스트
 * @param maxLines - 최대 줄 수 (기본값: 10)
 * @returns 줄 수 초과 여부
 */
export function shouldTruncateText(text: string, maxLines: number = 10): boolean {
  return getLineCount(text) > maxLines
}

/**
 * 텍스트를 지정된 줄 수로 자릅니다
 * @param text - 자를 텍스트
 * @param maxLines - 최대 줄 수 (기본값: 10)
 * @returns 잘린 텍스트와 원본 텍스트
 */
export function truncateText(text: string, maxLines: number = 10) {
  const lines = text.split('\n')
  const shouldTruncate = lines.length > maxLines
  
  return {
    originalText: text,
    truncatedText: shouldTruncate ? lines.slice(0, maxLines).join('\n') : text,
    shouldTruncate,
    lineCount: lines.length,
    maxLines
  }
}

/**
 * 텍스트의 단어 수를 계산합니다
 * @param text - 단어 수를 계산할 텍스트
 * @returns 단어 수
 */
export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

/**
 * 텍스트의 문자 수를 계산합니다 (공백 제외)
 * @param text - 문자 수를 계산할 텍스트
 * @returns 문자 수
 */
export function getCharacterCount(text: string): number {
  return text.replace(/\s/g, '').length
}

/**
 * 텍스트가 읽기 시간을 추정합니다 (분당 200단어 기준)
 * @param text - 읽기 시간을 추정할 텍스트
 * @returns 읽기 시간 (분)
 */
export function getReadingTime(text: string): number {
  const wordCount = getWordCount(text)
  const wordsPerMinute = 200
  return Math.ceil(wordCount / wordsPerMinute)
}
