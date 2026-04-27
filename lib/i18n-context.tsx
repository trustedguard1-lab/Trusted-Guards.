'use client'

import { createContext, useContext, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import enTranslations from '@/i18n/en.json'

type AppLanguage = 'ar' | 'en'
type TranslationNode = string | string[] | TranslationTree
interface TranslationTree {
  [key: string]: TranslationNode
}

interface I18nContextValue {
  language: AppLanguage
  t: (key: string) => string
}

const translations: Record<AppLanguage, TranslationTree> = {
  en: enTranslations as TranslationTree,
  ar: enTranslations as TranslationTree,
}

function getLanguageFromPathname(pathname: string | null): AppLanguage {
  if (!pathname) return 'en'
  const firstSegment = pathname.split('/')[1]
  return firstSegment === 'ar' ? 'ar' : 'en'
}

function resolveTranslation(language: AppLanguage, key: string): string {
  const keys = key.split('.')
  let current: TranslationNode | undefined = translations[language]

  for (const part of keys) {
    if (!current || typeof current === 'string' || Array.isArray(current) || !(part in current)) {
      return key
    }
    current = current[part]
  }

  return typeof current === 'string' ? current : key
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

export function I18nProvider({
  children,
  language,
}: {
  children: React.ReactNode
  language?: AppLanguage
}) {
  const pathname = usePathname()
  const activeLanguage = language ?? getLanguageFromPathname(pathname)

  const value = useMemo<I18nContextValue>(
    () => ({
      language: activeLanguage,
      t: (key: string) => resolveTranslation(activeLanguage, key),
    }),
    [activeLanguage],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  const pathname = usePathname()
  const language = getLanguageFromPathname(pathname)

  if (context) return context

  return {
    language,
    t: (key: string) => resolveTranslation(language, key),
  }
}
