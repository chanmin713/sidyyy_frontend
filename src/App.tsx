import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            간단한 Radix UI 앱
          </h1>
          <p className="text-xl text-muted-foreground">
            기본적인 컴포넌트들만 사용한 간단한 예제입니다.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>
              계정에 로그인하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <Button className="w-full">
              로그인
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>버튼 예제</CardTitle>
            <CardDescription>
              다양한 버튼 스타일을 확인해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>기본 버튼</Button>
              <Button variant="secondary">보조 버튼</Button>
              <Button variant="outline">아웃라인 버튼</Button>
              <Button variant="ghost">고스트 버튼</Button>
              <Button variant="destructive">삭제 버튼</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App