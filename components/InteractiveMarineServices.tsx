'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Service {
  id: number
  title: string
  description: string
  image: string
}

interface InteractiveMarineServicesProps {
  services: Service[]
}

export function InteractiveMarineServices({ 
  services
}: InteractiveMarineServicesProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>

        {/* Gallery Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {services.map((service) => {
            const isHovered = hoveredId === service.id

            return (
              <div
                key={service.id}
                className="relative h-80 md:h-96 rounded-lg overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className={`relative w-full h-full transition-transform duration-500 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Dark Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isHovered 
                    ? 'bg-gradient-to-t from-black/90 via-black/60 to-black/30' 
                    : 'bg-gradient-to-t from-black/75 via-black/40 to-transparent'
                }`} />

                {/* Additional hover layer */}
                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Text Content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 text-left`}>
                  {/* Title */}
                  <h3 className={`text-2xl md:text-3xl font-bold text-white mb-3 transition-all duration-500 ${
                    isHovered 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-90'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm md:text-base text-gray-100 leading-relaxed transition-all duration-500 ${
                    isHovered
                      ? 'opacity-100 translate-y-0 max-h-40'
                      : 'opacity-0 translate-y-2 max-h-0'
                  } overflow-hidden`}>
                    {service.description}
                  </p>
                </div>

                {/* Subtle border on hover */}
                <div className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-500 pointer-events-none ${
                  isHovered 
                    ? 'border-accent opacity-100' 
                    : 'border-transparent opacity-0'
                }`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
