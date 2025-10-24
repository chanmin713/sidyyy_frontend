import { ReactNode } from 'react'

interface ToggleGroupProps<T = string> {
  value: T
  onValueChange: (value: T) => void
  children: ReactNode
  className?: string
}

export function ToggleGroup<T = string>({ children, className = '' }: ToggleGroupProps<T>) {
  return (
    <div className={`flex bg-gray-50 rounded-lg p-1 shadow-sm relative ${className}`}>
      {children}
    </div>
  )
}

interface ToggleItemProps<T = string> {
  value: T
  children: ReactNode
  className?: string
}

export function ToggleItem<T = string>({ children, className = '' }: ToggleItemProps<T>) {
  return (
    <div className={`flex-1 flex ${className}`}>
      {children}
    </div>
  )
}

interface ToggleButtonProps<T = string> {
  value: T
  currentValue: T
  onValueChange: (value: T) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: ReactNode
  className?: string
}

export function ToggleButton<T = string>({ value, currentValue, onValueChange, onMouseEnter, onMouseLeave, children, className = '' }: ToggleButtonProps<T>) {
  const isActive = currentValue === value

  return (
    <button
      onClick={() => onValueChange(value)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex-1 py-1.5 px-4 text-sm font-medium flex items-center justify-center transition-all duration-500 relative z-10 ${
        isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900'
      } ${className}`}
    >
      {children}
    </button>
  )
}

interface ToggleBackgroundProps<T = string> {
  value: T
  currentValue: T
  hoveredValue?: T | null
  className?: string
}

export function ToggleBackground<T = string>({ value, currentValue, hoveredValue, className = '' }: ToggleBackgroundProps<T>) {
  const isActive = currentValue === value
  const isHovered = hoveredValue === value

  // 현재 선택된 값에 따라 위치 계산
  const getPosition = () => {
    // 호버된 값이 있으면 호버된 값 기준으로, 없으면 현재 선택된 값 기준으로
    const targetValue = hoveredValue || currentValue
    
    if (isHovered || isActive) {
      // 첫 번째 항목 (all, latest 등)
      if (targetValue === 'all' || targetValue === 'latest') {
        return 'left-1 w-[calc(50%-0.25rem)]'
      } 
      // 두 번째 항목 (following, popular 등)
      else if (targetValue === 'following' || targetValue === 'popular') {
        return 'left-[calc(50%+0.25rem)] w-[calc(50%-0.25rem)]'
      }
    }
    return ''
  }

  return (
    <div 
      className={`absolute top-1 bottom-1 bg-blue-500 rounded-md shadow-sm transition-all duration-500 ease-out ${getPosition()} ${className}`}
    />
  )
}
