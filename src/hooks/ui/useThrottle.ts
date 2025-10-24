import { useRef, useCallback } from 'react';

/**
 * 쓰로틀 훅 - 함수 호출 빈도를 제한하여 성능을 최적화합니다.
 * @param callback - 쓰로틀할 함수
 * @param delay - 지연 시간 (밀리초)
 * @returns 쓰로틀된 함수
 */
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const lastCallTime = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTime.current;

      if (timeSinceLastCall >= delay) {
        lastCallTime.current = now;
        return callback(...args);
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          lastCallTime.current = Date.now();
          callback(...args);
        }, delay - timeSinceLastCall);
      }
    },
    [callback, delay]
  ) as T;

  return throttledCallback;
};
