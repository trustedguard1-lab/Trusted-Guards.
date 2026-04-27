import Head from 'next/head'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { ResizeObserverErrorGuard } from '@/components/ResizeObserverErrorGuard'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-sans'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a3a52',
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: 'Trusted Guards - Integrated Security Solutions',
  description: 'Trusted Guards delivers innovative, integrated security solutions to protect people, property, and data with confidence.',
  keywords: [
    'security',
    'security solutions',
    'security services',
    'surveillance',
    'security systems',
    'private security',
    'event security',
    'VIP protection',
    'guard services',
    'property protection',
    'risk management',
    'access control',
    'emergency response',
    'fire safety',
    'maritime security',
    'aviation security',
    'integrated security',
    'trusted guards',
    'professional guards',
    '24/7 security',
    'security consulting',
    'loss prevention',
    'asset protection',
    'security patrol',
    'security company',
    'safety solutions',
    'security technology',
    'monitoring services',
    'security experts',
    'security agency'
  ],
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth" className={inter.variable}>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta charSet="utf-8" />
        <Script id="resize-observer-error-guard" strategy="beforeInteractive">
          {`
            (function() {
              var messages = {
                'ResizeObserver loop completed with undelivered notifications.': true,
                'ResizeObserver loop limit exceeded': true,
              };

              function shouldIgnore(message) {
                return !!(message && messages[message]);
              }

              window.addEventListener('error', function(event) {
                if (!shouldIgnore(event.message)) {
                  return;
                }

                event.stopImmediatePropagation();
                event.preventDefault();
              }, true);

              window.onerror = function(message) {
                if (shouldIgnore(message)) {
                  return true;
                }

                return false;
              };
            })();
          `}
        </Script>
      </Head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ResizeObserverErrorGuard />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
