'use client'

import { useEffect } from 'react'

export function HtmlSetup() {
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
  }, [])

  return null
}
