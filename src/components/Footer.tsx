import React from 'react'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Sidyyy</h3>
          <p className="text-sm text-gray-600 mb-4">
            나만의 사이드 프로젝트를 자랑하고 함께 성장하는 개발자 커뮤니티
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-gray-900">문의하기</a>
            <a href="#" className="hover:text-gray-900">이용약관</a>
            <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
          </div>
          <div className="text-xs text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
