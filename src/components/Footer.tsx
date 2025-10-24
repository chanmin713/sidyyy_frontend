import React from 'react'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* 모바일: 세로 배치, 데스크톱: 가로 배치 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-3 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">문의하기</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">이용약관</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">개인정보처리방침</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 px-2 py-0.5">서비스 소개</a>
          </div>
        </div>

        {/* 저작권 - 별도 섹션으로 분리 */}
        <div className="mt-3">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
