import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header'
import { ComponentShowcase } from '@/components/ComponentShowcase'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ComponentShowcase />
      </main>
      <Toaster />
    </div>
  )
}

export default App
