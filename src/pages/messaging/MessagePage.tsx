export function MessagePage() {
  return (
    <div className='py-6'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>메시지</h1>
        <p className='text-lg text-gray-600 mb-8'>
          개발자들과 소통하고 협업할 수 있는 메시지 페이지입니다.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              프로젝트 대화
            </h2>
            <p className='text-gray-600'>프로젝트 관련 논의와 협업 소통</p>
          </div>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              기술 질문
            </h2>
            <p className='text-gray-600'>개발 관련 질문과 답변 공유</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
