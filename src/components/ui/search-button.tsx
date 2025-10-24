import { useState } from 'react'
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

interface SearchButtonProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchButton({ 
  placeholder = "검색어를 입력하세요...", 
  onSearch,
  className = '' 
}: SearchButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim())
    }
    setIsOpen(false)
    setQuery('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 group hover:bg-gray-100 hover:shadow-sm ${className}`}
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
      </button>
    )
  }

  return (
    <div className={`animate-in fade-in-0 duration-300 ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full py-2.5 px-3 pr-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 shadow-lg transition-all duration-500 placeholder:text-gray-600"
          autoFocus
        />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
        >
          <Cross2Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
        </button>
      </div>
    </div>
  )
}
