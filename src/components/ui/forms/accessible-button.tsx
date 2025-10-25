import { forwardRef, useCallback, ReactNode } from 'react';
import { cn } from '@/utils';
import {
  isActionKey,
  createAriaAttributes,
  type AriaState,
} from '@/utils/accessibility/accessibilityUtils';

interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 시각적 스타일 변형
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'success';
  /**
   * 버튼 크기
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  /**
   * 로딩 상태
   */
  loading?: boolean;
  /**
   * 아이콘 (ActionButton 호환성)
   */
  icon?: ReactNode;
  /**
   * ARIA 상태
   */
  ariaState?: AriaState;
  /**
   * ARIA 라벨
   */
  ariaLabel?: string;
  /**
   * ARIA 설명
   */
  ariaDescription?: string;
  /**
   * 키보드 이벤트 핸들러
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const variantClasses = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
  danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
  link: 'bg-transparent hover:bg-transparent text-blue-600 hover:text-blue-800 underline focus:ring-blue-500',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export const AccessibleButton = forwardRef<
  HTMLButtonElement,
  AccessibleButtonProps
>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      icon,
      ariaState = {},
      ariaLabel,
      ariaDescription,
      onKeyDown,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>) => {
        // 기본 키보드 이벤트 처리
        if (isActionKey(event)) {
          event.preventDefault();
          if (onClick && !disabled && !loading) {
            onClick(event as any);
          }
        }

        // 사용자 정의 키보드 이벤트 핸들러
        onKeyDown?.(event);
      },
      [onClick, disabled, loading, onKeyDown]
    );

    const ariaAttributes = createAriaAttributes(ariaState, {
      label: ariaLabel,
      description: ariaDescription,
    });

    return (
      <button
        ref={ref}
        className={cn(
          // 기본 스타일
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'active:scale-95',
          // 변형 스타일
          variantClasses[variant],
          // 크기 스타일
          sizeClasses[size],
          // 전체 너비
          fullWidth && 'w-full',
          // 로딩 상태
          loading && 'cursor-wait',
          className
        )}
        disabled={disabled || loading}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...ariaAttributes}
        {...props}
      >
        {loading && (
          <svg
            className='animate-spin -ml-1 mr-2 h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {icon && !loading && icon}
        {children}
        {ariaDescription && (
          <span className='sr-only' aria-live='polite'>
            {ariaDescription}
          </span>
        )}
      </button>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';

// 타입 export
export type { AccessibleButtonProps };

// 간단한 별칭 제공
export const Button = AccessibleButton;
export type ButtonProps = AccessibleButtonProps;
