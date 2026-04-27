import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TechnologyCardsSection } from '@/components/TechnologyCardsSection'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export async function generateMetadata() {
  return {
    title: 'Technology - Trusted Guards',
    description: 'Advanced technological solutions and smart systems to protect your digital assets'
  }
}

export default async function TechnologyPage() {
  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Hero Section with Background Image */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/pexels-clickerhappy-539124.jpg"
            alt="Technology"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-700" />
          
          <div className="relative z-10 text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance">
              Technology
            </h1>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm">Scroll Down</span>
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-left">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Advanced Technology Solutions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Technology forms the core of modern security structures. We use advanced systems, innovative technological solutions, intelligent analysis, and comprehensive integration through our progressive strategies and advanced solutions to deliver reliable and effective protection for the future.
            </p>
          </div>
        </section>

        {/* Technology Services Grid */}
        <TechnologyCardsSection />

        {/* Why Choose Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">
            Why Us?
          </h2>

          <div className="space-y-12">
            {[
              {
                num: '01',
                title: 'Complete Integration',
                desc: 'Unique combination of advanced technology and practical expertise'
              },
              {
                num: '02',
                title: 'Expert Team',
                desc: 'Highly trained professionals at international standards'
              },
              {
                num: '03',
                title: 'Custom Solutions',
                desc: 'Tailored solutions designed for each client\'s needs'
              },
              {
                num: '04',
                title: 'Proven Experience',
                desc: 'Over 15 years of excellence and reliability'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start pb-8 border-b border-gray-300 last:border-b-0">
                <div className="text-5xl md:text-6xl font-light text-gray-300 flex-shrink-0 w-20">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-[#09131d] py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_28%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-center">
              <div className="text-left">
                <p className="text-sm font-medium tracking-[0.26em] text-blue-200/80">
                  ADVANCED READINESS
                </p>
                <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.15] md:text-6xl">
                  Ready to elevate your security technology environment?
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
                  We design integrated solutions that combine smart systems, live analytics, and operational integration to deliver clearer visibility, faster response, and scalable protection.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/en/contact">
                    <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#09131d] transition-all duration-300 hover:bg-slate-200">
                      Request Consultation
                    </button>
                  </Link>
                  <Link href="/en/services">
                    <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white/10">
                      Browse Services
                    </button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                  <p className="text-sm tracking-[0.24em] text-slate-400">
                    CONNECTED SOLUTIONS
                  </p>
                  <div className="mt-4 text-6xl font-light text-white md:text-7xl">
                    <AnimatedCounter end={12} suffix="+" duration={1800} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Integrated surveillance, control, access, and analytics systems within one operating architecture.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                    <p className="text-sm tracking-[0.22em] text-slate-400">LIVE VISIBILITY</p>
                    <div className="mt-4 text-5xl font-light text-blue-200">
                      <AnimatedCounter end={24} suffix="/7" duration={1900} />
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                    <p className="text-sm tracking-[0.22em] text-slate-400">OPERATIONAL EFFICIENCY</p>
                    <div className="mt-4 text-5xl font-light text-blue-200">
                      <AnimatedCounter end={98} suffix="%" duration={2000} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
