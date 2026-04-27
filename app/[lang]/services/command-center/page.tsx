import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { CommandCenterServicesCarousel } from '@/components/CommandCenterServicesCarousel'
import { CommandCenterSolutionsShowcase } from '@/components/CommandCenterSolutionsShowcase'
import Image from 'next/image'

interface CommandCenterPageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: CommandCenterPageProps) {
  return {
    title: 'Command Center - Trusted Guards',
    description: 'An advanced platform for operations management, monitoring, and coordinated response through a unified command center.',
  }
}

export default async function CommandCenterPage({ params }: CommandCenterPageProps) {
  return (
    <>
      <Header />
      <main dir="ltr" className="bg-white text-slate-950">
        <section className="relative overflow-hidden bg-[#0f2233] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/security_operator_black.png"
              alt="Command center operator"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,43,0.84)_0%,rgba(11,29,43,0.58)_36%,rgba(148,163,184,0.18)_100%)]" />
          <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 py-14 sm:px-6 md:min-h-[78vh] md:py-18 lg:px-8 lg:py-24">
            <div className={`max-w-3xl rounded-[1.6rem] border border-white/15 bg-[linear-gradient(180deg,rgba(11,29,43,0.76),rgba(11,29,43,0.48))] px-7 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm text-left animate-fade-in-up-fill md:px-10 md:py-8`}>
              <p className="text-sm tracking-[0.24em] text-[#cbd5e1] md:text-base">
                TRUSTED GUARDS
              </p>
              <h1 className="mt-4 text-5xl font-light leading-[1.08] md:text-7xl lg:text-[5.25rem]">
                Command Center
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#cbd5e1] md:text-lg">
                A centralized platform for monitoring and managing all security and operational activities, ensuring real-time visibility and coordinated response across your entire infrastructure.
              </p>
            </div>
          </div>
        </section>

        <CommandCenterServicesCarousel />

        <section className="relative overflow-hidden bg-[#f8fafc] py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(148,163,184,0.18),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid gap-10 lg:grid-cols-[0.9fr_minmax(0,1.1fr)] lg:items-center lg:grid-cols-[minmax(0,1.1fr)_0.9fr]`}>
              <div className={`text-left animate-fade-in-up-fill`}>
                <p className="text-sm tracking-[0.26em] text-[#64748b]">
                  OPERATIONS OVERVIEW
                </p>
                <h2 className="mt-5 text-4xl font-light leading-[1.25] text-[#0f2335] md:text-6xl">
                  A unified visual system for tracking incidents, performance, and site status in real time.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748b]">
                  With clear KPIs, instant alerts, and direct connections to field systems, teams gain full operational awareness and act faster with better precision.
                </p>
              </div>

              <div className={`grid gap-4 sm:grid-cols-2 animate-slide-in-right-fill`}>
                <div className="rounded-[1.4rem] border border-[#dbe3ec] bg-white p-7 shadow-[0_18px_40px_rgba(15,31,46,0.05)]">
                  <p className="text-sm tracking-[0.22em] text-[#64748b]">ACTIVE INCIDENTS</p>
                  <div className="mt-4 text-6xl font-light text-[#0f2335]">
                    <AnimatedCounter end={18} duration={1600} />
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-[#dbe3ec] bg-white p-7 shadow-[0_18px_40px_rgba(15,31,46,0.05)]">
                  <p className="text-sm tracking-[0.22em] text-[#64748b]">CONNECTED SITES</p>
                  <div className="mt-4 text-6xl font-light text-[#0f2335]">
                    <AnimatedCounter end={32} duration={1700} />
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-[#dbe3ec] bg-white p-7 shadow-[0_18px_40px_rgba(15,31,46,0.05)] sm:col-span-2">
                  <p className="text-sm tracking-[0.22em] text-[#64748b]">LIVE REFRESH WINDOW</p>
                  <div className="mt-4 text-6xl font-light text-[#0f2335]">
                    <AnimatedCounter end={6} suffix="s" duration={1400} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#64748b]">
                    Live operational updates that support rapid monitoring and direct handling of critical events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CommandCenterSolutionsShowcase />
      </main>
      <Footer />
    </>
  )
}
