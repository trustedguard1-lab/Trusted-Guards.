import { Language } from '@/i18n/config';
import enTranslations from '@/i18n/en.json';

const translations = {
  en: enTranslations,
};

export function getTranslations(language: Language) {
  return translations[language] || translations.en;
}

export function isValidLanguage(lang: string): lang is Language {
  return lang === 'en';
}

export function getLanguageFromPath(pathname: string): Language {
  const match = pathname.match(/^\/(en)(\/|$)/);
  return match && isValidLanguage(match[1] as Language) ? (match[1] as Language) : 'en';
}
