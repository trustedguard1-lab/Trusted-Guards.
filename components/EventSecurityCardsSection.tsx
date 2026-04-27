"use client"

import { useState } from 'react';

import Image from 'next/image';

export const solutionCards = [
  {
    image: '/images/access_control_systems.png',
    titleEn: 'Access Control Systems',
    descEn: 'Efficient management of entry points and personnel verification.',
  },
  {
    image: '/images/incident_management.png',
    titleEn: 'Incident Management',
    descEn: 'Swift coordination and response to any security incidents.',
  },
  {
    image: '/images/security_team_black_v2.png',
    titleEn: 'Advanced Security Team',
    descEn: 'A highly trained specialized team to handle all security threats efficiently and professionally.',
  },
  {
    image: '/images/direct_detection_tools.png',
    titleEn: 'Direct Detection Tools',
    descEn: 'Latest instant detection devices for threats and prohibited materials to ensure a safe environment.',
  },
];

export function EventSecurityCardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section dir="ltr" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f0f3f7] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-6 text-left">
            Integrated Security Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mt-6 text-left">
            Our security operations rely on advanced technology, fully integrated with the central command and control center.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
          {solutionCards.map((card, index) => (
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
              <Image
                src={card.image}
                alt={card.titleEn}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIndex === index
                  ? 'bg-gradient-to-t from-black/90 via-black/45 to-black/15'
                  : 'bg-gradient-to-t from-black/75 via-black/35 to-transparent'
              }`} />

              {/* Default Title */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className={`text-3xl font-bold leading-[1.2] text-white transition-all duration-500 [unicode-bidi:isolate] md:text-2xl lg:text-4xl ${
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
                <div className="w-full translate-y-0 transition-all duration-500 delay-100 text-left">
                  <div className="mb-4 h-1.5 w-16 bg-accent rounded-full" />
                  <h3 className="text-2xl font-black text-white md:text-3xl">
                    {card.titleEn}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                    {card.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
