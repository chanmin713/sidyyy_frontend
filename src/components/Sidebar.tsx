import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function Sidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* 프로필 카드 */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600 font-medium text-xl">U</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">User Avatar</h3>
            <p className="text-gray-600 text-sm mb-4">무슨 생각을 하고 계신가요?</p>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              포스트 작성하기
            </button>
          </div>
        </CardContent>
      </Card>

      {/* SYDE 소개 */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">We are Sidyyy</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            주체적인 삶으로 가득한 세상,<br />
            1200+명의 Sidyyy와 함께해요.
          </p>
          <button className="w-full bg-yellow-400 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
            Sidyyy 시작하기
          </button>
        </CardContent>
      </Card>

      {/* 링크들 */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-3 text-sm">
            <a href="#" className="block text-gray-600 hover:text-gray-900">커뮤니티가이드라인</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">협업문의</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">이용약관</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">개인정보처리방침</a>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">© 2025 Sidyyy. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">사업자정보</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
