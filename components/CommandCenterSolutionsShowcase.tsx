'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

interface SolutionItem {
  key: string
  titleEn: string
  descriptionEn: string
  featuresEn: string[]
}

const solutionItems: SolutionItem[] = [
  {
    key: 'safe-platform',
    titleEn: 'Trusted Guards Platform',
    descriptionEn:
      'The Trusted Guards platform provides a unified operating layer that connects multiple systems through APIs, including intrusion detection, video surveillance, access control, control rooms, fire systems, contact centers, incident management, dashboards, and analytics tools.',
    featuresEn: ['System integration', '3D visualization', 'Maps', 'Easy-to-use interface', 'Reporting', 'Dashboards'],
  },
  {
    key: 'surveillance',
    titleEn: 'Surveillance Cameras',
    descriptionEn:
      'Our command center services integrate advanced surveillance technologies to deliver comprehensive site coverage. The team monitors live feeds, detects suspicious activity, and takes immediate action when needed.',
    featuresEn: ['Face recognition', 'People counting', 'Unusual behavior detection'],
  },
  {
    key: 'smart-vehicles',
    titleEn: 'Smart Vehicles',
    descriptionEn:
      'The command center integrates advanced smart-vehicle technologies to provide broad mobile coverage. The system can automatically detect violations such as speeding, phone use, seat belt violations, and visual pollution.',
    featuresEn: ['License plate recognition', '360-degree cameras', 'Automatic violation detection', 'Analytics'],
  },
  {
    key: 'fleet-tracking',
    titleEn: 'Fleet Tracking Technology',
    descriptionEn:
      'The command center integrates advanced fleet tracking technology for complete fleet oversight. The system automatically detects violations or fatigue indicators and sends alerts directly to the command center.',
    featuresEn: ['Monitoring', 'Live and recorded video', 'Tracking', 'Geofencing and routing', 'Driver violation detection', 'Driver data and task handoff', 'Reporting'],
  },
  {
    key: 'project-dashboards',
    titleEn: 'Project Control Dashboards',
    descriptionEn:
      'Project control dashboards provide complete project reporting, including start and end dates, project manager and account manager data, workforce data, and resource allocation.',
    featuresEn: ['Resource allocation', 'Detailed project data', 'Publication details'],
  },
  {
    key: 'attendance',
    titleEn: 'Attendance Management',
    descriptionEn:
      'A dedicated application to track employee attendance on entry and exit while maintaining attendance records, scheduling, reports, and leave management.',
    featuresEn: ['Timesheets', 'Reporting', 'Attendance', 'Requests and approvals'],
  },
  {
    key: 'incident-dashboards',
    titleEn: 'Incident Control Dashboards',
    descriptionEn:
      'Incident dashboards provide complete incident reporting including contact details, fleet tracking data, and project data, with deeper analytics on timelines, high-frequency zones, cities, incident types, and projects.',
    featuresEn: ['Deep analysis', 'Comprehensive data', 'Reporting'],
  },
]

export function CommandCenterSolutionsShowcase() {
  const [activeKey, setActiveKey] = useState(solutionItems[0].key)

  const activeItem = solutionItems.find((item) => item.key === activeKey) ?? solutionItems[0]

  return (
    <section dir="ltr" className="relative overflow-hidden bg-[#0f2335] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-start`}>
          <div className="order-2 lg:order-1">
            <div className={`mx-auto max-w-4xl text-left animate-fade-in-up-fill`} key={activeItem.key}>
              <h2 className="text-4xl font-light tracking-tight text-[#e2e8f0] md:text-6xl">
                {activeItem.titleEn}
              </h2>
              <div className={`mt-5 h-px w-24 bg-[#94a3b8]`} />
              <p className="mt-8 text-lg leading-9 text-slate-200">
                {activeItem.descriptionEn}
              </p>

              <div className={`mt-10 text-left`}>
                <h3 className="text-2xl font-medium text-[#e2e8f0]">
                  Benefits:
                </h3>
                <ul className={`mt-5 space-y-3 text-lg leading-8 text-slate-200 pl-6 list-disc marker:text-[#94a3b8]`}>
                  {activeItem.featuresEn.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm">
              {solutionItems.map((item) => {
                const isActive = item.key === activeKey

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveKey(item.key)}
                    dir="ltr"
                    className={`flex w-full items-center justify-between gap-4 border-b border-white/10 px-6 py-6 transition-all duration-300 last:border-b-0 text-left ${isActive ? 'bg-[#163049] text-white' : 'bg-transparent text-slate-200 hover:bg-white/5'}`}
                  >
                    <span
                      className={`text-2xl ${isActive ? 'font-medium' : 'font-normal'} order-1 text-left`}
                    >
                      {item.titleEn}
                    </span>
                    <ChevronLeft className={`h-5 w-5 shrink-0 ${isActive ? 'text-[#cbd5e1]' : 'text-slate-500'} order-2 rotate-180`} />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
