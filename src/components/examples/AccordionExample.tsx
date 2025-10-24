import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AccordionExample() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>기본 아코디언</CardTitle>
          <CardDescription>
            자주 묻는 질문들을 아코디언 형태로 정리했습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Radix UI란 무엇인가요?</AccordionTrigger>
              <AccordionContent>
                Radix UI는 접근성이 뛰어난 무료 오픈소스 컴포넌트 라이브러리입니다. 
                스타일링이 없는 headless 컴포넌트들을 제공하여 완전한 커스터마이징이 가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>어떤 프레임워크와 함께 사용할 수 있나요?</AccordionTrigger>
              <AccordionContent>
                React, Vue, Angular, Svelte 등 다양한 프론트엔드 프레임워크와 함께 사용할 수 있습니다. 
                현재 가장 활발하게 지원되는 것은 React입니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>상업적 프로젝트에서 사용할 수 있나요?</AccordionTrigger>
              <AccordionContent>
                네, Radix UI는 MIT 라이선스 하에 배포되므로 상업적 프로젝트에서 자유롭게 사용할 수 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>접근성은 어떻게 보장되나요?</AccordionTrigger>
              <AccordionContent>
                Radix UI는 WAI-ARIA 가이드라인을 준수하며, 키보드 네비게이션, 스크린 리더 지원, 
                포커스 관리 등 웹 접근성 표준을 완벽하게 구현합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>다중 열기 아코디언</CardTitle>
          <CardDescription>
            여러 섹션을 동시에 열 수 있는 아코디언입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>프론트엔드 개발</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>Angular</li>
                  <li>Svelte</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>백엔드 개발</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Node.js</li>
                  <li>Python (Django, FastAPI)</li>
                  <li>Java (Spring Boot)</li>
                  <li>Go</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>데이터베이스</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>MySQL</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
