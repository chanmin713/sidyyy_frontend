import { memo } from 'react';
import { ExclamationTriangleIcon, ReloadIcon } from '@radix-ui/react-icons';

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
  title?: string;
  message?: string;
}

export const ErrorFallback = memo(function ErrorFallback({
  error,
  resetError,
  title = '문제가 발생했습니다',
  message = '예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
}: ErrorFallbackProps) {
  const handleRetry = () => {
    if (resetError) {
      resetError();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-8 text-center min-h-64'>
      <ExclamationTriangleIcon className='w-16 h-16 text-red-500 mb-4' />
      <h2 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h2>
      <p className='text-gray-600 mb-6 max-w-md'>{message}</p>

      {error && process.env.NODE_ENV === 'development' && (
        <details className='mb-4 p-4 bg-gray-100 rounded-lg text-left max-w-md'>
          <summary className='cursor-pointer font-medium text-gray-700'>
            개발자 정보 (개발 모드에서만 표시)
          </summary>
          <pre className='mt-2 text-xs text-gray-600 overflow-auto'>
            {error.stack}
          </pre>
        </details>
      )}

      <button
        onClick={handleRetry}
        className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
      >
        <ReloadIcon className='w-4 h-4' />
        다시 시도
      </button>
    </div>
  );
});
