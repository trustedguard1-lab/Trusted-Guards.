'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Crosshair,
  Eye,
  Fingerprint,
  Gauge,
  Globe,
  Layers,
  MessageSquare,
  Phone,
  Radar,
  Radio,
  Satellite,
  ScanEye,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Signal,
  Thermometer,
  Wifi,
  WifiOff,
  Zap,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/* ═══════════════════════════════════════════════════════════════
   1. ANIMATED RADAR (Hero sidebar replacement)
   ═══════════════════════════════════════════════════════════════ */
export function AnimatedRadarCard() {
  const tacticalSignals = ['Radar Sweep', 'RF Disruption', 'Intent Assessment']

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_22px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent/80">
                Operational readiness
              </p>
              <p className="mt-1 text-xl font-bold text-white">Safety Zone</p>
            </div>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300"
          >
            Active
          </motion.div>
        </div>

        {/* Animated Radar Display */}
        <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.95))] p-6">
          {/* Ping rings */}
          <motion.div
            animate={{ scale: [0.78, 1.15], opacity: [0.12, 0.38, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/26"
          />
          <motion.div
            animate={{ scale: [0.78, 1.15], opacity: [0.12, 0.38, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/26"
          />

          {/* Static circles */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />

          {/* Rotating sweep line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-[2px] w-[50%] origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(103,232,249,0.72), rgba(103,232,249,0))' , boxShadow: '0 0 18px rgba(103,232,249,0.35)' }}
          />

          {/* Cross lines */}
          <div className="absolute left-1/2 top-1/2 h-px w-56 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-56 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />

          {/* Animated blips */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
            className="absolute right-[24%] top-[32%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]"
          />
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
            className="absolute left-[26%] top-[58%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
          />
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}
            className="absolute bottom-[22%] right-[34%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]"
          />

          {/* Alert popup */}
          <motion.div
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2, times: [0, 0.1, 0.8, 1] }}
            className="absolute right-4 top-4 rounded-xl border border-red-400/30 bg-red-500/20 px-3 py-1.5 text-[10px] font-bold text-red-300 backdrop-blur-sm"
          >
            ⚠ Threat Detected
          </motion.div>

          <div className="relative flex min-h-[250px] items-center justify-center">
            <motion.div
              animate={{ boxShadow: ['0 0 35px rgba(34,211,238,0.18)', '0 0 55px rgba(34,211,238,0.35)', '0 0 35px rgba(34,211,238,0.18)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
            >
              <Radar className="h-12 w-12" />
            </motion.div>
          </div>
        </div>

        {/* Tactical signals with animated bars */}
        <div className="mt-6 space-y-4">
          {tacticalSignals.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 2, delay: 1 + index * 0.5, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute h-full rounded-2xl bg-cyan-400/5"
                  style={{ left: 0, top: 0 }}
                />
                <span className="relative z-10">{item}</span>
              </div>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. WORKFLOW TIMELINE — "How the System Works"
   ═══════════════════════════════════════════════════════════════ */
export function WorkflowTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    { icon: Search, title: 'Detection', desc: 'Identify aerial objects as soon as they enter the protection perimeter via radar and thermal cameras.' },
    { icon: Satellite, title: 'Tracking', desc: 'Map trajectory, altitude, and speed while auto-classifying the threat level.' },
    { icon: Cpu, title: 'Analysis', desc: 'Evaluate flight behavior and determine intent using AI and advanced algorithms.' },
    { icon: WifiOff, title: 'Disruption', desc: 'Jam control and navigation signals to prevent the drone from advancing or maneuvering.' },
    { icon: Crosshair, title: 'Interception', desc: 'Apply the appropriate containment scenario based on threat type and operational environment.' },
    { icon: ShieldCheck, title: 'Secured', desc: 'Confirm threat neutralization, document the incident, and restore system readiness.' },
  ]

  return (
    <section ref={ref} className="bg-slate-950 py-20 md:py-28 ltr" dir="ltr">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold text-cyan-400">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Six stages from detection to security
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent lg:block" />

          <div className="grid gap-8 lg:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col items-center lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-16`}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:text-end' : 'lg:text-start'}`}>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/8">
                      <div className={`flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 my-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/40 bg-slate-950 text-sm font-bold text-cyan-300 lg:my-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden w-[calc(50%-3rem)] lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3. SOLUTION TIERS COMPARISON
   ═══════════════════════════════════════════════════════════════ */
export function SolutionTiers({ isArabic, lang }: { isArabic: boolean; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const tiers = isArabic
    ? [
        {
          name: 'الدرع الأساسي',
          badge: 'Basic',
          color: 'border-slate-400/30',
          highlight: false,
          features: [
            { label: 'نطاق الكشف', value: '1 كم' },
            { label: 'قنوات الرصد', value: 'رادار' },
            { label: 'تحليل متقدم', value: '—', enabled: false },
            { label: 'الإعاقة الإلكترونية', value: '—', enabled: false },
            { label: 'الاعتراض الميداني', value: '—', enabled: false },
            { label: 'ربط غرفة عمليات', value: '—', enabled: false },
            { label: 'تقارير دورية', value: '✓', enabled: true },
          ],
        },
        {
          name: 'الدرع المتقدم',
          badge: 'Advanced',
          color: 'border-cyan-400/40',
          highlight: true,
          features: [
            { label: 'نطاق الكشف', value: '3 كم' },
            { label: 'قنوات الرصد', value: 'رادار + كاميرات' },
            { label: 'تحليل متقدم', value: '✓', enabled: true },
            { label: 'الإعاقة الإلكترونية', value: '✓', enabled: true },
            { label: 'الاعتراض الميداني', value: '—', enabled: false },
            { label: 'ربط غرفة عمليات', value: '✓', enabled: true },
            { label: 'تقارير دورية', value: '✓', enabled: true },
          ],
        },
        {
          name: 'الدرع الشامل',
          badge: 'Enterprise',
          color: 'border-emerald-400/40',
          highlight: false,
          features: [
            { label: 'نطاق الكشف', value: '+5 كم' },
            { label: 'قنوات الرصد', value: 'رادار + كاميرات + RF' },
            { label: 'تحليل متقدم', value: '✓', enabled: true },
            { label: 'الإعاقة الإلكترونية', value: '✓', enabled: true },
            { label: 'الاعتراض الميداني', value: '✓', enabled: true },
            { label: 'ربط غرفة عمليات', value: '✓', enabled: true },
            { label: 'تقارير دورية', value: '✓', enabled: true },
          ],
        },
      ]
    : [
        {
          name: 'Basic Shield',
          badge: 'Basic',
          color: 'border-slate-400/30',
          highlight: false,
          features: [
            { label: 'Detection Range', value: '1 km' },
            { label: 'Monitoring Channels', value: 'Radar' },
            { label: 'Advanced Analysis', value: '—', enabled: false },
            { label: 'Electronic Jamming', value: '—', enabled: false },
            { label: 'Field Interception', value: '—', enabled: false },
            { label: 'Ops Room Integration', value: '—', enabled: false },
            { label: 'Periodic Reports', value: '✓', enabled: true },
          ],
        },
        {
          name: 'Advanced Shield',
          badge: 'Advanced',
          color: 'border-cyan-400/40',
          highlight: true,
          features: [
            { label: 'Detection Range', value: '3 km' },
            { label: 'Monitoring Channels', value: 'Radar + Cameras' },
            { label: 'Advanced Analysis', value: '✓', enabled: true },
            { label: 'Electronic Jamming', value: '✓', enabled: true },
            { label: 'Field Interception', value: '—', enabled: false },
            { label: 'Ops Room Integration', value: '✓', enabled: true },
            { label: 'Periodic Reports', value: '✓', enabled: true },
          ],
        },
        {
          name: 'Enterprise Shield',
          badge: 'Enterprise',
          color: 'border-emerald-400/40',
          highlight: false,
          features: [
            { label: 'Detection Range', value: '5+ km' },
            { label: 'Monitoring Channels', value: 'Radar + Cameras + RF' },
            { label: 'Advanced Analysis', value: '✓', enabled: true },
            { label: 'Electronic Jamming', value: '✓', enabled: true },
            { label: 'Field Interception', value: '✓', enabled: true },
            { label: 'Ops Room Integration', value: '✓', enabled: true },
            { label: 'Periodic Reports', value: '✓', enabled: true },
          ],
        },
      ]

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold">
            {isArabic ? 'مستويات الحماية' : 'Protection Levels'}
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            {isArabic ? 'اختر مستوى الحماية المناسب' : 'Choose the right protection level'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            {isArabic
              ? 'ثلاثة مستويات مصممة لتناسب مختلف المتطلبات والبيئات التشغيلية.'
              : 'Three tiers designed to fit different requirements and operational environments.'}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-[1.75rem] border-2 ${tier.color} ${tier.highlight ? 'bg-slate-50 shadow-[0_20px_50px_rgba(15,31,46,0.1)]' : 'bg-white shadow-[0_16px_40px_rgba(15,31,46,0.05)]'} p-7 transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,31,46,0.12)]`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold text-white">
                  {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                </div>
              )}
              <div className="text-center">
                <span className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  {tier.badge}
                </span>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{tier.name}</h3>
              </div>
              <div className="mt-8 space-y-4">
                {tier.features.map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0">
                    <span className="text-sm text-slate-600">{f.label}</span>
                    <span className={`text-sm font-bold ${f.enabled === false ? 'text-slate-300' : 'text-primary'}`}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${lang}/contact`}
                className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-[1.02] ${tier.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10'}`}
              >
                {isArabic ? 'اطلب عرض سعر' : 'Request a Quote'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. ANIMATED STATS
   ═══════════════════════════════════════════════════════════════ */
function CounterValue({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, end])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export function StatsStrip({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stats = isArabic
    ? [
        { value: 500, suffix: '+', label: 'موقع محمي' },
        { value: 99, suffix: '.7%', label: 'نسبة الكشف الناجح' },
        { value: 3, suffix: ' ثوانٍ>', prefix: '', label: 'زمن الاستجابة' },
        { value: 50, suffix: '+', label: 'عميل حكومي وخاص' },
      ]
    : [
        { value: 500, suffix: '+', label: 'Protected Sites' },
        { value: 99, suffix: '.7%', label: 'Detection Success Rate' },
        { value: 3, suffix: 's<', label: 'Response Time' },
        { value: 50, suffix: '+', label: 'Government & Private Clients' },
      ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_50%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-white md:text-4xl">
                <CounterValue end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. INTERACTIVE PROTECTION RANGE MAP
   ═══════════════════════════════════════════════════════════════ */
export function ProtectionRangeMap({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeZone, setActiveZone] = useState<number | null>(null)

  const zones = isArabic
    ? [
        { range: '5 كم', label: 'نطاق الكشف', desc: 'الرادار والكاميرات الحرارية ترصد أي جسم طائر عند دخوله هذا النطاق.', color: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)', icon: Radar },
        { range: '3 كم', label: 'نطاق الإعاقة', desc: 'تعطيل إشارات التحكم والملاحة لمنع الدرون من التقدم.', color: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.4)', icon: WifiOff },
        { range: '1 كم', label: 'نطاق الاعتراض', desc: 'تنفيذ سيناريو الاحتواء الميداني بالشباك أو الاعتراض الموجه.', color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.45)', icon: Crosshair },
      ]
    : [
        { range: '5 km', label: 'Detection Zone', desc: 'Radar and thermal cameras detect any aerial object entering this perimeter.', color: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)', icon: Radar },
        { range: '3 km', label: 'Disruption Zone', desc: 'Control and navigation signals are jammed to prevent drone advancement.', color: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.4)', icon: WifiOff },
        { range: '1 km', label: 'Interception Zone', desc: 'Field containment scenarios with nets or directed interception are executed.', color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.45)', icon: Crosshair },
      ]

  return (
    <section ref={ref} className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold text-cyan-400">
            {isArabic ? 'خريطة الحماية' : 'Protection map'}
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            {isArabic ? 'طبقات الحماية متعددة النطاق' : 'Multi-range protection layers'}
          </h2>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Interactive concentric circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
          >
            {/* Outer zone (Detection) */}
            <motion.div
              animate={activeZone === 0 ? { scale: 1.03 } : { scale: 1 }}
              onHoverStart={() => setActiveZone(0)}
              onHoverEnd={() => setActiveZone(null)}
              onClick={() => setActiveZone(activeZone === 0 ? null : 0)}
              className="absolute inset-0 cursor-pointer rounded-full border-2 transition-colors duration-300"
              style={{
                backgroundColor: activeZone === 0 ? 'rgba(56,189,248,0.18)' : zones[0].color,
                borderColor: zones[0].border,
              }}
            >
              <span className="absolute left-4 top-4 text-xs font-bold text-cyan-300">{zones[0].range}</span>
            </motion.div>

            {/* Middle zone (Disruption) */}
            <motion.div
              animate={activeZone === 1 ? { scale: 1.05 } : { scale: 1 }}
              onHoverStart={() => setActiveZone(1)}
              onHoverEnd={() => setActiveZone(null)}
              onClick={() => setActiveZone(activeZone === 1 ? null : 1)}
              className="absolute cursor-pointer rounded-full border-2 transition-colors duration-300"
              style={{
                width: '65%', height: '65%',
                backgroundColor: activeZone === 1 ? 'rgba(251,191,36,0.2)' : zones[1].color,
                borderColor: zones[1].border,
              }}
            >
              <span className="absolute left-3 top-3 text-xs font-bold text-amber-300">{zones[1].range}</span>
            </motion.div>

            {/* Inner zone (Interception) */}
            <motion.div
              animate={activeZone === 2 ? { scale: 1.08 } : { scale: 1 }}
              onHoverStart={() => setActiveZone(2)}
              onHoverEnd={() => setActiveZone(null)}
              onClick={() => setActiveZone(activeZone === 2 ? null : 2)}
              className="absolute cursor-pointer rounded-full border-2 transition-colors duration-300"
              style={{
                width: '32%', height: '32%',
                backgroundColor: activeZone === 2 ? 'rgba(239,68,68,0.22)' : zones[2].color,
                borderColor: zones[2].border,
              }}
            >
              <span className="absolute left-2 top-2 text-[10px] font-bold text-red-300">{zones[2].range}</span>
            </motion.div>

            {/* Center icon */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-white" />
            </div>

            {/* Animated sweep */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-1/2 h-[50%] w-px origin-top bg-gradient-to-b from-cyan-400/50 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Zone descriptions */}
          <div className="space-y-5">
            {zones.map((zone, i) => {
              const Icon = zone.icon
              return (
                <motion.div
                  key={zone.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  onHoverStart={() => setActiveZone(i)}
                  onHoverEnd={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === i ? null : i)}
                  className={`cursor-pointer rounded-[1.5rem] border p-6 transition-all duration-300 ${activeZone === i ? 'border-white/20 bg-white/10' : 'border-white/8 bg-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: zone.color, borderColor: zone.border, borderWidth: 1 }}>
                      <Icon className="h-6 w-6" style={{ color: zone.border }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{zone.label}</h3>
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold text-white/60">{zone.range}</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{zone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. TECHNOLOGY SHOWCASE
   ═══════════════════════════════════════════════════════════════ */
export function TechShowcase({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTech, setActiveTech] = useState<number | null>(null)

  const techs = isArabic
    ? [
        { icon: Radar, title: 'رادار Micro-Doppler', desc: 'كشف الأجسام الصغيرة والبطيئة الحركة على مسافات بعيدة حتى في البيئات المعقدة.', tag: 'كشف' },
        { icon: Thermometer, title: 'كاميرات حرارية', desc: 'رؤية نهارية وليلية عالية الدقة تكشف الطائرات بغض النظر عن الإضاءة.', tag: 'رصد' },
        { icon: Radio, title: 'مستشعرات RF', desc: 'تحليل إشارات التحكم والتعرف على بصمة الطائرة الإلكترونية وتحديد موقع المشغل.', tag: 'تحليل' },
        { icon: Wifi, title: 'أنظمة تشويش ذكي', desc: 'تعطيل انتقائي لترددات التحكم والملاحة بدقة عالية دون التأثير على الاتصالات المحيطة.', tag: 'إعاقة' },
        { icon: Crosshair, title: 'شباك اعتراض ذكية', desc: 'منظومات إطلاق شباك موجهة تحتوي الدرون بأمان في المناطق الحضرية والحساسة.', tag: 'اعتراض' },
        { icon: Cpu, title: 'تحليل متقدم', desc: 'خوارزميات متخصصة تميز بين الطائرات المصرح بها والمهددة وتتنبأ بالمسارات.', tag: 'ذكاء' },
      ]
    : [
        { icon: Radar, title: 'Micro-Doppler Radar', desc: 'Detect small, slow-moving objects at long range even in complex environments.', tag: 'Detection' },
        { icon: Thermometer, title: 'Thermal Cameras', desc: 'Day and night high-resolution vision that detects drones regardless of lighting.', tag: 'Surveillance' },
        { icon: Radio, title: 'RF Sensors', desc: 'Analyze control signals, identify electronic fingerprints, and locate the operator.', tag: 'Analysis' },
        { icon: Wifi, title: 'Smart Jamming Systems', desc: 'Selective frequency disruption with precision, without affecting surrounding communications.', tag: 'Disruption' },
        { icon: Crosshair, title: 'Smart Interception Nets', desc: 'Guided net launch systems that safely contain drones in urban and sensitive areas.', tag: 'Interception' },
        { icon: Cpu, title: 'Advanced Analysis', desc: 'Algorithms distinguish authorized from threatening drones and predict paths.', tag: 'Intelligence' },
      ]

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold">
            {isArabic ? 'التقنيات المستخدمة' : 'Technology Stack'}
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            {isArabic ? 'تقنيات متكاملة للحماية الشاملة' : 'Integrated technologies for full-spectrum protection'}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techs.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onHoverStart={() => setActiveTech(i)}
                onHoverEnd={() => setActiveTech(null)}
                className={`group relative rounded-[1.75rem] border bg-white p-7 transition-all duration-300 ${activeTech === i ? 'border-primary/20 shadow-[0_20px_50px_rgba(15,31,46,0.1)]' : 'border-primary/8 shadow-[0_12px_30px_rgba(15,31,46,0.04)]'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                    {tech.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{tech.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{tech.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   7. CASE STUDIES
   ═══════════════════════════════════════════════════════════════ */
export function CaseStudies({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const cases = isArabic
    ? [
        {
          icon: Building2,
          tag: 'مجمع سكني',
          title: 'حماية خصوصية مجمع سكني فاخر',
          challenge: 'تكرار حالات تصوير جوي غير مصرح به من طائرات مسيّرة مجهولة المصدر.',
          solution: 'نشر منظومة كشف وإعاقة على مدار الساعة تغطي كامل المجمع مع تنبيهات فورية.',
          result: 'إيقاف 100% من محاولات الاختراق الجوي خلال الأشهر الستة الأولى.',
        },
        {
          icon: Shield,
          tag: 'فعالية حكومية',
          title: 'تأمين فعالية رسمية حساسة',
          challenge: 'مخاطر تهديد جوي أثناء فعالية حكومية رفيعة المستوى في مساحة مفتوحة.',
          solution: 'نشر مؤقت لمنظومة Safety Zone متعددة الطبقات مع فريق استجابة ميداني.',
          result: 'رصد وتحييد 3 طائرات مسيّرة قبل وصولها لمنطقة الفعالية.',
        },
        {
          icon: Globe,
          tag: 'منشأة صناعية',
          title: 'مكافحة التجسس الجوي على منشأة',
          challenge: 'محاولات رصد وتصوير عمليات الإنتاج عبر طائرات مسيّرة تجارية.',
          solution: 'منظومة كشف دائمة مع تحليل RF لتحديد مواقع المشغلين والتنسيق مع الجهات.',
          result: 'خفض محاولات التجسس بنسبة 95% وتوثيق الحوادث للجهات المختصة.',
        },
      ]
    : [
        {
          icon: Building2,
          tag: 'Residential',
          title: 'Protecting a luxury compound\'s privacy',
          challenge: 'Repeated unauthorized aerial photography from unknown drone operators targeting the compound.',
          solution: 'Deployed a 24/7 detection and jamming system covering the entire compound with instant alerts.',
          result: '100% of aerial intrusion attempts blocked within the first six months.',
        },
        {
          icon: Shield,
          tag: 'Government Event',
          title: 'Securing a high-profile official event',
          challenge: 'Aerial threat risks during a high-level government event in an open-air venue.',
          solution: 'Temporary multi-layered Safety Zone deployment with a dedicated field response team.',
          result: '3 unauthorized drones detected and neutralized before reaching the event perimeter.',
        },
        {
          icon: Globe,
          tag: 'Industrial Facility',
          title: 'Countering aerial espionage on a facility',
          challenge: 'Attempts to surveil and photograph production operations using commercial drones.',
          solution: 'Permanent detection system with RF analysis to locate operators and coordinate with authorities.',
          result: '95% reduction in espionage attempts with full incident documentation.',
        },
      ]

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold">
            {isArabic ? 'دراسات حالة' : 'Case Studies'}
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            {isArabic ? 'سيناريوهات واقعية من الميدان' : 'Real-world field scenarios'}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-[0_16px_40px_rgba(15,31,46,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,31,46,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-500/70">
                      {isArabic ? 'التحدي' : 'Challenge'}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-600/70">
                      {isArabic ? 'الحل' : 'Solution'}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/70">
                      {isArabic ? 'النتيجة' : 'Result'}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-700">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   8. FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════ */
export function FAQSection({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const faqs = isArabic
    ? [
        { q: 'ما هي المسافة القصوى للكشف؟', a: 'تصل مسافة الكشف إلى 5 كيلومترات أو أكثر حسب نوع الرادار والبيئة التشغيلية. نقوم بتخصيص المنظومة وفق متطلبات كل موقع.' },
        { q: 'هل النظام يعمل في جميع الظروف الجوية؟', a: 'نعم، المنظومة مصممة للعمل في مختلف الظروف الجوية بما في ذلك الأمطار والرياح والعواصف الرملية، مع مراعاة أن الأداء الأمثل يتحقق في الظروف المعتدلة.' },
        { q: 'هل يتوافق مع الأنظمة والقوانين المحلية؟', a: 'بالتأكيد. نلتزم بكافة الأنظمة والتشريعات المحلية المتعلقة بمكافحة الطائرات المسيّرة ونعمل بالتنسيق مع الجهات المختصة.' },
        { q: 'كم يستغرق التركيب والتشغيل؟', a: 'يعتمد على حجم الموقع ومستوى الحماية المطلوب. عادةً ما يتم التركيب والتشغيل خلال أسبوعين إلى أربعة أسابيع تشمل التقييم والتصميم والنشر والاختبار.' },
        { q: 'هل يمكن الربط مع أنظمة أمنية قائمة؟', a: 'نعم، المنظومة مصممة للتكامل مع أنظمة المراقبة وغرف القيادة والتحكم القائمة عبر بروتوكولات اتصال معيارية وواجهات برمجة مفتوحة.' },
        { q: 'ما هو زمن الاستجابة من الكشف إلى الإجراء؟', a: 'أقل من 3 ثوانٍ من لحظة الكشف إلى إطلاق إجراء الاعتراض أو الإعاقة، مع إرسال التنبيهات الفورية لغرفة العمليات.' },
      ]
    : [
        { q: 'What is the maximum detection range?', a: 'Detection range reaches 5 kilometers or more depending on radar type and operational environment. We customize the system based on each site\'s requirements.' },
        { q: 'Does the system work in all weather conditions?', a: 'Yes, the system is designed to operate in various weather conditions including rain, wind, and sandstorms, though optimal performance is achieved in moderate conditions.' },
        { q: 'Is it compliant with local regulations?', a: 'Absolutely. We comply with all local regulations related to counter-drone operations and coordinate closely with the relevant authorities.' },
        { q: 'How long does installation take?', a: 'It depends on site size and required protection level. Typically, installation and commissioning take 2-4 weeks including assessment, design, deployment, and testing.' },
        { q: 'Can it integrate with existing security systems?', a: 'Yes, the system is designed to integrate with existing surveillance and command-and-control systems via standard communication protocols and open APIs.' },
        { q: 'What is the response time from detection to action?', a: 'Less than 3 seconds from the moment of detection to launching the interception or jamming action, with instant alerts sent to the operations room.' },
      ]

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="brand-kicker text-xs font-bold">
            {isArabic ? 'أسئلة شائعة' : 'FAQ'}
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            {isArabic ? 'الأسئلة الأكثر شيوعاً' : 'Frequently Asked Questions'}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-[1.25rem] border border-primary/10 bg-white px-6 shadow-[0_4px_16px_rgba(15,31,46,0.03)] transition-shadow duration-300 data-[state=open]:shadow-[0_8px_24px_rgba(15,31,46,0.08)]"
              >
                <AccordionTrigger className="py-5 text-base font-bold text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-500">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   9. FLOATING CTA BAR
   ═══════════════════════════════════════════════════════════════ */
export function FloatingCTA({ isArabic, lang }: { isArabic: boolean; lang: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={false}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Safety Zone</p>
            <p className="text-[11px] text-white/50">
              {isArabic ? 'حماية جوية متعددة الطبقات' : 'Multi-layered aerial protection'}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <Link
            href={`/${lang}/contact`}
            className="flex-1 rounded-full bg-white px-6 py-2.5 text-center text-sm font-bold text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100 sm:flex-none"
          >
            {isArabic ? 'اطلب تقييم مجاني' : 'Request Free Assessment'}
          </Link>
          <a
            href="tel:+966"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{isArabic ? 'اتصل بنا' : 'Call Us'}</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   10. CLIENT LOGOS / SOCIAL PROOF
   ═══════════════════════════════════════════════════════════════ */
export function SocialProof({ isArabic }: { isArabic: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const badges = isArabic
    ? [
        { icon: ShieldCheck, label: 'معتمد من هيئة الأمن' },
        { icon: Fingerprint, label: 'متوافق مع ISO 27001' },
        { icon: Globe, label: 'شريك تقنيات عالمية' },
        { icon: Gauge, label: 'ضمان SLA 99.9%' },
      ]
    : [
        { icon: ShieldCheck, label: 'Security Authority Certified' },
        { icon: Fingerprint, label: 'ISO 27001 Compliant' },
        { icon: Globe, label: 'Global Technology Partner' },
        { icon: Gauge, label: '99.9% SLA Guarantee' },
      ]

  return (
    <section ref={ref} className="border-y border-primary/5 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400"
        >
          {isArabic ? 'اعتمادات وشراكات' : 'Certifications & Partnerships'}
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-full border border-primary/8 bg-slate-50 px-5 py-3"
              >
                <Icon className="h-5 w-5 text-primary/50" />
                <span className="text-sm font-semibold text-slate-600">{badge.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
