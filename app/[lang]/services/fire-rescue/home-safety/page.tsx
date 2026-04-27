'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface SafetyItem {
  id: string
  titleEn: string
  descriptionEn: string
  detailsEn: string[]
}

const safetyItems: SafetyItem[] = [
  {
    id: 'emergency-cases',
    titleEn: 'Emergency Cases',
    descriptionEn: 'Learn how to handle home emergency situations',
    detailsEn: [
      'Gather information about the danger and its location before calling emergency services',
      'Evacuate the area immediately and avoid approaching the danger',
      'Call emergency services (119 or 991) immediately and provide accurate information',
      'Stay calm and maintain control of the situation',
      'Avoid any action that could make the situation worse'
    ]
  },
  {
    id: 'fire-alarms',
    titleEn: 'Fire Alarms',
    descriptionEn: 'Fire, smoke and heat alarm devices in homes',
    detailsEn: [
      'Install smoke detectors in hallways and main rooms',
      'Test detection devices monthly to ensure proper operation',
      'Replace device batteries at least every six months',
      'Install fire detection devices in kitchens and high-risk areas',
      'Ensure devices are away from normal sources of smoke and steam'
    ]
  },
  {
    id: 'electrical-safety',
    titleEn: 'Electrical Safety',
    descriptionEn: 'Updated standards for home electrical safety',
    detailsEn: [
      'Use only approved and safe electrical outlets',
      'Avoid using many appliances on the same power outlet',
      'Ensure there are no exposed or damaged wires in the home',
      'Use circuit breakers to protect the family',
      'Have electrical connections periodically inspected by a licensed technician'
    ]
  },
  {
    id: 'inspection',
    titleEn: 'Inspection',
    descriptionEn: 'Learn verification methods and efficiency checks',
    detailsEn: [
      'Inspect your home monthly to check for any hazards',
      'Check for cracks in walls or leaks in pipes',
      'Inspect the condition of doors and windows and ensure locks work properly',
      'Verify that fire extinguishers are within expiry date',
      'Document any issues you find and fix them promptly'
    ]
  },
  {
    id: 'matches-lighters',
    titleEn: 'Matches & Lighters',
    descriptionEn: 'Standards for safe and proper use',
    detailsEn: [
      'Keep matches and lighters away from children',
      'Use only safe and reliable matches and lighters',
      'Never leave sources of flame unattended',
      'Avoid using matches near flammable materials',
      'Ensure all sources of flame are extinguished before leaving the area'
    ]
  },
  {
    id: 'high-buildings',
    titleEn: 'High Buildings',
    descriptionEn: 'Standards for high-risk residential buildings',
    detailsEn: [
      'Ensure a clear and open emergency exit',
      'Train your family on evacuation plan in case of emergency',
      'Know the location of emergency exits and safe evacuation routes',
      'Avoid using elevators in emergencies and use stairs',
      'Keep emergency numbers and ensure all family members know them'
    ]
  },
  {
    id: 'safety-tips',
    titleEn: 'Safety Tips',
    descriptionEn: 'Avoid hazards and follow safety patterns',
    detailsEn: [
      'Keep fire extinguishers in easily accessible locations',
      'Train on how to use fire extinguishers before needed',
      'Avoid storing flammable materials near the home',
      'Keep the kitchen clean and avoid fat buildup',
      'Regularly inspect heating and cooling devices'
    ]
  },
  {
    id: 'medical-oxygen',
    titleEn: 'Medical Oxygen',
    descriptionEn: 'Standards for proper use of medical cylinders',
    detailsEn: [
      'Store oxygen cylinders in a safe and well-ventilated place',
      'Avoid extreme heat and humidity when storing cylinders',
      'Do not expose cylinders to impacts or fires',
      'Follow medical instructions carefully when using oxygen',
      'Regularly check the condition of the cylinder and valve for safety'
    ]
  }
]


export default function HomeSafetyDetailPage() {
  const [expandedId, setExpandedId] = useState<string | null>('emergency-cases')

  return (
    <>
      <Header />
      <main className="ltr" dir="ltr">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-slate-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              At Home
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to handle emergency situations at home correctly and safely
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            {safetyItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {item.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.descriptionEn}
                    </p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {expandedId === item.id && (
                  <div className="px-6 py-6 bg-gray-50 border-t border-gray-300 animate-in fade-in duration-200">
                    <ul className="space-y-3">
                      {item.detailsEn.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 text-left">
                          <span className="text-accent font-bold flex-shrink-0">•</span>
                          <p className="text-gray-700 leading-relaxed">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
