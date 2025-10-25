import { LAYOUT } from '@/constants';

export function ProjectPage() {
  return (
    <div className={LAYOUT.PAGE_CONTAINER}>
      <div className='text-center py-20'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>프로젝트</h1>
        <p className='text-lg text-gray-600 mb-8'>
          다양한 사이드 프로젝트를 확인하고 참여할 수 있는 페이지입니다.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          <div className='p-6 border border-gray-200 bg-white rounded-lg hover:shadow-md transition-shadow'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              웹 개발
            </h2>
            <p className='text-gray-600'>
              React, Vue, Angular 등 다양한 웹 기술로 만든 프로젝트들
            </p>
          </div>
          <div className='p-6 border border-gray-200 bg-white rounded-lg hover:shadow-md transition-shadow'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              모바일 앱
            </h2>
            <p className='text-gray-600'>
              React Native, Flutter로 개발한 모바일 애플리케이션들
            </p>
          </div>
          <div className='p-6 border border-gray-200 bg-white rounded-lg hover:shadow-md transition-shadow'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              AI & ML
            </h2>
            <p className='text-gray-600'>
              머신러닝과 인공지능을 활용한 혁신적인 프로젝트들
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
