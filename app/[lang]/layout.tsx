import { HtmlSetup } from '@/components/HtmlSetup'
import '../globals.css'

interface LanguageLayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: string
  }>
}

export const generateStaticParams = async () => {
  return [
    { lang: 'en' }
  ]
}

export default async function LanguageLayout({ children, params }: LanguageLayoutProps) {
  return (
    <>
      <HtmlSetup />
      {children}
    </>
  )
}
