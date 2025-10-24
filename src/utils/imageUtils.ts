/**
 * 이미지가 포함된 콘텐츠를 HTML 문자열로 변환합니다
 * @param content - 마크다운 형식의 콘텐츠
 * @param maxHeight - 이미지 최대 높이
 * @returns HTML 문자열
 */
export const renderContentWithImages = (
  content: string,
  maxHeight: string = '200px'
): string => {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;

  return content.replace(imageRegex, (_, alt, src) => {
    return `<img src="${src}" alt="${alt || '첨부된 이미지'}" class="inline-block max-w-full h-auto rounded-lg my-1 mx-1" style="max-height: ${maxHeight}" />`;
  });
};

/**
 * 이미지 첨부 이벤트를 처리합니다
 * @param fileInputRef - 파일 input ref
 */
export const handleImageAttach = (fileInputRef: {
  current: HTMLInputElement | null;
}) => {
  fileInputRef.current?.click();
};

/**
 * 파일 변경 이벤트를 처리합니다
 * @param event - 파일 변경 이벤트
 * @param setImages - 이미지 상태 setter
 * @param insertImageAtCursor - 커서 위치에 이미지 삽입 함수
 */
export const handleFileChange = (
  event: Event,
  setImages: (images: string[]) => void,
  insertImageAtCursor: (imageUrl: string) => void
) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    // 실제로는 파일을 서버에 업로드하고 URL을 받아야 함
    const imageUrl = URL.createObjectURL(file);
    setImages([imageUrl]);
    insertImageAtCursor(imageUrl);
  }
};

/**
 * 이미지 URL을 마크다운 형식으로 변환합니다
 * @param imageUrl - 이미지 URL
 * @param alt - 이미지 alt 텍스트
 * @returns 마크다운 형식의 이미지 문자열
 */
export const createImageMarkdown = (
  imageUrl: string,
  alt: string = '첨부된 이미지'
): string => {
  return `![${alt}](${imageUrl})`;
};
