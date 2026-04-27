import { NextRequest, NextResponse } from 'next/server';

const VALID_LANGUAGES = new Set(['en']);
const DEFAULT_LANGUAGE = 'en';

function isValidLanguage(lang: unknown): lang is 'en' {
  return typeof lang === 'string' && VALID_LANGUAGES.has(lang);
}

const publicAssetPatterns = [
  /^\/api\//,
  /^\/images\//,
  /^\/videos\//,
  /^\/public\//,
  /^\/favicon\.ico$/,
  /^\/sitemap\.xml$/,
  /^\/robots\.txt$/,
  /\.(jpg|jpeg|png|gif|webp|svg|ico)$/,
  /\.(css|js|woff2|ttf|eot)$/,
];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (/^\/_next\//.test(pathname) || publicAssetPatterns.some((pattern) => pattern.test(pathname))) {
    return NextResponse.next();
  }


  const match = pathname.match(/^\/(en)(\/|$)/);
  if (match && isValidLanguage(match[1])) {
    return NextResponse.next();
  }


  let language: 'en' = DEFAULT_LANGUAGE;

  // Always use English
  language = 'en';

  const newPath = `/${language}${pathname}`;
  const response = NextResponse.redirect(new URL(newPath, request.url));

  response.cookies.set({
    name: 'language',
    value: language,
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api).*)',
  ],
};