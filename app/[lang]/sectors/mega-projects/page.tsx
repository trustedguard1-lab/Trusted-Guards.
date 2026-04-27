import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

const sectorData = {
  name: 'Mega Projects',
  description: 'Purpose-built security frameworks for the Kingdom\'s most ambitious developments — protecting people, assets, and timelines at scale.',
  focusAreas: [
    { title: 'Perimeter & Access Control', text: 'Multi-zone fencing, checkpoint management, and vehicle-screening systems for sprawling project sites.' },
    { title: 'Asset & Material Protection', text: 'GPS-tagged inventory tracking, secure storage compounds, and anti-theft patrols for high-value equipment.' },
    { title: 'Site-Wide Surveillance', text: 'Drone overflights, thermal cameras, and command-center integration covering every phase of construction.' },
    { title: 'Workforce Management', text: 'Biometric attendance, labor-camp security, and credential verification for thousands of on-site workers.' },
    { title: '24/7 Operations', text: 'Shift-rotation planning and real-time incident dashboards that keep security seamless across all hours.' },
    { title: 'HSE Integration', text: 'Security protocols aligned with health, safety, and environment standards required by Vision 2030 giga-projects.' },
  ],
  stats: [
    { value: '10+', label: 'Giga-Projects' },
    { value: '50K+', label: 'Workers Secured' },
    { value: '0', label: 'Security Breaches' },
  ],
  ctaText: 'Launching a large-scale project? Let our team design a security architecture that scales with you.',
  ctaButton: 'Contact Us',
  backText: 'All Sectors',
}

export default async function MegaProjectsSectorPage() {
  const data = sectorData
  const lang = 'en'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white" dir="ltr">

        {/* ── Hero ── */}
        <section className="relative h-[520px] md:h-[620px] lg:h-[720px] w-full overflow-hidden">
          <Image src="/images/القطاعات/المشاريع العملاقة.png" alt={data.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-16 md:pb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">{data.name}</h1>
          </div>
        </section>

        {/* ── Intro + Stats ── */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-8">
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">{data.description}</p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {data.stats.map((s) => (
                <div key={s.label} className="border-t-2 border-primary/20 pt-5">
                  <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Focus Areas ── */}
        <section className="bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.focusAreas.map((area, i) => (
                <div key={i} className="group rounded-2xl bg-white p-8 ring-1 ring-slate-100 transition-shadow hover:shadow-lg">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary/40">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-lg text-slate-600">{data.ctaText}</p>
              <Link href={`/${lang}/contact`} className="shrink-0 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary/90">{data.ctaButton}</Link>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link href={`/${lang}/sectors`} className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">← {data.backText}</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
