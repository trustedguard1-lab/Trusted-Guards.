'use client';

import React, { useState, useEffect } from 'react';

interface Box {
  id: number;
  label: string;
  color: string;
}

interface RelatedBoxesCarouselProps {
  boxes?: Box[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultBoxes: Box[] = [
  { id: 1, label: '1', color: 'bg-gray-300' },
  { id: 2, label: '2', color: 'bg-gray-300' },
  { id: 3, label: '3', color: 'bg-gray-300' },
  { id: 4, label: '4', color: 'bg-gray-300' },
  { id: 5, label: '5', color: 'bg-gray-300' },
  { id: 6, label: '6', color: 'bg-gray-300' },
];

export function RelatedBoxesCarousel({
  boxes = defaultBoxes,
  autoPlay = true,
  interval = 3000,
}: RelatedBoxesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % boxes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, boxes.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + boxes.length) % boxes.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % boxes.length);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Main Display with Smooth Horizontal Movement */}
      <div className="relative w-full max-w-xs">
        <div className="flex justify-center items-center h-20">
          <div className="relative w-16 h-16 overflow-hidden">
            {/* Container for smooth slide animation */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(0)`,
              }}
            >
              {boxes.map((box, index) => (
                <div
                  key={box.id}
                  className={`absolute w-16 h-16 flex items-center justify-center transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}
                  style={{
                    transform:
                      index === activeIndex ? 'scale(1)' : 'scale(0.5)',
                  }}
                >
                  <div
                    className={`${box.color} rounded-full w-full h-full flex items-center justify-center shadow-lg font-bold text-sm text-gray-600`}
                  >
                    {box.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots - More visible and interactive */}
      <div className="flex gap-3">
        {boxes.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === activeIndex
                ? 'w-4 h-4 bg-gray-400 shadow-lg'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-350'
            }`}
            aria-label={`Go to box ${index + 1}`}
            aria-current={index === activeIndex ? 'page' : undefined}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md transition-colors duration-200 font-medium text-sm"
        >
          ← السابق
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md transition-colors duration-200 font-medium text-sm"
        >
          التالي →
        </button>
      </div>

      {/* Info Display */}
      <div className="text-center mt-2">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {activeIndex + 1} من {boxes.length}
        </p>
      </div>
    </div>
  );
}

export default RelatedBoxesCarousel;
