import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function SelectExample() {
  const [country, setCountry] = useState('')
  const [framework, setFramework] = useState('')
  const [size, setSize] = useState('')

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>기본 셀렉트</CardTitle>
          <CardDescription>
            단일 선택이 가능한 드롭다운 메뉴입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country">국가 선택</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="국가를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kr">대한민국</SelectItem>
                <SelectItem value="us">미국</SelectItem>
                <SelectItem value="jp">일본</SelectItem>
                <SelectItem value="cn">중국</SelectItem>
                <SelectItem value="gb">영국</SelectItem>
                <SelectItem value="fr">프랑스</SelectItem>
                <SelectItem value="de">독일</SelectItem>
                <SelectItem value="ca">캐나다</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>프레임워크 선택</CardTitle>
          <CardDescription>
            개발 프레임워크를 선택하는 셀렉트입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="framework">프론트엔드 프레임워크</Label>
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="프레임워크를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue.js</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                <SelectItem value="gatsby">Gatsby</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>크기 선택</CardTitle>
          <CardDescription>
            다양한 크기 옵션을 제공하는 셀렉트입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="size">제품 크기</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="크기를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS (Extra Small)</SelectItem>
                <SelectItem value="s">S (Small)</SelectItem>
                <SelectItem value="m">M (Medium)</SelectItem>
                <SelectItem value="l">L (Large)</SelectItem>
                <SelectItem value="xl">XL (Extra Large)</SelectItem>
                <SelectItem value="xxl">XXL (Extra Extra Large)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>비활성화된 옵션</CardTitle>
          <CardDescription>
            일부 옵션이 비활성화된 셀렉트입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="status">상태 선택</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="상태를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">활성</SelectItem>
                <SelectItem value="inactive">비활성</SelectItem>
                <SelectItem value="pending" disabled>대기 중 (비활성화)</SelectItem>
                <SelectItem value="suspended" disabled>일시정지 (비활성화)</SelectItem>
                <SelectItem value="archived">보관됨</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
