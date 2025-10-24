import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">SYDESYDE</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">로그</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">소셜링</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
              KakaoSYDE 오픈채팅
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
