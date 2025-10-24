import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@radix-ui/react-icons'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:right-8 z-50 w-12 h-12 bg-gray-600/80 hover:bg-gray-600 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
      aria-label="맨 위로"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  )
}
