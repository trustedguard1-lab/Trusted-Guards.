'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface RelatedCard {
  titleEn: string
  descriptionEn: string
  hrefEn: string
}

interface RelatedCardsSectionProps {
  titleEn: string
  introEn: string
  cards: RelatedCard[]
}

export function RelatedCardsSection({
  titleEn,
  introEn,
  cards
}: RelatedCardsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerPage = 3

  const totalPages = Math.ceil(cards.length / cardsPerPage)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const visibleCards = cards.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  )

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {titleEn}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {introEn}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute z-10 p-2 text-primary hover:text-secondary transition-colors left-full ml-4"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Cards Grid */}
          <div className="w-full px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.map((card, index) => {
                const href = card.hrefEn
                const title = card.titleEn
                const description = card.descriptionEn

                return (
                  <Link key={index} href={href} className="block group">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 h-full hover:border-secondary hover:shadow-md transition-all duration-300 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 text-left">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed flex-grow text-left">
                        {description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute z-10 p-2 text-primary hover:text-secondary transition-colors right-full mr-4"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gray-400'
                  : 'bg-gray-300 hover:bg-gray-350'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
