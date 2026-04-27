'use client'

import { useI18n } from '@/lib/i18n-context'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Users, FolderKanban, CalendarDays } from 'lucide-react'

interface StatItem {
  end: number
  suffix?: string
  labelAr: string
  labelEn: string
  icon: React.ReactNode
}

export const statsData: StatItem[] = [
  {
    end: 500,
    suffix: '+',
    labelAr: 'المشاريع',
    labelEn: 'Projects',
    icon: <FolderKanban className="h-10 w-10 md:h-12 md:w-12" />,
  },
  {
    end: 220,
    suffix: '+',
    labelAr: 'الموظفين',
    labelEn: 'Employees',
    icon: <Users className="h-10 w-10 md:h-12 md:w-12" />,
  },
  {
    end: 2011,
    labelAr: 'سنة التأسيس',
    labelEn: 'Year Founded',
    icon: <CalendarDays className="h-10 w-10 md:h-12 md:w-12" />,
  },
]

export function StatsSection() {
  const { language } = useI18n()
  const isArabic = language === 'ar'

  return (
    <section dir={isArabic ? 'rtl' : 'ltr'} className="relative overflow-hidden bg-[#f0f3f7] py-20 md:py-28">
      {/* Chevron pattern */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center opacity-[0.05]">
        <svg width="700" height="160" viewBox="0 0 700 160" fill="none" className="text-[#1a3a52]">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={i}
              d={`M${80 + i * 80},${160 - i * 16} L${120 + i * 80},${126 - i * 16} L${160 + i * 80},${160 - i * 16}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`b-${i}`}
              d={`M${120 + i * 80},${150 - i * 12} L${160 + i * 80},${122 - i * 12} L${200 + i * 80},${150 - i * 12}`}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-center md:justify-between">

          {/* Title */}
          <div className="shrink-0 text-center md:text-start">
            <h2 className="text-4xl font-bold leading-snug text-[#1a3a52] md:text-5xl lg:text-6xl">
              {isArabic ? (
                <><span className="text-[#2d5a7b]">Trusted Guards</span><br />في أرقام</>
              ) : (
                <><span className="text-[#2d5a7b]">Trusted Guards</span><br />in Numbers</>
              )}
            </h2>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-start justify-center gap-14 md:gap-18 lg:gap-24">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-5 text-[#b8c4d1]">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[2.5rem] font-extrabold leading-none tracking-tight text-[#1a3a52] md:text-[3.25rem] lg:text-[3.75rem]">
                    <AnimatedCounter
                      end={stat.end}
                      duration={2400}
                      className=""
                    />
                  </span>
                  {stat.suffix && (
                    <span className="text-[2rem] font-bold text-[#1a3a52] md:text-[2.5rem]">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="mt-2 text-base font-medium text-[#2d5a7b]/80 md:text-lg">
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
