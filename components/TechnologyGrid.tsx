'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface TechCard {
  id: string
  title: string
  image: string
  description: string
}

interface TechnologyGridProps {
  cards: TechCard[]
  isArabic: boolean
}

export function TechnologyGrid({ cards, isArabic }: TechnologyGridProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const selectedData = cards.find(card => card.id === selectedCard)

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card.id)}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
            
            {/* Title */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center w-full group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedData && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {/* Modal Header */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <Image
                src={selectedData.image}
                alt={selectedData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Title on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {selectedData.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {selectedData.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
