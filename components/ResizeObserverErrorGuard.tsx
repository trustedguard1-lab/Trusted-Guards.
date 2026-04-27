'use client'

import { useEffect } from 'react'

const RESIZE_OBSERVER_MESSAGES = new Set([
  'ResizeObserver loop completed with undelivered notifications.',
  'ResizeObserver loop limit exceeded',
])

export function ResizeObserverErrorGuard() {
  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      if (!RESIZE_OBSERVER_MESSAGES.has(event.message)) {
        return
      }

      event.stopImmediatePropagation()
      event.preventDefault()
    }

    window.addEventListener('error', handleWindowError)

    return () => {
      window.removeEventListener('error', handleWindowError)
    }
  }, [])

  return null
}