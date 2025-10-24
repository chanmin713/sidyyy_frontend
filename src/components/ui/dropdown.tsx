import { useState, useRef, useEffect, ReactNode } from 'react'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  className?: string
  align?: 'left' | 'right'
  onOpenChange?: (open: boolean) => void
}

export function Dropdown({ 
  trigger, 
  children, 
  className = '', 
  align = 'right',
  onOpenChange 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
        onOpenChange?.(false)
      }, 200)
    } else {
      setIsOpen(true)
      onOpenChange?.(true)
    }
  }

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsClosing(true)
          setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
            onOpenChange?.(false)
          }, 200)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={handleToggle}>
        {trigger}
      </div>

      {isOpen && (
        <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-10 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200 ${
          isClosing 
            ? 'animate-out fade-out-0 slide-out-to-top-2' 
            : 'animate-in fade-in-0 slide-in-from-top-2'
        } ${className}`}>
          {children}
        </div>
      )}
    </div>
  )
}
