import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

const sectorData = {
  name: 'Entertainment',
  description: 'Integrated security solutions for entertainment venues and flagship events — ensuring every guest enjoys a safe, seamless experience from entry to exit.',
  focusAreas: [
    { title: 'Venue Operations', text: 'End-to-end security planning for theaters, arenas, and theme parks — from access screening to post-event dispersal.' },
    { title: 'Crowd Management', text: 'Data-driven crowd-flow strategies that maintain safety while keeping the energy of live events intact.' },
    { title: 'Guest & VIP Protection', text: 'Discreet close-protection details for high-profile guests, artists, and dignitaries attending events.' },
    { title: 'Smart Surveillance', text: 'Real-time video analytics and threat detection across every corner of the venue.' },
    { title: 'Emergency Response', text: 'Rapid-deployment teams trained for medical, fire, and evacuation scenarios specific to high-density environments.' },
    { title: 'Staff Readiness', text: 'Ongoing simulation drills and certification programs tailored to entertainment-sector risks.' },
  ],
  stats: [
    { value: '200+', label: 'Events Secured' },
    { value: '1M+', label: 'Guests Protected' },
    { value: '0', label: 'Major Incidents' },
  ],
  ctaText: 'Planning a major event or managing a venue? Let us design a security blueprint tailored to your audience.',
  ctaButton: 'Contact Us',
  backText: 'All Sectors',
}

export default async function EntertainmentSectorPage() {
  const data = sectorData
  const lang = 'en'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white" dir="ltr">

        {/* ── Hero ── */}
        <section className="relative h-[520px] md:h-[620px] lg:h-[720px] w-full overflow-hidden">
          <Image src="/images/القطاعات/الترفيه.png" alt={data.name} fill className="object-cover" priority />
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
