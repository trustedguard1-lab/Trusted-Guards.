import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceTabsClient } from '@/components/ServiceTabsClient'

interface WhyChooseItem {
  number: string
  title: string
  description: string
}

interface TabService {
  icon: string
  title: string
  description: string
  points: string[]
}

interface ServiceTab {
  label: string
  sublabel: string
  services: TabService[]
}

interface FacilitiesContent {
  intro: {
    title: string
    description: string
  }
  whyChoose: {
    title: string
    items: WhyChooseItem[]
  }
  tabs: ServiceTab[]
  contactSection: {
    title: string
    description: string
    buttonText: string
  }
}

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
    title: 'Facilities Management - Trusted Guards',
    description: 'Comprehensive facilities management solutions designed to enhance operational efficiency',
  }
}

const getContentData = (): FacilitiesContent => ({
  intro: {
    title: 'Comprehensive facilities management solutions designed to enhance operational efficiency and support sustainability across all environments.',
    description: 'Services cover daily operations, maintenance, cleaning, and space optimization within an operating model focused on reliability, efficiency, and sustainability.',
  },
  whyChoose: {
    title: 'Why Choose Trusted Guards Facilities Management Services?',
    items: [
      { number: '01', title: 'Reliable', description: 'Consistent, high-quality services with a strong focus on safety and efficiency.' },
      { number: '02', title: 'Efficient', description: 'Technology-driven solutions that improve performance and reduce cost.' },
      { number: '03', title: 'Sustainable', description: 'Environmentally responsible practices that support long-term goals.' },
      { number: '04', title: 'Integrated', description: 'Comprehensive solutions tailored to each facility’s needs.' },
    ],
  },
  tabs: [
    {
      label: 'Hard Services',
      sublabel: 'Building maintenance and technical infrastructure',
      services: [
        {
          icon: 'wrench',
          title: 'Mechanical & Electrical Maintenance',
          description: 'Management of critical building systems with reliable operational continuity.',
          points: ['HVAC systems', 'Plumbing systems', 'Electrical systems', 'Fire and life safety systems'],
        },
        {
          icon: 'building',
          title: 'Building Structure Maintenance',
          description: 'Structural and operational maintenance program for buildings, facades, and interior environments.',
          points: ['Building maintenance and repairs (structure, roofs, floors, facades)', 'Facade, roof, and paint maintenance', 'Sustainability and efficiency programs', 'Staff participation and training'],
        },
        {
          icon: 'sparkles',
          title: 'Using Energy Data for Improvement',
          description: 'Using operational data to improve performance and reduce operating costs.',
          points: ['Performance analytics', 'Environmental maintenance', 'Automation adjustments and cost-saving strategies', 'Security systems maintenance'],
        },
      ],
    },
    {
      label: 'Soft Services',
      sublabel: 'Operational support and cleaning',
      services: [
        {
          icon: 'sparkles',
          title: 'Cleaning & Maintenance Services',
          description: 'Daily support that preserves the facility image and workplace quality.',
          points: ['Daily cleaning and sanitization', 'Waste management and recycling services'],
        },
        {
          icon: 'bug',
          title: 'Pest Control & Hygiene Services',
          description: 'Programs focused on public health protection and hygiene standards.',
          points: ['Inspection and preventive treatments', 'Safe pest-control implementation'],
        },
        {
          icon: 'trees',
          title: 'Landscape & Grounds Maintenance',
          description: 'Improving external appearance and maintaining surrounding spaces.',
          points: ['Routine maintenance', 'Grounds management and coordination'],
        },
        {
          icon: 'concierge',
          title: 'Reception & Concierge Services',
          description: 'Enhancing visitor experience and front-desk operations.',
          points: ['Reception and visitor management', 'Professional concierge support'],
        },
        {
          icon: 'utensils',
          title: 'Food & Catering Services',
          description: 'Food service operations for offices and daily facility support.',
          points: ['High-quality food and beverage services', 'Kitchen operations and safety checks'],
        },
        {
          icon: 'car',
          title: 'Vehicle Washing Services',
          description: 'On-site services to keep fleet vehicles clean and presentable.',
          points: ['On-site car washing', 'Use of eco-friendly products'],
        },
      ],
    },
    {
      label: 'Space Management',
      sublabel: 'and optimization',
      services: [
        {
          icon: 'truck',
          title: 'Office Moving & Relocation Services',
          description: 'Planning and executing office relocations while protecting business continuity.',
          points: ['Office relocation with minimal disruption to operations'],
        },
      ],
    },
  ],
  contactSection: {
    title: 'Contact Us',
    description: 'Our team is ready to support you and we are happy to listen to your needs and help you achieve your goals.',
    buttonText: 'Contact',
  },
})

export default async function FacilitiesPage({ params }: PageProps) {
  const resolvedParams = await params
  const data = getContentData()

  return (
    <>
      <Header />
      <main dir="ltr">
        <HeroSection />
        <ServiceTabsClient data={data} />
        <WhyChooseSection data={data} />
        <ContactSection data={data} lang={resolvedParams.lang} />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100">
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/security_technician_black.png"
            alt="Facilities Management"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_24%]"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,30,0.18),rgba(10,20,30,0.48))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 items-start">
        <div className="max-w-2xl text-left">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Facilities Management
          </h1>
          <div className="space-y-2 text-sm text-white/80 md:text-base">
            <p>
              Trusted Guards / Services / Security Services / Facilities Management
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 text-accent text-4xl left-8" aria-hidden="true">
        &raquo;
      </div>
    </section>
  )
}

function WhyChooseSection({ data }: { data: FacilitiesContent }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1.1fr)]">
          <div className="lg:order-2 space-y-0">
            {data.whyChoose.items.map((item, index) => (
              <div key={index} className="grid grid-cols-[120px_minmax(0,1fr)] items-start gap-6 border-b border-[#dbe3ec] py-8 first:pt-0">
                <div className="text-6xl font-light leading-none text-[#cbd5e1] md:text-7xl">{item.number}</div>
                <div className="text-left">
                  <h3 className="text-3xl font-medium text-[#10283c]">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#64748b] md:text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-left lg:order-1">
            <p className="text-sm tracking-[0.26em] text-[#94a3b8]">INTEGRATED SERVICES</p>
            <h2 className="mt-5 text-4xl font-light leading-[1.35] text-[#10283c] md:text-6xl">{data.whyChoose.title}</h2>
            <p className="mt-8 text-lg leading-9 text-[#64748b]">{data.intro.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection({ data, lang }: { data: FacilitiesContent; lang: string }) {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-[#10283c]">{data.contactSection.title}</h2>
        <p className="mb-8 text-[#64748b]">{data.contactSection.description}</p>
        <Link href={`/${lang}/contact`}>
          <button className="rounded-lg bg-[#10283c] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#183a56]">
            {data.contactSection.buttonText}
          </button>
        </Link>
      </div>
    </section>
  )
}
