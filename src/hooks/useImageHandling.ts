import { useState, useRef, useCallback } from 'react';
import {
  handleImageAttach,
  handleFileChange,
  createImageMarkdown,
} from '@/utils/imageUtils';

interface UseImageHandlingProps {
  onImageAdd?: (imageUrl: string) => void;
}

/**
 * 이미지 첨부 및 처리를 위한 훅
 * @param onImageAdd - 이미지 추가 시 콜백
 * @returns 이미지 관련 상태와 함수들
 */
export const useImageHandling = ({
  onImageAdd,
}: UseImageHandlingProps = {}) => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttach = useCallback(() => {
    handleImageAttach(fileInputRef);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFileChange(event, setImages, imageUrl => {
        onImageAdd?.(imageUrl);
      });
    },
    [onImageAdd]
  );

  const insertImageAtCursor = useCallback((imageUrl: string) => {
    const markdown = createImageMarkdown(imageUrl);
    // 실제로는 textarea의 커서 위치에 삽입해야 함
    return markdown;
  }, []);

  const removeImage = useCallback((imageUrl: string) => {
    setImages(prev => prev.filter(img => img !== imageUrl));
  }, []);

  const clearImages = useCallback(() => {
    setImages([]);
  }, []);

  return {
    images,
    fileInputRef,
    handleAttach,
    handleChange,
    insertImageAtCursor,
    removeImage,
    clearImages,
  };
};
