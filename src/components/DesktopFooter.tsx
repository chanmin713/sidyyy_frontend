import React from 'react'

export function DesktopFooter() {
  return (
    <footer className="border-t mt-8 sticky bottom-0 bg-white z-40">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* 왼쪽: 브랜드 정보 */}
          <div className="text-left">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Sidyyy</h3>
            <p className="text-sm text-gray-600 max-w-md">
              나만의 사이드 프로젝트를 자랑하고<br />
              함께 성장하는 개발자 커뮤니티
            </p>
          </div>

          {/* 오른쪽: 링크들 */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">문의하기</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">이용약관</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">개인정보처리방침</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">서비스 소개</a>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
