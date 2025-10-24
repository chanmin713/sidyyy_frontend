import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface PostCardProps {
  author: string
  content: string
  timestamp: string
  likes: number
  comments: number
}

export function PostCard({ author, content, timestamp, likes, comments }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-medium text-gray-900">{author}</span>
              <span className="text-gray-500 text-sm">·</span>
              <span className="text-gray-500 text-sm">{timestamp}</span>
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">{content}</p>
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">{likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">{comments}</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
