import { Pencil1Icon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export function FloatingWriteButton() {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/write');
  };

  return (
    <button
      onClick={handleWriteClick}
      className='fixed bottom-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center z-50 lg:hidden'
      title='로그 쓰기'
    >
      <Pencil1Icon className='w-6 h-6' />
    </button>
  );
}
