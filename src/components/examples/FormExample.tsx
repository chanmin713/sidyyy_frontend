import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FormExample() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, rememberMe, notifications, newsletter })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>로그인 폼</CardTitle>
          <CardDescription>
            다양한 입력 요소들을 포함한 폼 예제입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember">로그인 상태 유지</Label>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">알림 받기</Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="newsletter">뉴스레터 구독</Label>
                <Switch
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              로그인
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>체크박스 그룹</CardTitle>
          <CardDescription>
            여러 옵션 중에서 선택할 수 있는 체크박스들입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2">Vue.js</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3">Angular</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option4" />
              <Label htmlFor="option4">Svelte</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
