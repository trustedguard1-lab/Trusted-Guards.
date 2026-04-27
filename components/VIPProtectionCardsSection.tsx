'use client'

import Image from 'next/image'
import { useState } from 'react'

interface DetailItem {
  textEn: string
}

interface ServiceCard {
  image: string
  titleEn: string
  descriptionEn: string
  detailsEn: DetailItem[]
}

const serviceCards: ServiceCard[] = [
  {
    image: '/images/new_person_security.png',
    titleEn: 'Personal Security',
    descriptionEn: 'Providing personal protection for individuals and groups, including residential security and travel security, ensuring safety at all times.',
    detailsEn: [
      { textEn: 'Round-the-clock personal protection for individuals and groups.' },
      { textEn: 'Comprehensive residential security ensuring protection of premises and homes.' },
      { textEn: 'Secure travel and transportation with the highest safety standards.' },
      { textEn: 'Specialized team trained in the latest protection techniques.' },
      { textEn: 'Full security coordination with relevant authorities when needed.' }
    ]
  },
  {
    image: '/images/cleaned_security_hands.png',
    titleEn: 'Risk Assessment & Planning',
    descriptionEn: 'Conducting threat analysis, assessing vulnerabilities, and reviewing security procedures to identify risks and establish effective preventive measures.',
    detailsEn: [
      { textEn: 'Comprehensive analysis of potential threats and security risks.' },
      { textEn: 'Assessment of vulnerabilities in the surrounding environment and facilities.' },
      { textEn: 'Development of customized security plans based on assessment results.' },
      { textEn: 'Regular review and continuous update of security procedures.' },
      { textEn: 'Detailed threat reports and security recommendations.' }
    ]
  },
  {
    image: '/images/distinct_new_person_in_car.png',
    titleEn: 'Delegation Protection',
    descriptionEn: 'Providing escort and secure protection services for individuals and groups during official visits or organized activities, while maintaining confidentiality and privacy.',
    detailsEn: [
      { textEn: 'Comprehensive security escort for delegations during official visits.' },
      { textEn: 'Efficient convoy and inter-site transportation security.' },
      { textEn: 'Pre-coordination with relevant authorities to ensure smooth operations.' },
      { textEn: 'Maintaining the highest levels of confidentiality and privacy.' },
      { textEn: 'Rapid response team ready for any emergency during the mission.' }
    ]
  },
  {
    image: '/images/security_team_cars.png',
    titleEn: 'Specialized Services',
    descriptionEn: 'Offering emergency planning, evacuation support, and personal security awareness training to enhance readiness and response capabilities.',
    detailsEn: [
      { textEn: 'Comprehensive emergency and crisis scenario planning.' },
      { textEn: 'Evacuation support and ensuring personnel safety.' },
      { textEn: 'Specialized security awareness and self-protection training.' },
      { textEn: 'Custom security protocols tailored for each client.' },
      { textEn: 'Advanced security consultations to enhance readiness.' }
    ]
  }
]

export function VIPProtectionCardsSection() {
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
            We provide comprehensive personal protection services with the highest standards of professionalism and confidentiality to ensure our clients' safety and security
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
                <h3 dir="auto" className={`text-3xl font-bold leading-[1.2] text-white transition-all duration-500 [unicode-bidi:isolate] md:text-2xl lg:text-4xl text-left ${
                  hoveredIndex === index ? 'translate-y-6 opacity-0 lg:text-3xl' : 'translate-y-0 opacity-100'
                }`}>
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
                  <h3 dir="auto" className="text-3xl font-bold leading-tight text-white [unicode-bidi:isolate] md:text-4xl lg:text-5xl">
                    {card.titleEn}
                  </h3>
                  <div className="mt-5 h-px w-24 bg-white/60" />
                  <p dir="auto" className="mt-5 text-base leading-8 text-white/95 [unicode-bidi:isolate] md:text-lg lg:max-w-2xl text-left">
                    {card.descriptionEn}
                  </p>
                  <ul className={`mt-5 space-y-2 text-sm leading-7 text-white/80 md:text-base ${hoveredIndex === index ? 'block' : 'hidden'} pl-5 text-left list-disc` }>
                    {card.detailsEn.slice(0, 3).map((detail, detailIndex) => (
                      <li key={detailIndex} dir="auto" className="[unicode-bidi:isolate]">
                        {detail.textEn}
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
