import { useState, useRef, useEffect, useCallback } from 'react';

interface UseDropdownOptions {
  onOpenChange?: (open: boolean) => void;
  closeOnOutsideClick?: boolean;
  closeDelay?: number;
}

export const useDropdown = (options: UseDropdownOptions = {}) => {
  const {
    onOpenChange,
    closeOnOutsideClick = true,
    closeDelay = 200,
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        onOpenChange?.(false);
      }, closeDelay);
    } else {
      setIsOpen(true);
      onOpenChange?.(true);
    }
  }, [isOpen, onOpenChange, closeDelay]);

  const handleClose = useCallback(() => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        onOpenChange?.(false);
      }, closeDelay);
    }
  }, [isOpen, onOpenChange, closeDelay]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    if (!closeOnOutsideClick || !isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeOnOutsideClick, handleClose]);

  return {
    isOpen,
    isClosing,
    dropdownRef,
    handleToggle,
    handleClose,
  };
};
