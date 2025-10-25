import { useState, useRef, useEffect } from 'react';
import {
  Pencil1Icon,
  FileTextIcon,
  CodeIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export function FloatingWriteButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleWriteClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const writeOptions = [
    { path: '/write', label: '로그 작성', icon: FileTextIcon },
    { path: '/write/project', label: '프로젝트 작성', icon: CodeIcon },
    { path: '/write/recruit', label: '모집 작성', icon: PersonIcon },
  ];

  return (
    <div className='fixed bottom-6 right-6 z-50 lg:hidden' ref={dropdownRef}>
      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className='absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px]'>
          {writeOptions.map(option => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.path}
                onClick={() => handleOptionClick(option.path)}
                className='w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors'
              >
                <IconComponent className='w-4 h-4' />
                <span className='text-sm font-medium'>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* 메인 버튼 */}
      <button
        onClick={handleWriteClick}
        className={`w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-white/30' : ''
        }`}
        title='글 작성'
      >
        <Pencil1Icon className='w-6 h-6' />
      </button>
    </div>
  );
}
