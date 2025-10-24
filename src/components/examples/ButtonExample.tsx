import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ButtonExample() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">기본 버튼 스타일</h3>
        <div className="flex flex-wrap gap-4">
          <Button>기본 버튼</Button>
          <Button variant="secondary">보조 버튼</Button>
          <Button variant="outline">아웃라인 버튼</Button>
          <Button variant="ghost">고스트 버튼</Button>
          <Button variant="link">링크 버튼</Button>
          <Button variant="destructive">삭제 버튼</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">버튼 크기</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">작은 버튼</Button>
          <Button size="default">기본 버튼</Button>
          <Button size="lg">큰 버튼</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">비활성화 상태</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled>비활성화된 버튼</Button>
          <Button variant="outline" disabled>비활성화된 아웃라인</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">로딩 상태</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            로딩 중...
          </Button>
        </div>
      </div>
    </div>
  )
}
