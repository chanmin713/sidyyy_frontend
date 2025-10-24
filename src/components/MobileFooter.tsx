import React from 'react'

export function MobileFooter() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col gap-6">
          {/* 브랜드 정보 */}
          <div className="text-left px-2">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-gray-900 text-2xl leading-tight">Sidyyy</h3>
              <p className="text-xs text-gray-600 leading-tight text-right">
                나만의 사이드 프로젝트를 자랑하고<br />
                함께 성장하는 개발자 커뮤니티
              </p>
            </div>
          </div>

          {/* 링크들 */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-600 px-2">
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">문의하기</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">이용약관</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">개인정보처리방침</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">서비스 소개</a>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-3">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
