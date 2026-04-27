'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">خطأ</h1>
          <p className="text-lg text-muted-foreground">حدث خطأ ما. يرجى المحاولة مرة أخرى</p>
        </div>
        <Button onClick={() => reset()}>
          حاول مرة أخرى
        </Button>
      </div>
    </div>
  )
}
