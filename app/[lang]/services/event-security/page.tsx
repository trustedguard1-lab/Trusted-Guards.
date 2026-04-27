import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

const getContentData = () => {
  return {
    pageTitle: 'Event Security Services',
    heroTitle: 'Event Security Services',
    breadcrumb: 'Trusted Guards / Security Services / Event Security',
    mainTitle: 'Comprehensive security solutions are essential to ensure the safety and success of any event.',
    mainDescription: 'While careful security planning forms the basis of actual protection, the unpredictable nature of events requires security teams capable of rapid response. The fundamental right of participants and attendees at events is to feel safe, and our direct responsibility is to protect attendees, staff, and assets. By integrating advanced security technologies with experienced professionals, events are managed with high professionalism from start to finish.',
    eventTypesTitle: 'Types of Events Covered',
    eventTypes: [
      { title: 'Conferences & Meetings' },
      { title: 'Sports Events' },
      { title: 'Entertainment Events' },
      { title: 'Government Events' },
      { title: 'Trade Shows' }
    ],
    importanceTitle: 'Importance of Dynamic Event Security',
    importancePoints: [
      { title: 'Protecting Attendees, Staff, and Assets' },
      { title: 'Ensuring Smooth Operations' },
      { title: 'Minimizing Risks and Liabilities' },
      { title: 'Enhancing Reputation and Trust' }
    ],
    servicesTitle: 'Our Services',
    services: [
      {
        title: 'Risk Assessment & Security Planning',
        description: 'Conducting comprehensive security risk assessments and developing customized security plans for each event.'
      },
      {
        title: 'On-site Security Personnel',
        description: 'Deploying highly trained officers to manage crowds, monitor activities, and respond to changing situations.'
      },
      {
        title: 'Access Control & Screening',
        description: 'Implementing strict access control protocols and screening procedures to ensure only authorized individuals enter.'
      },
      {
        title: 'VIP Protection Services',
        description: 'Providing discreet and professional close protection for high-profile guests and dignitaries.'
      },
      {
        title: 'Crowd Management & Flow Control',
        description: 'Strategically managing crowd dynamics to prevent overcrowding and ensure safe movement.'
      },
      {
        title: 'Emergency Response Coordination',
        description: 'Coordinating with local authorities and emergency services for rapid response in case of incidents.'
      }
    ],
    integratedSolutionsTitle: 'Integrated Security Solutions',
    integratedDescription: 'Our security operations rely on advanced technology, fully integrated with the central command and control center.',
    technologies: [
      { title: 'Incident Management' },
      { title: 'Access Control Systems' },
      { title: 'Direct Detection Tools' },
      { title: 'Surveillance Cameras' }
    ],
    contactCTA: 'Request a Quote'
  }
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Event Security Services - Trusted Guards',
    description: 'Integrated security solutions for all types of events and occasions with specialized security teams and modern technologies'
  }
}

export default async function EventSecurityPage({ params }: PageProps) {
  const { lang } = await params
  const isArabic = lang === 'ar'
  const content = getContentData()

  return (
    <div className="ltr" dir="ltr">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] md:h-[600px] flex items-end justify-center text-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <Image
          src="/images/security_team_black_v2.png"
          alt={content.heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Gold accent - right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-transparent via-accent to-transparent z-20" />
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl px-4 md:px-6 mb-6 md:mb-8">
          <p className="text-xs md:text-sm text-accent mb-4 md:mb-6 font-light line-clamp-2">{content.breadcrumb}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {content.heroTitle}
          </h1>
        </div>
      </section>

      {/* Services Section - First */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-primary text-center mb-16">
            {content.servicesTitle}
          </h2>
          
          <div className="space-y-10 md:space-y-12">
            {content.services.map((service, index) => (
              <div key={index} className="flex gap-4 md:gap-8 lg:gap-10 items-start">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-300 min-w-fit pt-1 md:pt-2">
                  {index < 9 ? `0${index + 1}` : `${index + 1}`}
                </div>
                <div className="flex-1 border-b border-gray-300 pb-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-gray-900 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-xs md:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-primary text-center mb-16">
            {content.eventTypesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {content.eventTypes.map((event, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-6 md:p-8 h-56 md:h-64 flex flex-col items-center justify-center text-center hover:border-secondary hover:shadow-lg transition-all duration-300 group bg-white">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-2xl text-gray-300 group-hover:text-secondary transition-colors">
                  {['📋', '⚽', '🎭', '🏛️', '🏬'][index]}
                </div>
                <p className="text-gray-700 font-light text-sm md:text-base leading-relaxed">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-primary text-center mb-16">
            {content.importanceTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {content.importancePoints.map((point, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-6 md:p-8 min-h-72 md:min-h-80 flex flex-col items-center justify-center text-center hover:border-secondary hover:shadow-lg transition-all duration-300 group bg-white">
                <div className="w-14 h-14 mx-auto mb-8 flex items-center justify-center text-3xl text-gray-300 group-hover:text-secondary transition-colors">
                  {['🛡️', '👤', '📋', '⭐'][index]}
                </div>
                <p className="text-gray-700 font-light text-sm md:text-base leading-relaxed">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="bg-slate-50 py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-10 md:mb-12">
            {content.mainTitle}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed md:leading-relaxed font-light">
            {content.mainDescription}
          </p>
        </div>
      </section>

      {/* Integrated Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-primary text-center mb-6">
            {content.integratedSolutionsTitle}
          </h2>
          <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto font-light text-sm md:text-base leading-relaxed">
            {content.integratedDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {content.technologies.map((tech, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-64 md:h-72 lg:h-80 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={[
                    '/images/incident-management.jpg',
                    '/images/access-control.jpg',
                    '/images/detection-tools.jpg',
                    '/images/surveillance-camera.jpg'
                  ][index]}
                  alt={tech.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 text-white text-center">
                  <p className="font-light text-sm md:text-lg leading-tight">{tech.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-slate-900 py-16 md:py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 md:mb-12 leading-snug">
            {isArabic ? 'هل تبحث عن حلول أمنية متكاملة للفعاليات؟' : 'Looking for integrated security solutions for your events?'}
          </h2>
          <Link href={`/${lang}/contact`}>
            <Button 
              className="bg-white text-primary hover:bg-slate-100 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {content.contactCTA}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
