'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ServiceCard {
  image: string
  titleEn: string
  descriptionEn: string
  detailsEn: string[]
}

const serviceCards: ServiceCard[] = [
  {
    image: '/images/القوى العاملة والمعدات.png',
    titleEn: 'Workforce & Equipment',
    descriptionEn: 'Providing trained personnel in fire fighting and rescue operations along with essential equipment including PPE, SCBA, and advanced safety tools for effective rescue and fire containment.',
    detailsEn: [
      'Providing trained personnel for fire fighting and rescue operations.',
      'Personal Protective Equipment (PPE) to protect personnel from injury risks.',
      'Self-Contained Breathing Apparatus (SCBA) for safe operations in hazardous environments.',
      'Advanced safety tools for effective rescue and fire containment.',
      'Supplying essential equipment to improve operational readiness.'
    ]
  },
  {
    image: '/images/توفير وصيانة سيارات الاطفاء والمعدات.png',
    titleEn: 'Fire Trucks & Equipment Maintenance',
    descriptionEn: 'Providing advanced fire trucks and rescue tools that meet international safety standards, with regular inspection and maintenance to ensure reliability.',
    detailsEn: [
      'Providing advanced fire trucks that meet international safety standards.',
      'Equipping teams with reliable rescue tools and operational equipment.',
      'Regular inspection and maintenance to ensure readiness and continuity.',
      'Improving equipment and vehicle efficiency to support rapid response.',
      'Ensuring vehicles and tools operate to the highest safety requirements.'
    ]
  },
  {
    image: '/images/فريق الانقاذ ومكافحة الحرائق المتخصصة.png',
    titleEn: 'Specialized Teams',
    descriptionEn: 'Deploying and operating trained fire fighting and rescue teams, available around the clock to respond to emergencies with precision and efficiency.',
    detailsEn: [
      'Deployment and operation of trained fire fighting and rescue teams.',
      'Round-the-clock availability to handle emergencies with precision and efficiency.',
      'Effective field coordination to support rapid response.',
      'Operational readiness for different emergency scenarios.',
      'Improved intervention efficiency and reduced incident impact.'
    ]
  },
  {
    image: '/images/تطوير وتشغيل المحطات (2).png',
    titleEn: 'Station Development & Operations',
    descriptionEn: 'Building rescue and fire stations designed for defined operational needs, managing station operations including staff training and equipment maintenance, and ensuring full emergency readiness.',
    detailsEn: [
      'Building rescue and fire stations designed according to defined operational needs.',
      'Managing fire station operations including staff training and equipment maintenance.',
      'Ensuring complete operational readiness for emergency response.',
      'Organizing station workflows around site requirements and service scope.',
      'Improving operational and maintenance efficiency for higher reliability.'
    ]
  }
]

export function FireRescueCardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section dir="ltr" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-left">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full" />
          <p className="text-gray-700 text-lg max-w-3xl mt-6 text-left">
            We provide comprehensive fire fighting and rescue services with the highest standards of efficiency, safety and rapid response
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              dir="ltr"
              className={`relative h-96 overflow-hidden rounded-xl group shadow-lg transition-all duration-700 ease-out md:h-[450px] lg:h-[520px] ${
                hoveredIndex === null
                  ? 'lg:flex-[1]' : hoveredIndex === index
                    ? 'lg:flex-[2.2]' : 'lg:flex-[0.72]'
              } ${
                index > 0 ? 'lg:ms-3' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Background */}
              <Image
                src={card.image}
                alt={card.titleEn}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Base Overlay - Adjusts on hover */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'bg-gradient-to-t from-black/90 via-black/45 to-black/15' 
                  : 'bg-gradient-to-t from-black/75 via-black/35 to-transparent'
              }`} />

              {/* Default Title */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className={`text-3xl font-bold leading-[1.2] text-white transition-all duration-500 md:text-2xl lg:text-4xl ${
                  hoveredIndex === index ? 'translate-y-6 opacity-0 lg:text-3xl' : 'translate-y-0 opacity-100'
                } text-left`}>
                  {card.titleEn}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`absolute inset-0 flex items-end p-6 md:p-8 lg:p-10 transition-all duration-500 ${
                hoveredIndex === index
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'
              }`}>
                <div className="w-full max-w-3xl text-left">
                  <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                    {card.titleEn}
                  </h3>
                  <div className="mt-5 h-px w-24 bg-white/60" />
                  <p className="mt-5 text-base leading-8 text-white/95 md:text-lg lg:max-w-2xl text-left">
                    {card.descriptionEn}
                  </p>
                  <ul className={`mt-5 space-y-2 text-sm leading-7 text-white/80 md:text-base ${hoveredIndex === index ? 'block' : 'hidden'} pl-5 text-left list-disc` }>
                    {card.detailsEn.slice(0, 3).map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-left">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative accent border on hover */}
              <div className={`absolute inset-0 border-3 rounded-xl transition-all duration-500 pointer-events-none ${
                hoveredIndex === index 
                  ? 'border-white/40 shadow-inner shadow-white/10' 
                  : 'border-transparent'
              }`} />

              {/* Animated shine effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
