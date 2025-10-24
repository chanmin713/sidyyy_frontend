import { ReactNode } from 'react';
import { useDropdown } from '@/hooks';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
  onOpenChange?: (open: boolean) => void;
}

export function Dropdown({
  trigger,
  children,
  className = '',
  align = 'right',
  onOpenChange,
}: DropdownProps) {
  const { isOpen, isClosing, dropdownRef, handleToggle } = useDropdown({
    onOpenChange,
  });

  return (
    <div className='relative' ref={dropdownRef}>
      <div onClick={handleToggle}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-10 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200 ${
            isClosing
              ? 'animate-out fade-out-0 slide-out-to-top-2'
              : 'animate-in fade-in-0 slide-in-from-top-2'
          } ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
