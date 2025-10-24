import React from 'react'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* 모바일: 세로 배치, 데스크톱: 가로 배치 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* 브랜드 정보 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-900 text-base mb-1">Sidyyy</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              나만의 사이드 프로젝트를 자랑하고<br className="hidden sm:block" />
              함께 성장하는 개발자 커뮤니티
            </p>
          </div>

          {/* 링크들 */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900 px-2 py-1">문의하기</a>
            <a href="#" className="hover:text-gray-900 px-2 py-1">이용약관</a>
            <a href="#" className="hover:text-gray-900 px-2 py-1">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900 px-2 py-1">서비스 소개</a>
          </div>
        </div>

        {/* 저작권 - 별도 섹션으로 분리 */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
