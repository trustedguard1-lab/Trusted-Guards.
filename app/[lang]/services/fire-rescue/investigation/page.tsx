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
    id: 'investigation-process',
    titleEn: 'Fire Investigation Process',
    itemsEn: [
      'Gather initial information about the fire and surrounding circumstances',
      'Carefully examine the fire scene to find the source',
      'Collect physical evidence and samples from the fire site',
      'Document all observations and evidence with photos and video',
      'Conduct interviews with witnesses and affected parties'
    ]
  },
  {
    id: 'cause-determination',
    titleEn: 'Cause Determination',
    itemsEn: [
      'Determine whether the fire was accidental, intentional, or undetermined',
      'Analyze fire path and spread patterns',
      'Study chemical and physical evidence',
      'Use computer models to trace fire development',
      'Consult with specialized experts when needed'
    ]
  },
  {
    id: 'documentation',
    titleEn: 'Documentation and Reports',
    itemsEn: [
      'Create detailed investigation and findings reports',
      'Document collected and stored evidence and samples',
      'Record all interviews and information',
      'Include site diagrams and maps',
      'Maintain records securely and confidentially'
    ]
  },
  {
    id: 'prevention-recommendations',
    titleEn: 'Prevention Recommendations',
    itemsEn: [
      'Provide recommendations to prevent similar fires in the future',
      'Identify gaps in security and safety systems',
      'Propose improvements to infrastructure and processes',
      'Develop new safety and prevention procedures',
      'Share lessons learned with authorities and the public'
    ]
  },
  {
    id: 'legal-procedures',
    titleEn: 'Legal Procedures',
    itemsEn: [
      'Submit reports to competent judicial authorities when necessary',
      'Provide testimony and evidence to courts',
      'Assist in criminal proceedings if required',
      'Maintain confidentiality and compliance with applicable laws',
      'Cooperate with criminal investigation and police teams'
    ]
  }
]


export default function InvestigationPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Page Header with Share Button */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary flex-1">
                Investigation
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
