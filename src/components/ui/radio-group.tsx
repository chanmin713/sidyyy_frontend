import { ReactNode } from 'react'

interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  children: ReactNode
  className?: string
}

export function RadioGroup({ value, onValueChange, children, className = '' }: RadioGroupProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  )
}

interface RadioItemProps {
  value: string
  currentValue: string
  onValueChange: (value: string) => void
  children: ReactNode
  className?: string
}

export function RadioItem({ value, currentValue, onValueChange, children, className = '' }: RadioItemProps) {
  const isChecked = currentValue === value

  return (
    <label className={`flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md p-2 -m-2 transition-colors duration-150 ${className}`}>
      <input
        type="radio"
        name="radio-group"
        value={value}
        checked={isChecked}
        onChange={() => onValueChange(value)}
        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      {children}
    </label>
  )
}
