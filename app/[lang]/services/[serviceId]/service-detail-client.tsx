'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface TechCard {
  id: string
  title: string
  image: string
  description: string
}

interface ServiceContent {
  title: string
  longDescription: string
  cards: TechCard[]
}

type ServiceDictionary = Record<'en', Record<string, ServiceContent>>

interface ServiceDetailClientProps {
  params: {
    lang: string
    serviceId: string
  }
}

const serviceData: ServiceDictionary = {
  en: {
    'technology': {
      title: 'Technology & Smart Systems',
      longDescription: 'Technology is the core of modern security environments, driving intelligence, efficiency, and flexibility. By leveraging advanced systems and data-driven solutions, processes are enhanced, situational awareness is improved, and proactive decision-making is supported, ensuring organizations are equipped with reliable, scalable, and future-ready protection.',
      cards: [
        {
          id: 'smart-sensors',
          title: 'Smart Sensors & Analytics',
          image: '/images/tech-smart-sensors.jpg',
          description: 'Smart sensor networks provide precise, real-time data across facilities. Featuring motion sensors, environmental monitors, and IoT devices, these systems transform data through advanced analytics into actionable intelligence.'
        },
        {
          id: 'drone',
          title: 'Security Drones',
          image: '/images/pexels-clickerhappy-539124.jpg',
          description: 'Security drone technology extends coverage beyond traditional ground operations. Equipped with high-resolution imaging, thermal scanning, and live streaming, these drones support rapid incident response and perimeter patrols.'
        },
        {
          id: 'advanced-analytics',
          title: 'Advanced Analytics',
          image: '/images/security_operator_black.png',
          description: 'Advanced analytics form the driving force behind effective security operations, enabling real-time threat detection, behavioral analysis, and predictive insights for enhanced protection.'
        },
        {
          id: 'identity',
          title: 'Identity & Physical Access Management',
          image: '/images/tech-identity-access.jpg',
          description: 'Identity and access management systems provide secure control of facility, asset, and sensitive area access. Smart cards, biometric authentication, and access policies enable efficient monitoring and management.'
        },
        {
          id: 'screening',
          title: 'Inspection & Screening Solutions',
          image: '/images/tech-screening-inspection.jpg',
          description: 'Baggage, personnel, and access point screening solutions detect potential threats before facility entry. Advanced scanning technology and automated detection systems ensure accurate, efficient security processes.'
        },
        {
          id: 'command',
          title: 'Command & Control Solutions',
          image: '/images/tech-command-center.jpg',
          description: 'Centralized monitoring and management of security operations. Custom solutions integrate surveillance, alarm systems, and operational dashboards to enable real-time decision-making.'
        }
      ]
    }
  }
}

export function ServiceDetailClient({ params }: ServiceDetailClientProps) {
  const { serviceId, lang } = params
  const isArabic = lang === 'ar'
  const service = serviceData['en']?.[serviceId]
  const [selectedCard, setSelectedCard] = useState<TechCard | null>(null)

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white ltr" dir="ltr">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Service not found</h1>
          <Link href="/en">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main dir="ltr" className="bg-slate-50 ltr">
      {/* Hero Section with Drone Image */}
      <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/pexels-clickerhappy-539124.jpg"
          alt="Security Drone"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-slate-900/80"></div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Advanced Technology for Superior Protection
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The Power of Security Technology
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 6 Feature Cards Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our Key Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.cards?.map((card: TechCard) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {card.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-secondary font-semibold group-hover:gap-2 gap-1 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 w-full">
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                className="object-cover"
                quality={90}
              />
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                aria-label="Close dialog"
                title={isArabic ? 'إغلاق النافذة' : 'Close dialog'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                {selectedCard.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {selectedCard.description}
              </p>
              <Link href={`/${lang}/contact`}>
                <Button size="lg" className="bg-primary hover:bg-secondary w-full md:w-auto gap-2">
                  {isArabic ? 'تواصل معنا الآن' : 'Contact Us Now'}
                  <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {isArabic ? 'جاهز لتحسين الأمان؟' : 'Ready to Enhance Your Security?'}
          </h2>
          <p className="text-lg text-accent mb-10 max-w-2xl mx-auto leading-relaxed">
            {isArabic
              ? 'اتصل بنا اليوم للحصول على استشارة متخصصة حول احتياجات الأمان والتكنولوجيا الخاصة بك'
              : 'Contact us today for a specialized consultation about your security and technology needs'}
          </p>
          <Link href={`/${lang}/contact`} className="inline-block">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 hover:text-secondary gap-2 font-semibold text-base px-8 py-6 transition-all duration-300">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
