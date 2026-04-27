'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RelatedCardsSection } from '@/components/RelatedCardsSection'
import { Share2, FileText } from 'lucide-react'

interface SubSection {
  id: string
  titleEn: string
  itemsEn: string[]
}

const sections: SubSection[] = [
  {
    id: 'if-cannot-escape',
    titleEn: 'If You Cannot Escape',
    itemsEn: [
      'Gather everyone in one room and take a mobile phone if possible.',
      'Use clothes, pillows, or towels to block gaps around the door to prevent smoke.',
      'Open the window and call for help or have someone call 999 for fire service.',
      'Stay near an open window to get fresh air and be visible to firefighters.'
    ]
  },
  {
    id: 'escape-window',
    titleEn: 'Escape Through the Window',
    itemsEn: [
      'Consider this option only if there is no other escape route and you are on the first floor.',
      'Never jump unless it is safe.',
      'If possible, place pillows or blankets under the window and lower yourself carefully.',
      'If there are two adults, one goes down first to catch the children as they are lowered.',
      'Pass them slowly while extending your arms fully before releasing them.'
    ]
  },
  {
    id: 'burning-clothes',
    titleEn: 'If Clothes Catch Fire',
    itemsEn: [
      'If your clothes catch fire, stop immediately, lie on the ground, and roll until the fire is extinguished.',
      'If another person\'s clothes catch fire, cover the fire with a blanket, rug, or thick coat.'
    ]
  },
  {
    id: 'high-rise-escape',
    titleEn: 'Escape from High-Rise Building Fire',
    itemsEn: [
      'Most high-rise residential buildings are designed with a "stay in place" policy, meaning apartments are built to prevent fire spread between units. As a result, fire rarely spreads from one apartment to another.',
      'If there is a fire in the building but not in your apartment, stay inside and keep your front door closed unless:',
      'You are affected by heat, smoke, or fire.',
      'Fire services or police ask you to evacuate.'
    ]
  },
  {
    id: 'trapped-by-fire',
    titleEn: 'Trapped by Fire',
    itemsEn: [
      'It is unusual to be trapped by fire. However, if you find yourself in this situation:',
      'Move to a "safe room" with a window and phone, ensuring everyone is together.',
      'Call firefighting and rescue services and use sheets or towels to seal gaps under the door to prevent smoke entry.',
      'Open a window for fresh air and if safe, wave sheets to signal for help.'
    ]
  }
]


export default function EmergencyCasesPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Emergency Cases
              </h1>
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
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
                    {section.titleEn}
                  </h2>
                </div>

                {/* Section Content */}
                <ul className="space-y-4">
                  {section.itemsEn.map((item, idx) => (
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
              titleEn: 'Fire Alarm Devices',
              descriptionEn: 'Smoke, heat and alarm detection devices for home safety',
              hrefEn: '/en/services/fire-rescue/fire-alarms'
            },
            {
              titleEn: 'Electrical Safety',
              descriptionEn: 'Tips and guidelines to identify electrical hazards and prevent fires',
              hrefEn: '/en/services/fire-rescue/electrical-safety'
            },
            {
              titleEn: 'Investigation',
              descriptionEn: 'Accurate investigation standards and efficiency in inspection',
              hrefEn: '/en/services/fire-rescue/investigation'
            },
            {
              titleEn: 'Matches & Lighters',
              descriptionEn: 'Safe and proper usage standards for lighters and matches',
              hrefEn: '/en/services/fire-rescue/matches-lighters'
            },
            {
              titleEn: 'High Buildings',
              descriptionEn: 'Safety and evacuation standards for high-rise buildings',
              hrefEn: '/en/services/fire-rescue/tall-buildings'
            },
            {
              titleEn: 'General Safety',
              descriptionEn: 'Avoid hazards and follow home safety patterns',
              hrefEn: '/en/services/fire-rescue/general-safety'
            },
            {
              titleEn: 'Oxygen & Medical',
              descriptionEn: 'Standards for proper use of medical cylinders and oxygen',
              hrefEn: '/en/services/fire-rescue/oxygen-medical'
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
