import { ReactNode } from 'react'

interface IconButtonProps {
  onClick: () => void
  children: ReactNode
  isActive?: boolean
  className?: string
}

export function IconButton({ onClick, children, isActive = false, className = '' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group ${
        isActive 
          ? 'bg-gray-900 text-white shadow-sm' 
          : 'hover:bg-gray-100 hover:shadow-sm'
      } ${className}`}
    >
      {children}
    </button>
  )
}
