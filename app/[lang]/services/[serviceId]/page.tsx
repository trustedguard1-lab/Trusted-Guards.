import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceDetailClient } from './service-detail-client'

interface ServicePageProps {
  params: Promise<{
    lang: string
    serviceId: string
  }>
}

const serviceIds = [
  'technology',
  'fire-rescue',
  'facilities-management',
  'marine',
  'vip-protection',
  'events',
  'command-center'
]

export function generateStaticParams() {
  const langs = ['en']
  const params = []
  
  for (const lang of langs) {
    for (const serviceId of serviceIds) {
      params.push({ lang, serviceId })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params
  
  const titles: Record<string, Record<string, string>> = {
    en: {
      'technology': 'Technology & Smart Systems',
      'fire-rescue': 'Fire Fighting & Rescue Services',
      'facilities-management': 'Facilities Management & Maintenance',
      'marine': 'Marine & Coastal Protection',
      'vip-protection': 'VIP & Family Protection',
      'events': 'Event & Conference Security',
      'command-center': 'Command & Control Center'
    }
  }
  
  const title = titles.en[resolvedParams.serviceId] || 'Service'
  
  return {
    title: `${title} - Trusted Guards`,
    description: 'Learn more about our specialized security services and advanced solutions'
  }
}

export default async function Page({ params }: ServicePageProps) {
  const resolvedParams = await params
  
  return (
    <>
      <Header />
      <ServiceDetailClient params={resolvedParams} />
      <Footer />
    </>
  )
}
