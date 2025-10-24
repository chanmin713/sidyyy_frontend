import { useParams } from 'react-router-dom';

export function UserProfilePage() {
  const { username } = useParams<{ username: string }>();

  return (
    <div className='w-full max-w-4xl mx-auto px-4 py-6'>
      <div className='text-center py-20'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          {username}의 프로필
        </h1>
        <p className='text-lg text-gray-600'>
          {username}님의 프로필 페이지입니다.
        </p>
      </div>
    </div>
  );
}
