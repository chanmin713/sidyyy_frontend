import { LAYOUT } from '@/constants';

export function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className={LAYOUT.PAGE_CONTAINER_CENTERED}>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Sidyyy</h1>
            <p className='text-lg text-gray-600 mb-8'>
              개발자들의 사이드 프로젝트를 공유하고 협업할 수 있는 플랫폼입니다.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                  프로젝트 공유
                </h2>
                <p className='text-gray-600'>
                  다양한 사이드 프로젝트를 확인하고 공유하세요.
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                  협업 기회
                </h2>
                <p className='text-gray-600'>
                  관심 있는 프로젝트에 참여하고 함께 개발하세요.
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                  포트폴리오
                </h2>
                <p className='text-gray-600'>
                  당신의 프로젝트를 세상에 알려보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
