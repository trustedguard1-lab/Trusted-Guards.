'use client'

import Link from 'next/link'

interface SafetyItem {
  id: string
  titleEn: string
  descriptionEn: string
}

const safetyItems: SafetyItem[] = [
  {
    id: 'emergency-cases',
    titleEn: 'Emergency Cases',
    descriptionEn: 'Learn how to handle home emergency situations',
  },
  {
    id: 'fire-alarms',
    titleEn: 'Fire Alarms',
    descriptionEn: 'Fire, smoke and heat alarm devices in homes',
  },
  {
    id: 'electrical-safety',
    titleEn: 'Electrical Safety',
    descriptionEn: 'Updated standards for home electrical safety',
  },
  {
    id: 'inspection',
    titleEn: 'Inspection',
    descriptionEn: 'Learn verification methods and efficiency checks',
  },
  {
    id: 'matches-lighters',
    titleEn: 'Matches & Lighters',
    descriptionEn: 'Standards for safe and proper use',
  },
  {
    id: 'high-buildings',
    titleEn: 'High Buildings',
    descriptionEn: 'Standards for high-risk residential buildings',
  },
  {
    id: 'safety-tips',
    titleEn: 'Safety Tips',
    descriptionEn: 'Avoid hazards and follow safety patterns',
  },
  {
    id: 'medical-oxygen',
    titleEn: 'Medical Oxygen',
    descriptionEn: 'Standards for proper use of medical cylinders',
  }
]

export function HomeSafetyCardsSection() {
  const lang = 'en'

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-left">
          At Home
        </h2>
        <p className="text-gray-600 text-left">
          Learn how to handle home emergencies correctly and safely
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyItems.map((item) => {
          let href = `/${lang}/services/fire-rescue/home-safety#${item.id}`
          
          if (item.id === 'emergency-cases') {
            href = `/${lang}/services/fire-rescue/emergency-cases`
          } else if (item.id === 'fire-alarms') {
            href = `/${lang}/services/fire-rescue/fire-alarms`
          }
          
          return (
            <Link
              key={item.id}
              href={href}
            >
              <div className="group relative border border-gray-300 rounded-lg p-6 hover:shadow-2xl hover:border-secondary hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden bg-white h-full text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.titleEn}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {item.descriptionEn}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
