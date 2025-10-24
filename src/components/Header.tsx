import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">Sidyyy</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">로그</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">소셜링</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
