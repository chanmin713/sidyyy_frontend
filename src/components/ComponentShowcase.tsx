import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ButtonExample } from '@/components/examples/ButtonExample'
import { FormExample } from '@/components/examples/FormExample'
import { DialogExample } from '@/components/examples/DialogExample'
import { AccordionExample } from '@/components/examples/AccordionExample'
import { SelectExample } from '@/components/examples/SelectExample'
import { ToastExample } from '@/components/examples/ToastExample'

export function ComponentShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-foreground">
          Radix UI 컴포넌트 갤러리
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          접근성이 뛰어나고 사용자 친화적인 Radix UI 컴포넌트들을 살펴보세요.
          각 컴포넌트는 키보드 네비게이션과 스크린 리더를 완벽하게 지원합니다.
        </p>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="buttons">버튼</TabsTrigger>
          <TabsTrigger value="forms">폼</TabsTrigger>
          <TabsTrigger value="dialogs">다이얼로그</TabsTrigger>
          <TabsTrigger value="accordion">아코디언</TabsTrigger>
          <TabsTrigger value="select">셀렉트</TabsTrigger>
          <TabsTrigger value="toast">토스트</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>버튼 컴포넌트</CardTitle>
              <CardDescription>
                다양한 스타일과 크기의 버튼들을 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ButtonExample />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>폼 컴포넌트</CardTitle>
              <CardDescription>
                입력 필드, 체크박스, 스위치 등 다양한 폼 요소들을 살펴보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormExample />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dialogs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>다이얼로그 컴포넌트</CardTitle>
              <CardDescription>
                모달 다이얼로그와 팝오버의 사용법을 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DialogExample />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accordion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>아코디언 컴포넌트</CardTitle>
              <CardDescription>
                접을 수 있는 콘텐츠 섹션들을 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccordionExample />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="select" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>셀렉트 컴포넌트</CardTitle>
              <CardDescription>
                드롭다운 선택 메뉴의 다양한 옵션들을 살펴보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SelectExample />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="toast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>토스트 컴포넌트</CardTitle>
              <CardDescription>
                사용자에게 알림을 전달하는 토스트 메시지를 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ToastExample />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
