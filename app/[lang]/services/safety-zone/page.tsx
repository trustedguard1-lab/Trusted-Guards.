import Image from 'next/image'
import Link from 'next/link'
import { Activity, Crosshair, Radar, Waves, Zap } from 'lucide-react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import {
  AnimatedRadarCard,
  CaseStudies,
  FAQSection,
  FloatingCTA,
  ProtectionRangeMap,
  SocialProof,
  SolutionTiers,
  StatsStrip,
  TechShowcase,
  WorkflowTimeline,
} from './SafetyZoneClient'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Safety Zone - Counter-Drone Protection System | Trusted Guards',
    description: 'An advanced anti-drone protection system combining early detection, electronic disruption, and field interception to protect privacy and site security.',
    keywords: 'counter-drone, anti-drone, drone detection, electronic jamming, facility security, airspace protection',
  }
}

export default async function SafetyZonePage({ params }: PageProps) {
  const isArabic = false
  const { lang } = await params

  const pillars = isArabic
    ? [
        {
          icon: Radar,
          title: 'الكشف المبكر والتتبع',
          description: 'رادارات وكاميرات ومستشعرات متخصصة لرصد الأجسام الطائرة الصغيرة وتحديد مسارها ومناطق الخطر بسرعة.'
        },
        {
          icon: Zap,
          title: 'الإعاقة الإلكترونية',
          description: 'إجراءات تعطيل دقيقة لإشارات التحكم والملاحة والتموضع بما يحد من قدرة الطائرة على الاستمرار أو المناورة.'
        },
        {
          icon: Crosshair,
          title: 'الاحتواء والاعتراض',
          description: 'سيناريوهات تدخل ميداني مدروسة تشمل حلول الشباك والاعتراض الموجه وفق البيئة التشغيلية ومتطلبات السلامة.'
        },
      ]
    : [
        {
          icon: Radar,
          title: 'Early Detection and Tracking',
          description: 'Radar, cameras, and specialized sensors identify small aerial objects quickly and map their trajectory and risk zone.'
        },
        {
          icon: Zap,
          title: 'Electronic Disruption',
          description: 'Targeted disruption measures interfere with command, navigation, and positioning signals to limit drone control.'
        },
        {
          icon: Crosshair,
          title: 'Containment and Interception',
          description: 'Field-ready intervention scenarios include net systems and directed interception aligned with safety and site conditions.'
        },
      ]

  const useCases = isArabic
    ? [
        'المجمعات السكنية والفلل الخاصة عالية الخصوصية',
        'المقار الحكومية والمنشآت الحيوية',
        'الفعاليات والمناسبات التنفيذية الحساسة',
        'الموانئ والمناطق اللوجستية المفتوحة',
      ]
    : [
        'High-privacy residential compounds and villas',
        'Government sites and critical infrastructure',
        'Sensitive executive events and gatherings',
        'Ports and open logistics environments',
      ]

  const capabilities = isArabic
    ? [
        {
          title: 'طبقة رصد مستمرة',
          description: 'تغطية تشغيلية متصلة تكشف الطائرات المسيّرة فور دخولها نطاق الموقع أو اقترابها من محيط الحماية.'
        },
        {
          title: 'تحليل سلوك الطيران',
          description: 'تمييز الأنماط الطبيعية من السلوك العدائي أو الفضولي باستخدام قواعد تنبيه وتحليل ميداني متقدم.'
        },
        {
          title: 'ربط مع غرف العمليات',
          description: 'تصعيد الحوادث مباشرة إلى فرق المراقبة والقيادة والتحكم لاتخاذ قرار الاستجابة المناسب دون تأخير.'
        },
        {
          title: 'تصميم حسب بيئة العميل',
          description: 'اختيار الحلول وفق طبيعة الموقع، حساسية المجال الجوي، القيود التشغيلية، ومتطلبات الامتثال.'
        },
      ]
    : [
        {
          title: 'Persistent Detection Layer',
          description: 'Continuous operational coverage that identifies drones as soon as they enter or approach the protected zone.'
        },
        {
          title: 'Flight Behavior Analysis',
          description: 'Differentiate normal activity from intrusive or hostile behavior using alert logic and advanced analysis.'
        },
        {
          title: 'Operations Room Integration',
          description: 'Escalate incidents directly to monitoring, command, and control teams for timely response decisions.'
        },
        {
          title: 'Site-Specific Design',
          description: 'Choose the right counter-drone model based on site type, airspace sensitivity, operational constraints, and compliance needs.'
        },
      ]

  const metrics = isArabic
    ? [
        { label: 'طبقات الحماية', value: '03+' },
        { label: 'سيناريوهات الاستجابة', value: '360°' },
      ]
    : [
        { label: 'Protection Layers', value: '03+' },
        { label: 'Response Scenarios', value: '360°' },
      ]

  /* JSON-LD Structured Data for SEO */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Safety Zone - Counter-Drone Protection',
    provider: { '@type': 'Organization', name: 'Trusted Guards' },
    description: isArabic
      ? 'منظومة متقدمة لحماية الخصوصية والأمن من تهديدات الطائرات المسيّرة'
      : 'Advanced anti-drone protection system for privacy and security',
    serviceType: 'Counter-Drone Security',
    areaServed: { '@type': 'Country', name: 'South Africa' },
  }

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main dir={isArabic ? 'rtl' : 'ltr'}>
        {/* ── HERO SECTION ── */}
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/images/safety_zone_hyper_realistic_dome.png"
            alt={isArabic ? 'منظومة Safety Zone لمكافحة الطائرات المسيّرة' : 'Safety Zone counter-drone protection system'}
            fill
            priority
            sizes="100vw"
            placeholder="empty"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.72)_42%,rgba(15,31,46,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.18),transparent_30%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_380px] lg:items-center">
              <div className="space-y-7">
                <p className="brand-kicker text-xs font-bold" role="doc-subtitle">
                  {isArabic ? 'حلول مكافحة التسلل الجوي' : 'Counter-drone protection'}
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                  {isArabic
                    ? 'Safety Zone لحماية الخصوصية والأمن من تهديدات الطائرات المسيّرة.'
                    : 'Safety Zone protects privacy and security from unauthorized drone threats.'}
                </h1>
                <p className="max-w-3xl text-xl leading-relaxed text-white/80">
                  {isArabic
                    ? 'نطوّر منظومة متعددة الطبقات تجمع بين الرصد المبكر، التحليل الذكي، الإعاقة الإلكترونية، والاعتراض الميداني لحماية المجمعات السكنية والمقار الحساسة والمنشآت الحيوية.'
                    : 'We deliver a layered anti-drone architecture that combines early detection, intelligent analysis, electronic disruption, and field interception for compounds, sensitive sites, and critical facilities.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${lang}/contact`}
                    className="rounded-full bg-white px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-slate-100"
                  >
                    {isArabic ? 'اطلب تقييم الموقع' : 'Request Site Assessment'}
                  </Link>
                  <Link
                    href={`/${lang}/services/consultations`}
                    className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/15"
                  >
                    {isArabic ? 'ابدأ باستشارة أمنية' : 'Start with a consultation'}
                  </Link>
                </div>
                <div className="grid gap-4 pt-4 sm:grid-cols-3">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                      <div className="text-2xl font-black text-white">{item.value}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Radar Card (Client Component) */}
              <AnimatedRadarCard />
            </div>
          </div>
        </section>

        {/* ── QUICK PILLS ── */}
        <section className="bg-white py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Radar,
                  title: isArabic ? 'رصد المجال الجوي' : 'Airspace monitoring',
                  description: isArabic ? 'تتبع مستمر للتهديدات الجوية منخفضة الارتفاع.' : 'Persistent monitoring for low-altitude aerial threats.'
                },
                {
                  icon: Activity,
                  title: isArabic ? 'تحليل وإسناد قرار' : 'Analysis and decision support',
                  description: isArabic ? 'تصنيف الإشارات والسلوك لتحديد أولويات الاستجابة.' : 'Signal and behavior classification to prioritize response.'
                },
                {
                  icon: Crosshair,
                  title: isArabic ? 'تنفيذ استجابة مضادة' : 'Countermeasure execution',
                  description: isArabic ? 'انتقال من التنبيه إلى التعطيل أو الاحتواء وفق السيناريو.' : 'Move from alert to disruption or containment based on scenario.'
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-primary/10 bg-slate-50 px-5 py-5 shadow-[0_12px_28px_rgba(15,31,46,0.04)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── ANIMATED STATS STRIP ── */}
        <StatsStrip isArabic={isArabic} />

        {/* ── 3 PILLARS ── */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-[0_16px_40px_rgba(15,31,46,0.06)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-slate-900">{pillar.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW TIMELINE ── */}
        <WorkflowTimeline />

        {/* ── CAPABILITIES + USE CASES ── */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
            <div>
              <p className="brand-kicker text-xs font-bold">{isArabic ? 'قدرات المنظومة' : 'System capabilities'}</p>
              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                {isArabic ? 'حماية عملية مبنية على الدمج بين التقنية والاستجابة.' : 'Practical protection built around technology and response.'}
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-primary/10 bg-white p-6 shadow-[0_14px_36px_rgba(15,31,46,0.05)]">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="brand-shell rounded-[2rem] p-4">
              <div className="rounded-[1.5rem] border border-white/20 bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3 text-accent">
                  <Waves className="h-5 w-5" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em]">{isArabic ? 'حالات الاستخدام' : 'Use cases'}</p>
                </div>
                <div className="mt-6 space-y-4">
                  {useCases.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROTECTION RANGE MAP ── */}
        <ProtectionRangeMap isArabic={isArabic} />

        {/* ── TECHNOLOGY SHOWCASE ── */}
        <TechShowcase isArabic={isArabic} />

        {/* ── SOLUTION TIERS ── */}
        <SolutionTiers isArabic={isArabic} lang={lang} />

        {/* ── CASE STUDIES ── */}
        <CaseStudies isArabic={isArabic} />

        {/* ── SOCIAL PROOF / CERTIFICATIONS ── */}
        <SocialProof isArabic={isArabic} />

        {/* ── FAQ ── */}
        <FAQSection isArabic={isArabic} />

        {/* ── FINAL CTA ── */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {isArabic ? 'هل تريد حماية المجال الجوي لموقعك؟' : 'Need to secure the airspace around your site?'}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {isArabic
                ? 'نبدأ بتقييم التهديدات، نطاق الحماية المطلوب، ومتطلبات الامتثال قبل تصميم حل Safety Zone المناسب لطبيعة موقعك.'
                : 'We start with a threat assessment, protection perimeter review, and compliance requirements before designing the right Safety Zone model for your site.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/15"
              >
                {isArabic ? 'العودة إلى الخدمات' : 'Back to Services'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA Bar */}
      <FloatingCTA isArabic={isArabic} lang={lang} />

      <Footer />
    </>
  )
}