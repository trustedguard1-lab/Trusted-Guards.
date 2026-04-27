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
    id: 'fire-sources-risks',
    titleEn: 'Risks of Matches and Lighters',
    itemsEn: [
      'Matches and lighters are among the most common sources of house fires',
      'Can cause accidental fires due to negligence or carelessness',
      'Special danger to children who may use them unintentionally',
      'May cause rapidly spreading fires if near flammable materials',
      'Difficulty controlling fire once ignited'
    ]
  },
  {
    id: 'safe-storage',
    titleEn: 'Safe Storage',
    itemsEn: [
      'Keep matches and lighters away from children',
      'Store in airtight container in cool, dry place',
      'Do not place near flammable materials',
      'Use safety containers with child locks',
      'Apply warning labels to containers'
    ]
  },
  {
    id: 'responsible-use',
    titleEn: 'Responsible Use',
    itemsEn: [
      'Use matches and lighters only when truly needed',
      'Ensure all flames are completely extinguished after use',
      'Never leave fire unattended even for a moment',
      'Do not use matches in windy areas',
      'Avoid using lighters or matches around children'
    ]
  },
  {
    id: 'child-safety',
    titleEn: 'Child Safety',
    itemsEn: [
      'Teach children that matches and lighters are dangerous and forbidden',
      'Closely supervise children in the home',
      'Explain fire hazards in age-appropriate way',
      'Install safe access points away from children',
      'Keep stove lighters completely away from children'
    ]
  },
  {
    id: 'emergency-procedure',
    titleEn: 'In Case of Accidental Fire',
    itemsEn: [
      'Leave the area immediately and seek help',
      'Call emergency number 999 from a safe location',
      'Warn others and help with evacuation',
      'Only attempt to extinguish if fire is very small',
      'Meet outside building in safe location and wait for help'
    ]
  }
]


export default function MatchesLightersPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Matches and Lighters
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
