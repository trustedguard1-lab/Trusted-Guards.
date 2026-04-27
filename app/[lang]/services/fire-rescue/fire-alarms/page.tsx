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
    id: 'fire-alarm-types',
    titleEn: 'Types of Fire Alarm Systems',
    itemsEn: [
      'Smoke Detectors: Detect smoke particles and alert occupants nearby',
      'Heat Detectors: Activate when temperature rises suddenly',
      'Gas Detectors: Detect dangerous combustion gases',
      'Manual Pull Stations: Can be activated manually upon fire detection'
    ]
  },
  {
    id: 'installation-placement',
    titleEn: 'Installation and Placement',
    itemsEn: [
      'Install detectors in hallways and common areas',
      'Place devices on ceilings or walls according to standards',
      'Place heat detectors in kitchens and warehouses',
      'Install smoke detectors outside homes and offices',
      'Ensure adequate spacing between devices for effective coverage'
    ]
  },
  {
    id: 'maintenance-testing',
    titleEn: 'Maintenance and Testing',
    itemsEn: [
      'Test devices monthly by pressing the test button',
      'Replace batteries annually or when hearing alert sounds',
      'Clean devices from dust and debris every three months',
      'Inspect devices by specialists annually',
      'Ensure fire detectors are not blocked by any materials'
    ]
  },
  {
    id: 'response-procedures',
    titleEn: 'Response Procedures',
    itemsEn: [
      'Upon hearing the alarm, leave the premises immediately if possible',
      'Call emergency number 999 from a safe location',
      'Do not attempt to extinguish the fire yourself unless it is small and safe',
      'Assist others with evacuation if needed',
      'Meet others at a designated point outside the building'
    ]
  },
  {
    id: 'false-alarms',
    titleEn: 'False Alarms',
    itemsEn: [
      'Smoke from cooking may trigger the device, so ventilate the kitchen well',
      'Dust and insects may cause false alarms',
      'Avoid placing devices near steam sources',
      'Regular maintenance reduces false alarms',
      'In case of false alarm, reset the device after ensuring safety'
    ]
  }
]


export default function FireAlarmsPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Fire Alarm Devices
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
