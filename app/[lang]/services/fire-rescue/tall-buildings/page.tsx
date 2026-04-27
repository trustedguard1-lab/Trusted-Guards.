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
    id: 'highrise-challenges',
    titleEn: 'High-Rise Fire Challenges',
    itemsEn: [
      'Difficulty evacuating large number of occupants quickly',
      'Difficulty for fire teams to reach upper floors rapidly',
      'Difficulty controlling smoke and heat in high-rise buildings',
      'Fear and panic can lead to bottlenecks and accidents',
      'Water pressure and pipe systems affected on upper floors'
    ]
  },
  {
    id: 'building-systems',
    titleEn: 'Safety Systems in High-Rise Buildings',
    itemsEn: [
      'Advanced fire alarm systems connected to fire stations',
      'Automatic fire suppression and sprinkler systems on all floors',
      'Emergency elevators for rapid rescue and evacuation',
      'Smoke control and ventilation systems',
      'Designated safe assembly points on each floor'
    ]
  },
  {
    id: 'evacuation-procedures',
    titleEn: 'Evacuation Procedures',
    itemsEn: [
      'Orderly evacuation in stages starting from lower floors',
      'Use emergency stairs instead of elevators',
      'Follow marked and lit corridors in the building',
      'Do not use elevators even in emergencies',
      'Wait outside until authorities confirm safety'
    ]
  },
  {
    id: 'stay-put-policy',
    titleEn: 'Stay in Place Policy',
    itemsEn: [
      'Fires in high-rise buildings are often confined to one unit',
      'If not in fire area, stay in your apartment with door closed',
      'Seal gaps around door to prevent smoke entry',
      'Open window for fresh air and call for help',
      'Wait for instructions from emergency services or police'
    ]
  },
  {
    id: 'preparation-drills',
    titleEn: 'Training and Preparation',
    itemsEn: [
      'Participate in regular evacuation drills in building',
      'Familiarize yourself with emergency exits and evacuation routes',
      'Review emergency plans and procedures',
      'Ensure children and staff know emergency procedures',
      'Keep emergency bags easily accessible'
    ]
  }
]


export default function TallBuildingsPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Tall Buildings
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
              titleEn: 'Electrical Safety',
              descriptionEn: 'Effective tips and guidelines to identify potential electrical hazards',
              hrefEn: '/en/services/fire-rescue/electrical-safety'
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
