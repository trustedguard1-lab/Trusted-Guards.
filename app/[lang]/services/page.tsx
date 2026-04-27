import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

interface ServiceItem {
  symbol: string
  number: string
  titleEn: string
  descEn: string
  color: string
  image: string
  href: string
  featuresEn: string[]
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Services - Trusted Guards',
    description: 'Explore Trusted Guards security services with an institutional presentation and real operational imagery.'
  }
}

const getServices = (): ServiceItem[] => [
  {
    symbol: '01',
    number: '01',
    titleEn: 'Technology',
    descEn: 'Advanced technology solutions including smart surveillance, drones, and integrated systems.',
    color: 'from-primary to-secondary',
    image: '/images/pexels-clickerhappy-539124.jpg',
    href: 'technology',
    featuresEn: [
      'Smart surveillance analytics',
      'Security drones for wide coverage',
      'Integrated command systems',
      'Real-time detection and response'
    ]
  },
  {
    symbol: '02',
    number: '02',
    titleEn: 'Fire Fighting & Rescue',
    descEn: 'Trained fire and rescue teams with field equipment and rapid emergency response.',
    color: 'from-secondary to-accent',
    image: '/images/firefighter_black.png',
    href: 'fire-rescue',
    featuresEn: [
      'Field-qualified firefighters',
      'Intervention and evacuation plans',
      'Specialized rescue equipment',
      '24/7 operational readiness'
    ]
  },
  {
    symbol: '03',
    number: '03',
    titleEn: 'Facilities Management',
    descEn: 'Integrated operational management for sites, facilities, and infrastructure with continuous oversight.',
    color: 'from-slate-700 to-primary',
    image: '/images/security_technician_black.png',
    href: 'facilities-management',
    featuresEn: [
      'Operations and maintenance teams',
      'Performance and readiness tracking',
      'Operational reporting',
      'Asset and facility coordination'
    ]
  },
  {
    symbol: '04',
    number: '04',
    titleEn: 'Marine Protection',
    descEn: 'Marine and coastal protection services for ports, maritime assets, and critical zones.',
    color: 'from-primary to-accent',
    image: '/images/service-marine.jpg',
    href: 'marine',
    featuresEn: [
      'Port and coastal protection',
      'Maritime monitoring and control',
      'Risk and compliance assessment',
      'Marine emergency response'
    ]
  },
  {
    symbol: '05',
    number: '05',
    titleEn: 'VIP Protection',
    descEn: 'Executive and personal protection for VIPs, delegations, and sensitive missions.',
    color: 'from-secondary to-slate-600',
    image: '/images/3.png',
    href: 'vip-protection',
    featuresEn: [
      'Mission risk assessment',
      'Executive escort protection',
      'Delegation and travel security',
      'Tailored protection plans'
    ]
  },
  {
    symbol: '06',
    number: '06',
    titleEn: 'Event Security',
    descEn: 'Professional security for events, conferences, and gatherings with attendance and risk management.',
    color: 'from-accent to-secondary',
    image: '/images/security_team_black_v2.png',
    href: 'events',
    featuresEn: [
      'Crowd and access management',
      'Security deployment plans',
      'Live site monitoring',
      'Rapid response coordination'
    ]
  },
  {
    symbol: '07',
    number: '07',
    titleEn: 'Security Consultations',
    descEn: 'Specialized consulting for risk assessment, strategy development, and operational readiness improvement.',
    color: 'from-primary to-accent',
    image: '/images/project-monitoring-center.jpg',
    href: 'consultations',
    featuresEn: [
      'Risk and threat assessments',
      'Strategies and roadmaps',
      'Governance and compliance',
      'Implementation support'
    ]
  },
  {
    symbol: '08',
    number: '08',
    titleEn: 'Safety Zone',
    descEn: 'A professional counter-drone service combining early detection, electronic disruption, and graduated field interception.',
    color: 'from-slate-900 to-primary',
    image: '/images/safety_zone_hyper_realistic_dome.png',
    href: 'safety-zone',
    featuresEn: [
      'Detection and tracking of small aerial targets',
      'Disruption of command and navigation signals',
      'Integration with command and control rooms',
      'Designed around site sensitivity'
    ]
  },
  {
    symbol: '09',
    number: '09',
    titleEn: 'Command & Control Center',
    descEn: 'A centralized platform for monitoring and managing all security and operational activities.',
    color: 'from-primary to-slate-700',
    image: '/images/security_operator_black.png',
    href: 'command-center',
    featuresEn: [
      'Integrated systems platform',
      'Real-time operations management',
      'Executive reporting and analytics',
      'Crisis and emergency coordination'
    ]
  }
]

export default async function ServicesPage({ params }: PageProps) {
  const resolvedParams = await params
  const services = getServices()

  return (
    <>
      <Header />
      <main dir="ltr">
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 opacity-20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/15 opacity-15 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-center">
              <div className="space-y-6">
                <p className="brand-kicker text-xs font-bold">
                  Services
                </p>
                <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-6xl">
                  Real security services with a clear institutional structure.
                </h1>
                <p className="max-w-3xl text-xl leading-relaxed text-slate-600">
                  We deliver an integrated service portfolio spanning technology, fire and rescue, facilities, marine protection, VIP protection, event security, counter-drone protection, and command centers.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    'Real operational imagery',
                    'Brand-aligned palette',
                    'Clear service presentation',
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brand-shell overflow-hidden rounded-[2rem] p-4">
                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/project-monitoring-center.jpg"
                    alt="Operations and monitoring services"
                    fill
                    sizes="420px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,46,0.12),rgba(15,31,46,0.72))]" />
                  <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/15 bg-black/20 px-5 py-4 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/90">
                      Operations room
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      A real operations environment supporting field and technical services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Real service imagery',
                  desc: 'Each card uses an image that represents the actual service.'
                },
                {
                  title: 'Logo-based color identity',
                  desc: 'Deep navy, silver, and white across the full experience.'
                },
                {
                  title: 'Clear institutional structure',
                  desc: 'A structured presentation of services, operational capability, and execution readiness.'
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-primary/10 bg-primary/[0.03] px-6 py-6 shadow-[0_12px_28px_rgba(15,31,46,0.05)]">
                  <h2 className="text-lg font-bold text-primary">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.href} className="group overflow-hidden border border-primary/10 bg-white shadow-[0_18px_45px_rgba(15,31,46,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_22px_60px_rgba(15,31,46,0.11)]">
                  <div className={`relative h-56 overflow-hidden ${service.href === 'vip-protection' ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),rgba(15,31,46,0.12)_48%,rgba(15,31,46,0.3)_100%)]' : ''}`}>
                    <>
                      <Image
                        src={service.image}
                        alt={service.titleEn}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`${service.href === 'facilities-management' ? 'object-cover object-[58%_24%] group-hover:scale-105' : service.href === 'vip-protection' ? 'object-cover object-[62%_24%] group-hover:scale-105' : 'object-cover group-hover:scale-105'} transition-transform duration-700`}
                      />
                      <div className={`absolute inset-0 ${service.href === 'facilities-management' ? 'bg-[linear-gradient(180deg,rgba(15,31,46,0.06),rgba(15,31,46,0.78))]' : service.href === 'vip-protection' ? 'bg-[linear-gradient(180deg,rgba(15,31,46,0.1),rgba(15,31,46,0.9))]' : 'bg-[linear-gradient(180deg,rgba(15,31,46,0.08),rgba(15,31,46,0.78))]'}`} />
                    </>
                    <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/90">{service.symbol}</p>
                        <h2 className="mt-2 text-2xl font-bold">{service.titleEn}</h2>
                      </div>
                      <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-sm">
                        {service.number}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl text-primary">{service.titleEn}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardDescription className="mb-6 text-base font-medium text-slate-700">
                      {service.descEn}
                    </CardDescription>

                    <div className="mb-6 space-y-3">
                      {service.featuresEn.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className={`mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/${resolvedParams.lang}/services/${service.href}`} className="inline-block">
                      <button className={`rounded-lg bg-gradient-to-r ${service.color} px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                        Learn More
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/images/project-security-team.jpg"
                  alt="Field security team"
                  fill
                  sizes="360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,46,0.08),rgba(15,31,46,0.75))]" />
              </div>

              <div>
                <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-left">
                  Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    {
                      title: 'Professional Team',
                      desc: 'Highly trained personnel with military and police backgrounds.'
                    },
                    {
                      title: 'Advanced Tech',
                      desc: 'State-of-the-art surveillance and integrated monitoring systems.'
                    },
                    {
                      title: '24/7 Support',
                      desc: 'Round-the-clock command center monitoring and emergency response.'
                    },
                    {
                      title: 'Custom Solutions',
                      desc: 'Tailored security strategies designed for your specific needs.'
                    }
                  ].map((item) => (
                    <div key={item.title} className="space-y-4">
                      <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
                      <p className="text-lg leading-relaxed text-slate-300">{item.desc}</p>
                    </div>
                  ))}
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
