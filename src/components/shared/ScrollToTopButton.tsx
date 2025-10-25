import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@radix-ui/react-icons';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 text-gray-700 rounded-full shadow-lg backdrop-blur-md border border-white/30 transition-all duration-200 flex items-center justify-center hover:scale-105'
      aria-label='맨 위로'
    >
      <ArrowUpIcon className='w-6 h-6' />
    </button>
  );
}
