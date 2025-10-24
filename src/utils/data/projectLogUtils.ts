/**
 * 프로젝트별 로그 번호를 계산합니다
 * @param postId - 포스트 ID
 * @param category - 프로젝트 카테고리
 * @returns 로그 번호 (1부터 시작)
 */
export const getProjectLogNumber = (
  postId: string,
  category?: string
): number => {
  if (!category) return 1;

  // 간단한 해시 기반 로그 번호 생성
  const hash = postId.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return (hash % 100) + 1;
};
