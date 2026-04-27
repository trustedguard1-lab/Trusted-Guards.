'use client'

import { useRef } from 'react'

import {
  BadgeDollarSign,
  BellRing,
  Blocks,
  ChevronLeft,
  ChevronRight,
  FileText,
  Gauge,
  Headset,
  Settings2,
} from 'lucide-react'

interface ServiceSlideItem {
  titleEn: string
  descriptionEn: string
  icon: typeof Headset
}

const serviceItems: ServiceSlideItem[] = [
  {
    titleEn: '24/7 Operational Support',
    descriptionEn: 'Round-the-clock operational monitoring and support to ensure immediate response to incidents or emergencies at any time.',
    icon: Headset,
  },
  {
    titleEn: 'Seamless Integration',
    descriptionEn: 'Connect systems and solutions in an integrated way to preserve functional alignment, communications continuity, and operational flow.',
    icon: Blocks,
  },
  {
    titleEn: 'Customization',
    descriptionEn: 'Flexible, configurable services tailored to organizational needs through a command and control platform that can be fully adapted.',
    icon: Settings2,
  },
  {
    titleEn: 'Economic Efficiency',
    descriptionEn: 'Optimized operating models reduce costs through trained teams, integrated technologies, and ready-to-deploy solutions.',
    icon: BadgeDollarSign,
  },
  {
    titleEn: 'Comprehensive Documentation',
    descriptionEn: 'Centralized reporting and full incident documentation that keeps records secure, organized, and easily accessible in one protected system.',
    icon: FileText,
  },
  {
    titleEn: 'Proactive Risk Control',
    descriptionEn: 'Advanced monitoring systems detect risks early and issue alerts quickly, enabling fast action before issues escalate.',
    icon: BellRing,
  },
  {
    titleEn: 'Enhanced Time Efficiency',
    descriptionEn: 'Modern technologies and continuous improvements accelerate response, simplify workflows, and improve operational efficiency.',
    icon: Gauge,
  },
]

export function CommandCenterServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const totalServices = serviceItems.length.toString().padStart(2, '0')

  const scrollCards = (direction: 'prev' | 'next') => {
    const track = trackRef.current

    if (!track) return

    const firstCard = track.querySelector<HTMLElement>('[data-service-card]')
    const cardWidth = firstCard?.offsetWidth ?? 320
    const gap = 24
    const delta = cardWidth + gap
    const signedDelta = direction === 'next' ? delta : -delta

    track.scrollBy({
      left: signedDelta,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(15,35,53,0.08)_0%,transparent_45%,rgba(148,163,184,0.08)_100%)] opacity-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-6xl text-center animate-fade-in-up-fill">
          <h2 className="text-4xl font-light leading-[1.35] tracking-tight text-[#0f2335] md:text-6xl lg:text-7xl">
            The command and control center provides a unified platform that helps organizations monitor and manage multiple operational and security functions from one place.
          </h2>
          <p className="mx-auto mt-8 max-w-5xl text-lg leading-9 text-[#64748b] md:text-2xl md:leading-10">
            Operating around the clock, the center connects systems and workflows into one coordinated environment with clearer visibility and more consistent decision-making.
          </p>
        </div>

        <div className={`relative mb-12 text-left animate-fade-in-up-fill`}>
          <div className={`flex items-end justify-between gap-6`}>
            <div>
              <h2 className="text-5xl font-light tracking-tight text-[#0f2335] md:text-6xl">
                Our Services
              </h2>
            </div>
            <div className={`flex items-end gap-4`}>
              <div className="hidden items-end gap-3 lg:flex">
                <span className="text-sm font-medium tracking-[0.24em] text-[#64748b]">
                  TOTAL SERVICES
                </span>
                <div className="text-[88px] font-light leading-none text-[#cbd5e1]">
                  {totalServices}
                </div>
              </div>
              <div className={`flex items-center gap-3`}>
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => scrollCards('prev')}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#0f2335] transition-colors duration-300 hover:border-[#0f2335] hover:bg-[#0f2335] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => scrollCards('next')}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#0f2335] transition-colors duration-300 hover:border-[#0f2335] hover:bg-[#0f2335] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 h-px w-full bg-[#dbe3ec]" />
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {serviceItems.map((service, index) => {
            const Icon = service.icon
            const serviceNumber = (index + 1).toString().padStart(2, '0')

            return (
              <div
                key={service.titleEn}
                data-service-card
                className={`group relative min-h-[430px] w-[88vw] shrink-0 overflow-hidden rounded-[1.15rem] border border-[#dbe3ec] bg-white px-8 pb-10 pt-10 shadow-[0_18px_40px_rgba(15,31,46,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#94a3b8] hover:shadow-[0_24px_55px_rgba(15,31,46,0.08)] animate-fade-in-up-fill md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] ${index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : index === 2 ? 'animate-delay-300' : 'animate-delay-400'}`}
              >
                <div className={`flex items-start justify-between gap-4`}>
                  <div className="flex h-14 w-14 items-center justify-center text-[#64748b] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#0f2335]">
                    <Icon className="h-10 w-10 stroke-[1.6]" />
                  </div>
                  <div className="text-4xl font-light leading-none text-[#cbd5e1] transition-colors duration-300 group-hover:text-[#0f2335]">
                    {serviceNumber}
                  </div>
                </div>
                <h3 className={`mt-16 text-3xl font-medium leading-[1.35] text-[#0f2335] text-left`}>
                  {service.titleEn}
                </h3>
                <div className={`mt-10 h-px w-16 bg-[#94a3b8]`} />
                <p className={`mt-10 text-base leading-8 text-[#64748b] text-left`}>
                  {service.descriptionEn}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
