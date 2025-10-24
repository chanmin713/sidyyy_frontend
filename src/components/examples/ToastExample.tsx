import React from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ToastExample() {
  const { toast } = useToast()

  const showSuccessToast = () => {
    toast({
      title: "성공!",
      description: "작업이 성공적으로 완료되었습니다.",
    })
  }

  const showErrorToast = () => {
    toast({
      title: "오류 발생",
      description: "작업 중 오류가 발생했습니다. 다시 시도해주세요.",
      variant: "destructive",
    })
  }

  const showInfoToast = () => {
    toast({
      title: "정보",
      description: "새로운 업데이트가 있습니다.",
    })
  }

  const showWarningToast = () => {
    toast({
      title: "경고",
      description: "이 작업은 되돌릴 수 없습니다.",
    })
  }

  const showLongToast = () => {
    toast({
      title: "긴 메시지",
      description: "이것은 매우 긴 토스트 메시지입니다. 토스트가 어떻게 긴 텍스트를 처리하는지 확인할 수 있습니다. 텍스트가 길어도 레이아웃이 깨지지 않고 적절히 표시됩니다.",
    })
  }

  const showActionToast = () => {
    toast({
      title: "파일이 삭제되었습니다",
      description: "실수로 삭제하셨나요? 복구할 수 있습니다.",
      action: (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            toast({
              title: "복구됨",
              description: "파일이 성공적으로 복구되었습니다.",
            })
          }}
        >
          복구
        </Button>
      ),
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>기본 토스트</CardTitle>
          <CardDescription>
            다양한 유형의 토스트 메시지를 확인해보세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={showSuccessToast} variant="default">
              성공 토스트
            </Button>
            <Button onClick={showErrorToast} variant="destructive">
              오류 토스트
            </Button>
            <Button onClick={showInfoToast} variant="outline">
              정보 토스트
            </Button>
            <Button onClick={showWarningToast} variant="secondary">
              경고 토스트
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>긴 메시지 토스트</CardTitle>
          <CardDescription>
            긴 텍스트가 포함된 토스트 메시지입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={showLongToast} variant="outline">
            긴 메시지 토스트
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>액션이 있는 토스트</CardTitle>
          <CardDescription>
            사용자가 추가 작업을 할 수 있는 버튼이 포함된 토스트입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={showActionToast} variant="outline">
            액션 토스트
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>연속 토스트</CardTitle>
          <CardDescription>
            여러 개의 토스트를 연속으로 표시해보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              showSuccessToast()
              setTimeout(() => showInfoToast(), 500)
              setTimeout(() => showWarningToast(), 1000)
            }}
            variant="outline"
          >
            연속 토스트 (3개)
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
