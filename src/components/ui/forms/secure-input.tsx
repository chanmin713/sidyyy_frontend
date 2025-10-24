import { forwardRef, useState, useCallback } from 'react';
import {
  EyeOpenIcon,
  EyeClosedIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/utils';
import {
  sanitizeInput,
  validateLength,
  hasXSSRisk,
  hasSQLInjectionRisk,
} from '@/utils';

interface SecureInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 입력값 검증 함수
   */
  validate?: (value: string) => { isValid: boolean; message?: string };
  /**
   * 최소 길이
   */
  minLength?: number;
  /**
   * 최대 길이
   */
  maxLength?: number;
  /**
   * HTML 허용 여부
   */
  allowHtml?: boolean;
  /**
   * XSS 검사 여부
   */
  checkXSS?: boolean;
  /**
   * SQL 인젝션 검사 여부
   */
  checkSQLInjection?: boolean;
  /**
   * 실시간 검증 여부
   */
  validateOnChange?: boolean;
  /**
   * 에러 메시지 표시 여부
   */
  showErrorMessage?: boolean;
  /**
   * 비밀번호 필드 여부
   */
  isPassword?: boolean;
  /**
   * 비밀번호 강도 표시 여부
   */
  showPasswordStrength?: boolean;
}

export const SecureInput = forwardRef<HTMLInputElement, SecureInputProps>(
  (
    {
      className,
      validate,
      minLength = 0,
      maxLength = 1000,
      allowHtml = false,
      checkXSS = true,
      checkSQLInjection = true,
      validateOnChange = true,
      showErrorMessage = true,
      isPassword = false,
      onChange,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(props.value?.toString() || '');
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    // 입력값 검증
    const validateInput = useCallback(
      (inputValue: string): { isValid: boolean; message?: string } => {
        // 길이 검증
        const lengthValidation = validateLength(
          inputValue,
          minLength,
          maxLength
        );
        if (!lengthValidation.isValid) {
          return lengthValidation;
        }

        // XSS 검사
        if (checkXSS && hasXSSRisk(inputValue)) {
          return {
            isValid: false,
            message: '잠재적으로 위험한 내용이 포함되어 있습니다.',
          };
        }

        // SQL 인젝션 검사
        if (checkSQLInjection && hasSQLInjectionRisk(inputValue)) {
          return {
            isValid: false,
            message: '잠재적으로 위험한 내용이 포함되어 있습니다.',
          };
        }

        // 사용자 정의 검증
        if (validate) {
          return validate(inputValue);
        }

        return { isValid: true };
      },
      [minLength, maxLength, checkXSS, checkSQLInjection, validate]
    );

    // 입력값 변경 처리
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;

        // 입력값 정제
        const sanitizedValue = sanitizeInput(rawValue, {
          maxLength,
          allowHtml,
          stripScripts: true,
        });

        setValue(sanitizedValue);

        // 실시간 검증
        if (validateOnChange) {
          const validation = validateInput(sanitizedValue);
          setError(validation.isValid ? null : validation.message || null);
        }

        // 원본 이벤트 호출
        onChange?.(event);
      },
      [maxLength, allowHtml, validateOnChange, validateInput, onChange]
    );

    // 포커스 아웃 처리
    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        const validation = validateInput(value);
        setError(validation.isValid ? null : validation.message || null);
        onBlur?.(event);
      },
      [value, validateInput, onBlur]
    );

    // 비밀번호 표시 토글
    const togglePasswordVisibility = useCallback(() => {
      setShowPassword(prev => !prev);
    }, []);

    return (
      <div className='w-full'>
        <div className='relative'>
          <input
            ref={ref}
            type={isPassword && !showPassword ? 'password' : 'text'}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              'w-full px-3 py-2 border rounded-lg transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500',
              isPassword && 'pr-10',
              className
            )}
            {...props}
          />

          {isPassword && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              {showPassword ? (
                <EyeClosedIcon className='w-5 h-5' />
              ) : (
                <EyeOpenIcon className='w-5 h-5' />
              )}
            </button>
          )}
        </div>

        {/* 에러 메시지 */}
        {showErrorMessage && error && (
          <div className='mt-1 flex items-center gap-1 text-sm text-red-600'>
            <ExclamationTriangleIcon className='w-4 h-4 flex-shrink-0' />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

SecureInput.displayName = 'SecureInput';
