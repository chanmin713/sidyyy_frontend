import { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/utils';

interface OptimizedImageProps {
  /**
   * 이미지 소스 URL
   */
  src: string;
  /**
   * 대체 텍스트
   */
  alt: string;
  /**
   * 이미지 너비
   */
  width?: number;
  /**
   * 이미지 높이
   */
  height?: number;
  /**
   * CSS 클래스명
   */
  className?: string;
  /**
   * 로딩 상태
   */
  loading?: 'lazy' | 'eager';
  /**
   * 플레이스홀더 표시 여부
   */
  showPlaceholder?: boolean;
  /**
   * 에러 상태 처리
   */
  onError?: () => void;
  /**
   * 로딩 완료 콜백
   */
  onLoad?: () => void;
  /**
   * 지연 로딩 임계값 (px)
   */
  threshold?: number;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  showPlaceholder = true,
  onError,
  onLoad,
  threshold = 100,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer를 사용한 지연 로딩
  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observerRef.current?.disconnect();
            }
          });
        },
        {
          rootMargin: `${threshold}px`,
        }
      );

      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, threshold]);

  // 이미지 로드 핸들러
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // 이미지 에러 핸들러
  const handleError = useCallback(() => {
    setIsError(true);
    onError?.();
  }, [onError]);

  // 이미지 최적화를 위한 srcSet 생성
  const generateSrcSet = useCallback(
    (baseSrc: string) => {
      if (!width) return baseSrc;

      const sizes = [0.5, 1, 1.5, 2];
      return sizes
        .map(size => {
          const optimizedWidth = Math.round(width * size);
          return `${baseSrc}?w=${optimizedWidth}&q=80 ${size}x`;
        })
        .join(', ');
    },
    [width]
  );

  // WebP 지원 확인
  const supportsWebP = useCallback(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }, []);

  // 최적화된 이미지 URL 생성
  const getOptimizedSrc = useCallback(() => {
    if (!src) return '';

    // WebP 지원 시 WebP 형식 사용
    if (supportsWebP() && !src.includes('webp')) {
      return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }

    return src;
  }, [src, supportsWebP]);

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >
      {/* 플레이스홀더 */}
      {showPlaceholder && !isLoaded && !isError && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center'>
          <div className='w-8 h-8 text-gray-400'>
            <svg
              className='w-full h-full'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      )}

      {/* 에러 상태 */}
      {isError && (
        <div className='absolute inset-0 bg-gray-100 flex items-center justify-center'>
          <div className='text-center text-gray-500'>
            <svg
              className='w-8 h-8 mx-auto mb-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <p className='text-sm'>이미지를 불러올 수 없습니다</p>
          </div>
        </div>
      )}

      {/* 실제 이미지 */}
      {isInView && !isError && (
        <img
          src={getOptimizedSrc()}
          srcSet={generateSrcSet(getOptimizedSrc())}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
}
