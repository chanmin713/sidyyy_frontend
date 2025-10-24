import { useCallback } from 'react';

interface UseErrorHandlerOptions {
  onError?: (error: Error, context?: string) => void;
  fallbackMessage?: string;
}

export const useErrorHandler = (options: UseErrorHandlerOptions = {}) => {
  const { onError } = options;
  // const fallbackMessage = '오류가 발생했습니다.'; // TODO: 향후 사용 예정

  const handleError = useCallback(
    (error: Error | unknown, context?: string) => {
      const errorObj =
        error instanceof Error ? error : new Error(String(error));

      console.error(`Error in ${context || 'unknown context'}:`, errorObj);

      if (onError) {
        onError(errorObj, context);
      }
    },
    [onError]
  );

  const handleAsyncError = useCallback(
    async <T>(
      asyncFn: () => Promise<T>,
      context?: string
    ): Promise<T | null> => {
      try {
        return await asyncFn();
      } catch (error) {
        handleError(error, context);
        return null;
      }
    },
    [handleError]
  );

  return {
    handleError,
    handleAsyncError,
  };
};
