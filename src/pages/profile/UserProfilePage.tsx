import { useParams } from 'react-router-dom';

export function UserProfilePage() {
  const { username } = useParams<{ username: string }>();

  return (
    <div className='py-6'>
      <div className='text-center py-20'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          {username}의 프로필
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          {username}님의 프로필 페이지입니다.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2'>프로젝트</h2>
            <p className='text-gray-600'>참여한 프로젝트들을 확인해보세요.</p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2'>활동</h2>
            <p className='text-gray-600'>최근 활동 내역을 확인해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
