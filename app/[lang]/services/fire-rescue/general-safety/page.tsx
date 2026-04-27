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
    id: 'fire-prevention',
    title: 'Fire Prevention',
    items: [
      'Avoid overloading electrical outlets and wires',
      'Keep flammable items away from heat sources',
      'Regularly clean vents and ducts to prevent debris buildup',
      'Inspect and maintain household appliances regularly',
      'Use safe candles and place them away from flammable items'
    ]
  },
  {
    id: 'home-safety-kit',
    title: 'Home Safety Kit',
    items: [
      'Smoke detectors on all levels of the home',
      'Fire extinguishers in kitchen and other high-risk areas',
      'Backup batteries for smoke detectors',
      'Clear evacuation plan from home',
      'Designated safe meeting place outside home'
    ]
  },
  {
    id: 'workplace-safety',
    title: 'Workplace Safety',
    items: [
      'Know all emergency exits and safe routes',
      'Participate in regular evacuation drills',
      'Comply with established safety and security rules',
      'Report any potential hazards immediately',
      'Keep fire extinguishers in known, easily accessible locations'
    ]
  },
  {
    id: 'vehicle-safety',
    title: 'Vehicle Safety',
    items: [
      'Regularly inspect vehicle electrical system',
      'Do not store flammable materials in vehicle',
      'Ensure vehicle fire extinguishers work properly',
      'Avoid smoking while driving',
      'Regularly check fuel, oil, and brakes'
    ]
  },
  {
    id: 'emergency-contacts',
    title: 'Emergency Contacts',
    items: [
      'Save emergency number 999 in your phone for easy access',
      'Know your address clearly to inform emergency services',
      'Save numbers of local doctors and hospitals',
      'Share emergency contact information with family',
      'Keep emergency contact list in a visible place'
    ]
  }
]


export default function GeneralSafetyPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                General Safety
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
               titleEn: 'High Buildings',
               descriptionEn: 'Fire safety standards for high-rise building residents',
               hrefEn: '/en/services/fire-rescue/tall-buildings'
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
