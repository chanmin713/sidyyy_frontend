import { ReactNode, useCallback, useRef, useEffect } from 'react';
import { useDropdown } from '@/hooks';
import { trapFocus, getFocusableElements, KEYBOARD_KEYS } from '@/utils';
import { cn } from '@/utils';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
  onOpenChange?: (open: boolean) => void;
  /**
   * 드롭다운 라벨 (접근성용)
   */
  label?: string;
  /**
   * 포커스 트랩 사용 여부
   */
  trapFocus?: boolean;
}

export function Dropdown({
  trigger,
  children,
  className = '',
  align = 'right',
  onOpenChange,
  label = '메뉴',
  trapFocus: shouldTrapFocus = true,
}: DropdownProps) {
  const { isOpen, isClosing, dropdownRef, handleToggle } = useDropdown({
    onOpenChange,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  // 포커스 트랩 설정
  useEffect(() => {
    if (isOpen && shouldTrapFocus && contentRef.current) {
      const focusableElements = getFocusableElements(contentRef.current);
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        cleanupRef.current = trapFocus(
          contentRef.current,
          firstElement,
          lastElement
        );
        firstElement.focus();
      }
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [isOpen, shouldTrapFocus]);

  // ESC 키로 닫기
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE && isOpen) {
        event.preventDefault();
        handleToggle();
      }
    },
    [isOpen, handleToggle]
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        onClick={handleToggle}
        role='button'
        tabIndex={0}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        aria-label={label}
        onKeyDown={handleKeyDown}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          role='menu'
          aria-label={label}
          className={cn(
            'absolute top-10 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200',
            align === 'right' ? 'right-0' : 'left-0',
            isClosing
              ? 'animate-out fade-out-0 slide-out-to-top-2'
              : 'animate-in fade-in-0 slide-in-from-top-2',
            className
          )}
          onKeyDown={handleKeyDown}
        >
          {children}
        </div>
      )}
    </div>
  );
}
