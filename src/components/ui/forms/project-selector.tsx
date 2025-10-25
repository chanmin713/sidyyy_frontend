import { memo, useState, useRef, useEffect } from 'react';
import { cn } from '@/utils';
import { getProjectLogo } from '@/utils';
import { sampleProjects } from '@/data/sampleProjects';

interface ProjectSelectorProps {
  value: string;
  onChange: (value: string) => void;
  onAddNew?: () => void;
  className?: string;
}

export const ProjectSelector = memo(function ProjectSelector({
  value,
  onChange,
  onAddNew,
  className,
}: ProjectSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  // 프로젝트 카테고리 목록 (sampleProjects에서 추출)
  const categories = Array.from(new Set(sampleProjects.map(p => p.category)));

  const handleSelect = (category: string) => {
    onChange(category);
    setIsOpen(false);
  };

  const handleAddNew = () => {
    setIsOpen(false);
    onAddNew?.();
  };

  const selectedProject = sampleProjects.find(p => p.category === value);
  const ProjectLogo = selectedProject ? getProjectLogo(selectedProject.category) : null;

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* 선택된 값 표시 */}
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 flex items-center justify-between hover:border-gray-400 transition-colors'
      >
        <div className='flex items-center gap-2'>
          {ProjectLogo && <ProjectLogo className='w-5 h-5' />}
          <span className={value ? 'text-gray-900' : 'text-gray-500'}>
            {value || '프로젝트를 선택하세요'}
          </span>
        </div>
        <svg
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform',
            isOpen && 'transform rotate-180'
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className='absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto'>
          {categories.map(category => {
            const CategoryLogo = getProjectLogo(category);
            return (
              <button
                key={category}
                type='button'
                onClick={() => handleSelect(category)}
                className={cn(
                  'w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-b-0',
                  value === category && 'bg-blue-50 hover:bg-blue-100'
                )}
              >
                <CategoryLogo className='w-5 h-5 flex-shrink-0' />
                <span className='text-gray-900 font-medium'>{category}</span>
                {value === category && (
                  <svg
                    className='w-5 h-5 text-blue-500 ml-auto'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            );
          })}

          {/* 추가하기 버튼 */}
          {onAddNew && (
            <button
              type='button'
              onClick={handleAddNew}
              className='w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 border-t-2 border-gray-200 text-blue-600 font-medium'
            >
              <svg
                className='w-5 h-5 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 4v16m8-8H4'
                />
              </svg>
              <span>새 프로젝트 추가하기</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
});

