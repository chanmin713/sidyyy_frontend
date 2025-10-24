import React from 'react'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* PC 버전 푸터 */}
        <div className="hidden md:flex items-center justify-between">
          {/* 왼쪽: Sidyyy 정보 */}
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 text-base">Sidyyy</h3>
            <span className="text-xs text-gray-600">-</span>
            <p className="text-xs text-gray-600">
              나만의 사이드 프로젝트를 자랑하고 함께 성장하는 개발자 커뮤니티
            </p>
          </div>

          {/* 오른쪽: 링크들 + 저작권 */}
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900">문의하기</a>
            <a href="#" className="hover:text-gray-900">이용약관</a>
            <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900">서비스 소개</a>
            <span className="text-gray-500">© 2025. Sidyyy</span>
          </div>
        </div>

        {/* 모바일 버전 푸터 */}
        <div className="md:hidden">
          <div className="flex flex-col gap-4">
            {/* 브랜드 정보 */}
            <div className="text-left">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-gray-900 text-base leading-tight">Sidyyy</h3>
                <p className="text-xs text-gray-600 leading-tight text-right">
                  나만의 사이드 프로젝트를 자랑하고<br />
                  함께 성장하는 개발자 커뮤니티
                </p>
              </div>
            </div>

            {/* 링크들 */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-900 px-2 py-0.5">문의하기</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-900 px-2 py-0.5">이용약관</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-900 px-2 py-0.5">개인정보처리방침</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-900 px-2 py-0.5">서비스 소개</a>
            </div>
          </div>
        </div>

        {/* 모바일 전용 저작권 */}
        <div className="md:hidden mt-3">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
