'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type SolutionCategory = {
  id: string
  title: string
  href: string
  eyebrow: string
  heading: string
  description: string
  outcome: string
  metric: string
  metricLabel: string
  icon?: string          // emoji / icon per category
  accentColor?: string   // dynamic accent per category
  media: {
    type: 'image' | 'video'
    src: string
    poster?: string
    alt: string
    badge: string
  }
  items: Array<{
    title: string
    description: string
    href: string
    icon?: string        // icon per sub-item
  }>
}

type SolutionItemMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
  poster?: string
}

const AUTO_ROTATE_MS = 6500

function getSolutionItemMedia(categoryId: string, itemIndex: number): SolutionItemMedia {
  const itemMediaMap: Record<string, SolutionItemMedia[]> = {
    'safety-zone': [
      {
        type: 'image',
        src: '/images/الاعاقة الالكترونية.png',
        alt: 'Electronic interference preview',
      },
      {
        type: 'image',
        src: '/images/الاعتراض المادي.png',
        alt: 'Physical interception preview',
      },
      {
        type: 'image',
        src: '/images/الكشف والتحليل.jpg',
        alt: 'Detection and analysis preview',
      },
    ],
    security: [
      {
        type: 'image',
        src: '/images/التحكم في الوصول.png',
        alt: 'Access control preview',
      },
      {
        type: 'image',
        src: '/images/الانذار والاستجابة.png',
        alt: 'Alarm and response preview',
      },
      {
        type: 'image',
        src: '/images/حماية الموسسات.png',
        alt: 'Institutional protection preview',
      },
    ],
    video: [
      {
        type: 'image',
        src: '/images/المراقبة الذكية.png',
        alt: 'Smart surveillance preview',
      },
      {
        type: 'image',
        src: '/images/التغطية المواقع الحساسة.png',
        alt: 'Sensitive site coverage preview',
      },
      {
        type: 'image',
        src: '/images/تكامل الفيديو مع العمليات.png',
        alt: 'Video operations integration preview',
      },
    ],
    monitoring: [
      {
        type: 'image',
        src: '/images/مراقبة مركزية.png',
        alt: 'Central monitoring preview',
      },
      {
        type: 'image',
        src: '/images/تقارير شاملة.png',
        alt: 'Operational reporting preview',
      },
      {
        type: 'image',
        src: '/images/ربط الفريق الميداني.png',
        alt: 'Field coordination preview',
      },
    ],
    fire: [
      {
        type: 'image',
        src: '/images/انظمة الانذار.png',
        alt: 'Alarm systems preview',
      },
      {
        type: 'image',
        src: '/images/خطط الاخلاء  والتدخل.png',
        alt: 'Evacuation and intervention preview',
      },
      {
        type: 'image',
        src: '/images/تقييم الجاهزية.png',
        alt: 'Readiness assessment preview',
      },
    ],
    support: [
      {
        type: 'image',
        src: '/images/الصيانة والتشغيل.jpg',
        alt: 'Operations and maintenance preview',
      },
      {
        type: 'image',
        src: '/images/التكامل والتحسين.png',
        alt: 'Integration and improvement preview',
      },
      {
        type: 'image',
        src: '/images/دعم استشاري.png',
        alt: 'Consulting support preview',
      },
    ],
  }

  const mediaList = itemMediaMap[categoryId] ?? itemMediaMap.security
  return mediaList[itemIndex] ?? mediaList[0]
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeSlideVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.3 } },
}

const cardStaggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const cardStaggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

/* ------------------------------------------------------------------ */
/*  Animated Counter (improvement #5)                                  */
/* ------------------------------------------------------------------ */
function AnimatedMetric({ value, className }: { value: string; className?: string }) {
  const num = parseInt(value, 10)
  const isNumber = !isNaN(num) && String(num) === value.trim()
  const [display, setDisplay] = useState(isNumber ? 0 : value)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isNumber) { setDisplay(value); return }
    let start = 0
    const end = num
    const duration = 1200
    const step = Math.max(1, Math.floor(duration / end))
    const timer = setInterval(() => {
      start += 1
      setDisplay(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [value, isNumber, num])

  return <span ref={ref} className={className}>{display}</span>
}

/* ------------------------------------------------------------------ */
/*  3D Tilt wrapper (improvement #3)                                   */
/* ------------------------------------------------------------------ */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.01,1.01,1.01)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (card) card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.35s ease-out', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Progress Ring for auto-rotate (improvement #4)                     */
/* ------------------------------------------------------------------ */
function ProgressRing({ duration, paused, accentColor }: { duration: number; paused: boolean; accentColor: string }) {
  return (
    <svg className="solutions-progress-ring" viewBox="0 0 36 36" width="36" height="36">
      <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <circle
        cx="18" cy="18" r="15.5" fill="none"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="97.4"
        strokeDashoffset="97.4"
        style={{
          animation: paused ? 'none' : `progress-ring-fill ${duration}ms linear forwards`,
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Category accent colours (improvement #8)                           */
/* ------------------------------------------------------------------ */
const ACCENT_MAP: Record<string, string> = {
  'safety-zone': 'rgba(56,189,248,0.9)',
  security:      'rgba(99,245,196,0.9)',
  video:         'rgba(168,139,250,0.9)',
  monitoring:    'rgba(251,191,36,0.9)',
  fire:          'rgba(248,113,113,0.9)',
  support:       'rgba(129,230,217,0.9)',
}

const BG_GRADIENT_MAP: Record<string, string> = {
  'safety-zone': 'radial-gradient(ellipse at 70% 30%, rgba(56,189,248,0.10) 0%, transparent 60%)',
  security:      'radial-gradient(ellipse at 70% 30%, rgba(99,245,196,0.08) 0%, transparent 60%)',
  video:         'radial-gradient(ellipse at 70% 30%, rgba(168,139,250,0.08) 0%, transparent 60%)',
  monitoring:    'radial-gradient(ellipse at 70% 30%, rgba(251,191,36,0.08) 0%, transparent 60%)',
  fire:          'radial-gradient(ellipse at 70% 30%, rgba(248,113,113,0.10) 0%, transparent 60%)',
  support:       'radial-gradient(ellipse at 70% 30%, rgba(129,230,217,0.08) 0%, transparent 60%)',
}

const ICON_MAP: Record<string, string> = {
  'safety-zone': '🛡️',
  security:      '🔒',
  video:         '📹',
  monitoring:    '📡',
  fire:          '🔥',
  support:       '🔧',
}

/* ================================================================== */
/*  MAIN COMPONENT                                                     */
/* ================================================================== */

export function SolutionsNavigator() {
  const categories: SolutionCategory[] = [
    {
      id: 'safety-zone',
      title: 'Safety Zone',
      icon: '🛡️',
      href: '/en/services/safety-zone',
      eyebrow: 'Drone intrusion protection',
      heading: 'A layered air-defense solution built to stop drone threats before they become operational risk.',
      description: 'Safety Zone combines early detection, intelligent disruption, and field interception to protect low-altitude airspace above sensitive compounds and critical infrastructure.',
      outcome: 'Reduce airborne risk windows and accelerate response from the first alert.',
      metric: '03',
      metricLabel: 'Integrated defense layers',
      media: {
        type: 'image',
        src: '/images/solutions/drone_image_no_text.png',
        alt: 'Safety Zone drone protection preview',
        badge: 'Live Air Shield',
      },
      items: [
        {
          title: 'Electronic Interference',
          description: 'Disrupt command, navigation, and GPS signals to reduce drone control inside the protected zone.',
          href: '/en/services/safety-zone',
        },
        {
          title: 'Physical Interception',
          description: 'Use field-ready containment and takedown methods when operational response is required.',
          href: '/en/services/safety-zone',
        },
        {
          title: 'Detection and Advanced Analysis',
          description: 'Combine radars, cameras, and advanced analysis to detect suspicious drone behavior early.',
          href: '/en/services/safety-zone',
        },
      ],
    },
    {
      id: 'security',
      title: 'Security Solutions',
      icon: '🔒',
      href: '/en/services',
      eyebrow: 'Integrated protection',
      heading: 'A unified security architecture that connects field protection, technology, and operational control.',
      description: 'We combine physical security, access control, and smart monitoring into one scalable operating model that is easier to manage and expand.',
      outcome: 'Clearer operations, faster decisions, and stronger protection across sensitive sites.',
      metric: '24/7',
      metricLabel: 'Operational readiness',
      media: {
        type: 'image',
        src: '/images/solutions/security-solutions.svg',
        alt: 'Integrated security solutions team',
        badge: 'Integrated Security',
      },
      items: [
        {
          title: 'Access Control',
          description: 'Control employee and visitor access with clear permissions and smooth flow.',
          href: '/en/services/technology',
        },
        {
          title: 'Alarm and Response',
          description: 'Detect threats early and connect them to fast, coordinated response actions.',
          href: '/en/services/command-center',
        },
        {
          title: 'Institutional Protection',
          description: 'Protection programs built for critical facilities and sensitive operations.',
          href: '/en/services/consultations',
        },
      ],
    },
    {
      id: 'video',
      title: 'Video Solutions',
      icon: '🎥',
      href: '/en/services/technology',
      eyebrow: 'Smarter visibility',
      heading: 'Smart video systems that give operations teams clearer visibility where it matters most.',
      description: 'We design video environments around critical zones, practical coverage, and analytics that support detection, documentation, and escalation.',
      outcome: 'Sharper visibility, faster documentation, and more accurate response on site.',
      metric: 'AI',
      metricLabel: 'Analytics-enabled',
      media: {
        type: 'image',
        src: '/images/solutions/drone_mountain_view.png',
        alt: 'Video monitoring solutions preview',
        badge: 'Smart Video Layer',
      },
      items: [
        {
          title: 'Smart Surveillance',
          description: 'Cameras and analytics that spot unusual activity faster.',
          href: '/en/services/technology',
        },
        {
          title: 'Coverage for Sensitive Areas',
          description: 'Clear visibility across entrances, perimeters, and high-traffic zones.',
          href: '/en/services/command-center',
        },
        {
          title: 'Video-Operations Integration',
          description: 'Link video systems to alerts, escalation, and incident documentation.',
          href: '/en/services/consultations',
        },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring Services',
      icon: '📡',
      href: '/en/services/command-center',
      eyebrow: 'Continuous operations',
      heading: 'Continuous monitoring that connects alerts, command decisions, and frontline response.',
      description: 'From monitoring rooms to central command, we deliver live operational visibility that helps teams manage alerts, incidents, and escalation with confidence.',
      outcome: 'Clearer follow-up paths and faster coordination across teams.',
      metric: '24/7',
      metricLabel: 'Monitoring coverage',
      media: {
        type: 'image',
        src: '/images/solutions/monitoring-services.svg',
        alt: 'Monitoring services control room',
        badge: 'Command Visibility',
      },
      items: [
        {
          title: '24/7 Central Monitoring',
          description: 'Continuous incident and alert oversight with clear escalation paths.',
          href: '/en/services/command-center',
        },
        {
          title: 'Operational Reporting',
          description: 'Dashboards and reporting that clarify the daily security picture.',
          href: '/en/services/consultations',
        },
        {
          title: 'Field Coordination',
          description: 'Stronger coordination between the operations center and field teams.',
          href: '/en/services/events',
        },
      ],
    },
    {
      id: 'fire',
      title: 'Safety and Alarm',
      icon: '🔥',
      href: '/en/services/fire-rescue',
      eyebrow: 'Emergency readiness',
      heading: 'Safety and alarm solutions that reduce risk before incidents escalate.',
      description: 'We support early detection, structured evacuation, and emergency readiness through practical systems and plans built for sensitive environments.',
      outcome: 'Faster alerts, better control, and stronger readiness in critical moments.',
      metric: '100%',
      metricLabel: 'Safety workflow clarity',
      media: {
        type: 'image',
        src: '/images/solutions/safety-alarm.svg',
        alt: 'Safety and alarm solutions preview',
        badge: 'Emergency Readiness',
      },
      items: [
        {
          title: 'Alarm Systems',
          description: 'Early-warning systems tied to clear emergency workflows.',
          href: '/en/services/fire-rescue',
        },
        {
          title: 'Evacuation and Intervention',
          description: 'Structured procedures that improve safety during critical events.',
          href: '/en/services/fire-rescue',
        },
        {
          title: 'Readiness Assessment',
          description: 'Review current readiness and define practical next steps.',
          href: '/en/services/consultations',
        },
      ],
    },
    {
      id: 'support',
      title: 'Services and Support',
      icon: '🛠️',
      href: '/en/services/facilities-management',
      eyebrow: 'Sustained performance',
      heading: 'Ongoing support that protects system performance long after deployment.',
      description: 'Our value continues after delivery through maintenance, operational support, and phased improvement that reduce disruption and sustain output quality.',
      outcome: 'More stable performance and stronger continuity after launch.',
      metric: '365',
      metricLabel: 'Days of support',
      media: {
        type: 'image',
        src: '/images/solutions/iItpu8MfWae0.jpg',
        alt: 'Services and support preview',
        badge: 'Operational Support',
      },
      items: [
        {
          title: 'Operations and Maintenance',
          description: 'Maintain system and facility readiness through structured support plans.',
          href: '/en/services/facilities-management',
        },
        {
          title: 'Integration and Improvement',
          description: 'Refine solutions as operational demands evolve.',
          href: '/en/services/technology',
        },
        {
          title: 'Consulting Support',
          description: 'Help organizations review performance and sustain results.',
          href: '/en/services/consultations',
        },
      ],
    },
  ]

  const [activeId, setActiveId] = useState(categories[0]?.id ?? 'security')
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0]
  const activeIndex = categories.findIndex((category) => category.id === activeCategory.id)

  useEffect(() => {
    setActiveId(categories[0]?.id ?? 'security')
  }, [])

  useEffect(() => {
    if (categories.length < 2) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = categories.findIndex((category) => category.id === currentId)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % categories.length

        return categories[nextIndex].id
      })
    }, AUTO_ROTATE_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0f1f2e] py-20 text-white md:py-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,31,46,0.96)_0%,rgba(15,31,46,0.88)_32%,rgba(26,58,82,0.62)_60%,rgba(26,58,82,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,196,209,0.18),transparent_28%)]" />
        <div className="absolute inset-0 brand-grid opacity-[0.14]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300/90">
            Our Solutions
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            A visual solutions layer that turns interest into confident decisions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            An interactive section that connects message, visual preview, and service detail so visitors understand each solution path faster.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center">
          <div className="relative">
            <div className="solutions-orbit-shell hidden lg:block">
              <div className="solutions-orbit-ring" />
              <div className="solutions-orbit-ring solutions-orbit-ring-inner" />
              <div className="solutions-orbit-core">
                <div className="solutions-orbit-core-label">{activeCategory.title}</div>
              </div>

              {categories.map((category, index) => {
                const isActive = category.id === activeCategory.id

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`solutions-orbit-node solutions-orbit-node-${index + 1} ${isActive ? 'is-active' : ''}`}
                    aria-label={category.title}
                  >
                    <span className="solutions-orbit-node-label">
                      {category.icon ? <span className="mr-2 inline-block">{category.icon}</span> : null}
                      {category.title}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="grid gap-3 lg:hidden">
              {categories.map((category) => {
                const isActive = category.id === activeCategory.id

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-start transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-300/35 bg-cyan-300/12 text-white shadow-[0_18px_40px_rgba(56,189,248,0.12)]'
                        : 'border-white/15 bg-white/8 text-white/68 hover:border-white/24 hover:bg-white/12 hover:text-white/88'
                    }`}
                  >
                    {category.icon ? <span className="text-xl">{category.icon}</span> : null}
                    <span className="text-base font-bold">{category.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_70px_rgba(8,22,36,0.34)] backdrop-blur-xl md:p-8">
            <div className="absolute inset-y-1/2 -left-3 hidden h-10 w-10 -translate-y-1/2 rotate-45 border-l border-b border-white/12 bg-[rgba(255,255,255,0.08)] lg:block" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white/68 backdrop-blur-md">
                    <span>Track</span>
                    <span className="text-cyan-300">{String(activeIndex + 1).padStart(2, '0')}/{String(categories.length).padStart(2, '0')}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/24 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur-md">
                    {activeCategory.metric} {activeCategory.metricLabel}
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300/80">
                  {activeCategory.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                  {activeCategory.heading}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
                  {activeCategory.description}
                </p>
                <div className="mt-5 rounded-[1.25rem] border border-white/12 bg-white/[0.06] px-4 py-4 text-sm leading-7 text-white/82 backdrop-blur-md">
                  <span className="font-black text-cyan-300">Outcome:</span>{' '}
                  {activeCategory.outcome}
                </div>
              </div>

              {/* زر View All تم حذفه بناءً على طلب المستخدم */}
            </div>

            <div className="mt-6 grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.85fr)] lg:items-stretch">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-slate-950/40 min-h-[360px] shadow-[0_24px_60px_rgba(7,14,24,0.28)] lg:min-h-[420px]">
                {activeCategory.media.type === 'video' ? (
                  <video
                    key={activeCategory.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={activeCategory.media.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={activeCategory.media.src}
                  />
                ) : (
                  <Image
                    src={activeCategory.media.src}
                    alt={activeCategory.media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,30,0.14)_0%,rgba(8,18,30,0.3)_52%,rgba(8,18,30,0.84)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/88 backdrop-blur-md">
                  {activeCategory.media.badge}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300/90">
                    Solution Preview
                  </p>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white/82 lg:text-lg">
                    {activeCategory.outcome}
                  </p>
                </div>
              </div>

              <div className="grid content-start gap-3">
                {activeCategory.items.map((item, index) => {
                  const itemMedia = getSolutionItemMedia(activeCategory.id, index)

                  return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveId(activeCategory.id)}
                    className="flex items-center gap-4 rounded-[1.25rem] border border-white/12 bg-white/[0.06] px-3 py-3 text-start text-sm font-semibold text-white/74 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/24 hover:bg-cyan-300/10 hover:text-white"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/12 bg-slate-950/40 shadow-[0_14px_28px_rgba(7,14,24,0.18)]">
                      <Image
                        src={itemMedia.src}
                        alt={itemMedia.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,30,0.02)_0%,rgba(8,18,30,0.1)_40%,rgba(8,18,30,0.55)_100%)]" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-white">{item.title}</div>
                      <div className="mt-1 line-clamp-3 text-xs leading-5 text-white/56">{item.description}</div>
                    </div>
                  </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-b border-white/10 pb-6">
              {activeCategory.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveId(activeCategory.id)}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/74 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/24 hover:bg-cyan-300/10 hover:text-white"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="grid gap-6 pt-8 md:grid-cols-2 xl:grid-cols-3">
              {activeCategory.items.map((item, index) => {
                const itemMedia = getSolutionItemMedia(activeCategory.id, index)

                return (
                <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.08]">
                  <div className="relative h-60 overflow-hidden border-b border-white/10 bg-slate-950/50">
                    {itemMedia.type === 'video' ? (
                      <video
                        key={itemMedia.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={itemMedia.poster}
                        className="h-full w-full object-cover"
                        src={itemMedia.src}
                      />
                    ) : (
                      <Image
                        src={itemMedia.src}
                        alt={itemMedia.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,30,0.02)_0%,rgba(8,18,30,0.18)_45%,rgba(8,18,30,0.75)_100%)]" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
                      Visual Detail
                    </div>
                  </div>
                  <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/24 bg-cyan-300/10 text-sm font-black text-cyan-200">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h4 className="mt-5 text-2xl font-black leading-tight text-cyan-300">
                    {item.title}
                  </h4>
                  <p className="mt-4 min-h-24 text-base leading-8 text-white/76">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-cyan-200"
                  >
                    Learn More
                  </Link>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] px-5 py-5 backdrop-blur-md md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300/85">
                  Decision Path
                </p>
                <p className="mt-2 text-base leading-7 text-white/74">
                  Start with the right solution path, then move directly into the matching service details.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      category.id === activeCategory.id ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/28 hover:bg-white/45'
                    }`}
                    aria-label={category.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
