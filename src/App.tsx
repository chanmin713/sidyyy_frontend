import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Radix UI 프로젝트
                </h1>
                <p className="text-muted-foreground mt-2">
                  Radix UI 컴포넌트들을 활용한 현대적인 웹 애플리케이션
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>
    </div>
  )
}

export default App