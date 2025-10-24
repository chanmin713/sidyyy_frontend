import { LAYOUT } from '@/constants';

export function MemberPage() {
  return (
    <div className={LAYOUT.PAGE_CONTAINER}>
      <div className='text-center py-20'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>개발자 멤버</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Sidyyy 커뮤니티의 다양한 개발자 멤버들을 만나보세요.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              프론트엔드 개발자
            </h2>
            <p className='text-gray-600'>React, Vue, Angular 전문 개발자들</p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              백엔드 개발자
            </h2>
            <p className='text-gray-600'>서버 및 API 개발 전문가들</p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              풀스택 개발자
            </h2>
            <p className='text-gray-600'>전체 스택을 다루는 개발자들</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
