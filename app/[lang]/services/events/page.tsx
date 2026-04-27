import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { EventSecurityCardsSection } from '@/components/EventSecurityCardsSection'
import { ShieldCheck, Users, DoorOpen, Eye, ClipboardCheck, Landmark, Theater, Dumbbell, Store, UserCheck, ShieldHalf, Settings, BadgeCheck } from 'lucide-react'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Event Security Services - Trusted Guards',
    description: 'Integrated security solutions for all types of events and occasions with specialized security teams and modern technologies'
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default async function EventSecurityPage({ params }: PageProps) {
  const services = [
    {
      number: '01',
      icon: <ShieldCheck className="h-7 w-7" />,
      titleEn: 'Risk Assessment & Security Planning',
      descEn: 'Conduct comprehensive assessments of potential security risks and develop customized security plans for each event.',
    },
    {
      number: '02',
      icon: <Users className="h-7 w-7" />,
      titleEn: 'On-Site Security Personnel',
      descEn: 'Deploy highly trained officers to manage crowds, monitor activities, and respond to evolving situations.',
    },
    {
      number: '03',
      icon: <DoorOpen className="h-7 w-7" />,
      titleEn: 'Access Control & Screening',
      descEn: 'Manage entry points with prohibited item screening and credential/invitation verification.',
    },
    {
      number: '04',
      icon: <Eye className="h-7 w-7" />,
      titleEn: 'Surveillance & Monitoring',
      descEn: 'Use live detection tools and advanced surveillance systems for continuous monitoring of critical areas and crowd movements.',
    },
    {
      number: '05',
      icon: <ClipboardCheck className="h-7 w-7" />,
      titleEn: 'Post-Event Security Review',
      descEn: 'Evaluate security performance, identify improvement areas, and provide recommendations for future events.',
    },
  ]

  const eventTypes = [
    { titleEn: 'Conferences & Meetings', icon: <Users className="h-8 w-8" /> },
    { titleEn: 'Government Events', icon: <Landmark className="h-8 w-8" /> },
    { titleEn: 'Entertainment Events', icon: <Theater className="h-8 w-8" /> },
    { titleEn: 'Sports Events', icon: <Dumbbell className="h-8 w-8" /> },
    { titleEn: 'Trade Exhibitions', icon: <Store className="h-8 w-8" /> },
  ]

  const importanceItems = [
    { titleEn: 'Protect Guests, Staff & Assets', icon: <UserCheck className="h-8 w-8" /> },
    { titleEn: 'Minimize Risks & Liabilities', icon: <ShieldHalf className="h-8 w-8" /> },
    { titleEn: 'Ensure Smooth Operations', icon: <Settings className="h-8 w-8" /> },
    { titleEn: 'Enhance Reputation & Trust', icon: <BadgeCheck className="h-8 w-8" /> },
  ]

  return (
    <div className="ltr" dir="ltr">
      <Header />
      
      {/* ===== HERO ===== */}
      <section className="relative w-full h-[420px] md:h-[540px] lg:h-[620px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/security_team_black_v2.png"
          alt="Event Security Services"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f2e]/80 via-[#1a3a52]/40 to-[#1a3a52]/20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Event Security Services
          </h1>
          <div className="mt-6 h-1 w-24 bg-[#b8c4d1] mx-auto rounded-full" />
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-snug text-[#1a3a52] mb-8">
            Comprehensive security solutions are essential for ensuring the safety and success of any event.
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-[2] max-w-4xl mx-auto">
            While meticulous planning forms the foundation of effective protection, the unpredictable nature of events requires security teams capable of responding swiftly and decisively to changing situations. Services include risk assessment, access control, crowd management, emergency response, and surveillance — all designed to protect attendees, staff, and assets. By integrating advanced security technologies with experienced professionals, events are managed with precision, maintaining a safe and seamless environment from start to finish.
          </p>
        </div>
      </section>

      {/* ===== SERVICES (numbered list) ===== */}
      <section className="bg-[#f0f3f7] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between mb-14 flex-row-reverse">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] text-left">
              Our Services
            </h2>
            <span className="text-6xl md:text-8xl font-bold text-[#2d5a7b]/15 leading-none">01</span>
          </div>
          
          <div className="space-y-0">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 py-7 border-b border-[#b8c4d1]/40 last:border-b-0"
              >
                <div className="text-[#2d5a7b]/60 mt-1 shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0f1f2e] mb-1.5">
                    {service.titleEn}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT TYPES ===== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] text-center mb-14">
            Covered Event Types
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-between rounded-2xl border border-[#b8c4d1]/30 bg-white px-4 py-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#2d5a7b]/30 min-h-[160px]"
              >
                <h3 className="text-sm md:text-base font-semibold text-[#0f1f2e] mb-auto">
                  {type.titleEn}
                </h3>
                <div className="text-[#b8c4d1] mt-6 group-hover:text-[#2d5a7b] transition-colors duration-300">
                  {type.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS (Fire Rescue style hover-expand cards) ===== */}
      <EventSecurityCardsSection />

      {/* ===== IMPORTANCE ===== */}
      <section className="bg-[#f0f3f7] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] text-center mb-14">
            Importance of Professional Event Security
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {importanceItems.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-between rounded-2xl border border-[#b8c4d1]/30 bg-white px-5 py-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#2d5a7b]/30 min-h-[160px]"
              >
                <h3 className="text-sm md:text-base font-semibold text-[#0f1f2e] mb-auto">
                  {item.titleEn}
                </h3>
                <div className="text-[#b8c4d1] mt-6 group-hover:text-[#2d5a7b] transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white py-16 md:py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
            Stay in Touch
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-10">
            To learn more about Trusted Guards, please contact us
          </p>
          <Link href={`/en/contact`}>
            <Button 
              variant="outline"
              className="border-[#1a3a52] text-[#1a3a52] hover:bg-[#1a3a52] hover:text-white px-10 py-3 text-base font-medium rounded-none transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}