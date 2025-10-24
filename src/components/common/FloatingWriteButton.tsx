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
      className='fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 lg:hidden'
      title='로그 쓰기'
    >
      <Pencil1Icon className='w-6 h-6' />
    </button>
  );
}
