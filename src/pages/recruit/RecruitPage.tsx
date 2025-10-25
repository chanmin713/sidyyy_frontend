import { LAYOUT } from '@/constants';

export function RecruitPage() {
  return (
    <div className={LAYOUT.PAGE_CONTAINER}>
      <div className='text-center py-20'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          프로젝트 팀원 모집
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          다양한 사이드 프로젝트의 팀원 모집 공고를 확인하고 참여할 수 있습니다.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              프론트엔드
            </h2>
            <p className='text-gray-600'>
              React, Vue, Angular 등 프론트엔드 개발자 모집
            </p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>백엔드</h2>
            <p className='text-gray-600'>
              Node.js, Python, Java 등 백엔드 개발자 모집
            </p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              디자이너
            </h2>
            <p className='text-gray-600'>
              UI/UX 디자이너 및 그래픽 디자이너 모집
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitPage;
