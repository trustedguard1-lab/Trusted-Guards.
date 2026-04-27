'use client'

import { useState } from 'react'
import {
  Bolt,
  Building2,
  Car,
  ConciergeBell,
  HandCoins,
  House,
  Sparkles,
  Trees,
  Truck,
  Bug,
  LucideIcon,
} from 'lucide-react'

interface ServiceTabItem {
  title: string
  description?: string
  icon: string
  points: string[]
}

interface ServiceTab {
  label: string
  sublabel: string
  services: ServiceTabItem[]
}

interface ServiceTabsClientProps {
  data: {
    tabs: ServiceTab[]
  }
}

export function ServiceTabsClient({ data }: ServiceTabsClientProps) {
  const [activeTab, setActiveTab] = useState(0)

  const iconMap: Record<string, LucideIcon> = {
    wrench: Bolt,
    building: House,
    sparkles: Sparkles,
    bug: Bug,
    trees: Trees,
    concierge: ConciergeBell,
    utensils: HandCoins,
    car: Car,
    truck: Truck,
  }

  return (
    <section dir="ltr" className="bg-[#f8fafc] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-light text-[#10283c] md:text-6xl">
          Facilities Management Services
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {data.tabs.map((tab, index: number) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative min-w-[210px] rounded-full border px-7 py-4 text-center transition-all duration-300 md:min-w-[320px] ${
                activeTab === index
                  ? 'border-[#10283c] bg-[#10283c] text-white shadow-[0_18px_30px_rgba(16,40,60,0.18)]'
                  : 'border-[#cbd5e1] bg-white text-[#64748b] hover:border-[#94a3b8]'
              }`}
            >
              <span className="block text-lg font-medium leading-6">
                {tab.label}
              </span>
              <span className={`mt-1 block text-xs ${activeTab === index ? 'text-slate-200' : 'text-[#94a3b8]'}`}>
                {tab.sublabel}
              </span>
              {activeTab === index ? (
                <span className="absolute inset-x-0 -bottom-2 mx-auto h-4 w-4 rotate-45 rounded-[2px] bg-[#10283c]" />
              ) : null}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.tabs[activeTab].services.map((service, index: number) => (
            (() => {
              const Icon = iconMap[service.icon] ?? Building2

              return (
                <article
                  key={index}
                  className="min-h-[340px] rounded-[1.2rem] border border-[#dbe3ec] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#94a3b8] hover:shadow-[0_18px_30px_rgba(15,31,46,0.06)] text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-[#94a3b8]" strokeWidth={1.75} />
                  </div>
                  <h4 className="mt-10 text-2xl font-medium leading-[1.5] text-[#10283c] md:text-[2rem]">
                    {service.title}
                  </h4>
                  <div className="mt-8 h-px w-12 bg-[#94a3b8]" />
                  <ul className="mt-8 space-y-3 text-sm leading-7 text-[#64748b] md:text-base pl-5 list-disc marker:text-[#94a3b8]">
                    {service.points?.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              )
            })()
          ))}
        </div>
      </div>
    </section>
  )
}
