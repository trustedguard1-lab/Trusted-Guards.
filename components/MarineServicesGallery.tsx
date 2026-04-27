'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Service {
  id: number
  title: string
  description: string
  image: string
}

interface MarineServicesGalleryProps {
  services: Service[]
  isArabic?: boolean
}

export function MarineServicesGallery({ services, isArabic = true }: MarineServicesGalleryProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          {isArabic ? 'خدماتنا' : 'Our Services'}
        </h2>

        {/* Gallery Container */}
        <div className="relative w-full h-auto md:h-96 flex items-center justify-center overflow-x-auto md:overflow-hidden py-8">
          <div className="flex md:flex md:justify-center md:items-center gap-4 md:gap-6 w-full">
            {services.map((service, index) => {
              const isHovered = hoveredId === service.id
              const hasHover = hoveredId !== null
              const isNeighbor = hasHover && Math.abs(services.findIndex(s => s.id === hoveredId) - index) === 1
              
              let scale = 1
              let opacity = 1

              if (hasHover && !isHovered && !isNeighbor) {
                scale = 0.8
                opacity = 0.5
              } else if (isHovered) {
                scale = 1.15
                opacity = 1
              } else if (isNeighbor) {
                scale = 0.9
                opacity = 0.75
              }

              return (
                <div
                  key={service.id}
                  className={`flex-shrink-0 transition-all duration-300 ease-out cursor-pointer ${
                    isHovered ? 'relative z-50' : ''
                  }`}
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative w-56 h-56 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl group flex-shrink-0">
                    {/* Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 224px, 288px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={false}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-300" />

                    {/* Additional hover overlay */}
                    <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />

                    {/* Text Content */}
                    <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-300 ${
                      isArabic ? 'text-right' : 'text-left'
                    }`}>
                      <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 transition-all duration-300 ${
                        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-95'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs md:text-sm text-gray-100 leading-relaxed transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-70 translate-y-1 max-h-0 md:max-h-20'
                      } overflow-hidden`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-gray-500 text-sm mt-6 md:hidden">
          {isArabic ? 'مرر الماوس فوق الصور' : 'Hover over images'}
        </p>
      </div>
    </section>
  )
}
