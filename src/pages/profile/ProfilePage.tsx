import { LAYOUT } from '@/constants';

export function ProfilePage() {
  return (
    <div className='py-6'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>내 프로필</h1>
          <p className='text-lg text-gray-600 mb-8'>
            내 프로필을 관리하고 설정할 수 있는 페이지입니다.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
            <div className='p-6 bg-gray-50 rounded-lg'>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                개인정보
              </h2>
              <p className='text-gray-600'>
                이름, 이메일, 소개 등 기본 정보 관리
              </p>
            </div>
            <div className='p-6 bg-gray-50 rounded-lg'>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                프로젝트
              </h2>
              <p className='text-gray-600'>내가 참여한 프로젝트들 확인</p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default ProfilePage;
