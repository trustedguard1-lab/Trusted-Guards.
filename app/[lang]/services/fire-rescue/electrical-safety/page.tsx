'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RelatedCardsSection } from '@/components/RelatedCardsSection'
import { Share2, FileText } from 'lucide-react'

interface SubSection {
  id: string
  title: string
  items: string[]
}

const sections: SubSection[] = [
  {
    id: 'electrical-hazards',
    title: 'Electrical Hazards',
    items: [
      'Electric shocks from damaged devices or exposed wires',
      'Fires resulting from overloads on wires and circuits',
      'Burns from direct contact with electrical current',
      'Explosions caused by electrical arcs',
      'Brain and nerve damage from prolonged electrical exposure'
    ]
  },
  {
    id: 'safe-practices',
    title: 'Safe Electrical Practices',
    items: [
      'Regularly inspect devices and wires for damage',
      'Do not use electrical devices near water',
      'Avoid overloading electrical outlets',
      'Use multi-outlet adapters with overload protection',
      'Maintain safe distance from external power lines'
    ]
  },
  {
    id: 'home-safety',
    title: 'Home Electrical Safety',
    items: [
      'Ensure electrical installations comply with national standards',
      'Use Ground Fault Circuit Interrupters (GFCI) in kitchens and bathrooms',
      'Install automatic safety switches for emergency disconnection',
      'Do not attempt wire repairs yourself, hire a professional electrician',
      'Install covers for unused electrical outlets'
    ]
  },
  {
    id: 'emergency-response',
    title: 'Electrical Emergency Response',
    items: [
      'In case of electrical shock, disconnect power immediately',
      'If you cannot reach the switch, use a non-conductive object to push the device away',
      'Request first aid for the injured person immediately',
      'Do not touch a person suffering from electrical shock who may still be connected',
      'Call emergency services at 999'
    ]
  },
  {
    id: 'professional-help',
    title: 'Seeking Professional Help',
    items: [
      'Hire a licensed electrician for any electrical installations',
      'Use professionals certified by competent authorities',
      'Obtain electrical inspection certificates before use',
      'Perform regular system maintenance annually',
      'Document all electrical work and inspections'
    ]
  }
]


export default function ElectricalSafetyPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'Electrical Safety',
      text: 'View Trusted Guards electrical safety guidance.',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(window.location.href)
      window.alert('Page link copied.')
    } catch {
      window.alert('Unable to share the page right now.')
    }
  }

  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Electrical Safety
              </h1>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share electrical safety page"
                title="Share page"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <Share2 size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white border border-gray-300 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
              >
                {/* Section Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <FileText size={28} className="text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-primary">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-accent font-bold flex-shrink-0 text-lg">•</span>
                      <p className="text-gray-700 leading-relaxed text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Related Cards Section */}
        <RelatedCardsSection
          titleEn="Related Topics"
          introEn="Most residential fire incidents occur by accident. Learn how to prevent them and ensure the safety of all family members."
          cards={[
            {
              titleEn: 'Emergency Cases',
              descriptionEn: 'Learn how to escape a fire quickly and safely in emergencies',
              hrefEn: '/en/services/fire-rescue/emergency-cases'
            },
            {
              titleEn: 'Fire Alarm Devices',
              descriptionEn: 'Smoke, heat and alarm detection devices for home safety',
              hrefEn: '/en/services/fire-rescue/fire-alarms'
            },
            {
              titleEn: 'Investigation',
              descriptionEn: 'Accurate investigation standards and efficiency in inspection',
              hrefEn: '/en/services/fire-rescue/investigation'
            },
            {
              titleEn: 'Matches & Lighters',
              descriptionEn: 'Safe and proper usage tips for candles and oil lamps',
              hrefEn: '/en/services/fire-rescue/matches-lighters'
            },
            {
              titleEn: 'High Buildings',
              descriptionEn: 'Fire safety standards for high-rise building residents',
              hrefEn: '/en/services/fire-rescue/tall-buildings'
            },
            {
              titleEn: 'General Safety',
              descriptionEn: 'Avoid hazards and follow home safety patterns',
              hrefEn: '/en/services/fire-rescue/general-safety'
            },
            {
              titleEn: 'Oxygen & Medical',
              descriptionEn: 'Safety tips when using medical oxygen at home',
              hrefEn: '/en/services/fire-rescue/oxygen-medical'
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
