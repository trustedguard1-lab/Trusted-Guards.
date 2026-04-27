'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n-context'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useI18n()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">{t('error') || 'خطأ'}</h1>
          <p className="text-lg text-muted-foreground">{t('error_description') || 'حدث خطأ ما. يرجى المحاولة مرة أخرى'}</p>
        </div>
        <Button onClick={() => reset()}>
          {t('try_again') || 'حاول مرة أخرى'}
        </Button>
      </div>
    </div>
  )
}
