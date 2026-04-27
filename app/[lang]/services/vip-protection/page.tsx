import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { VIPProtectionCardsSection } from '@/components/VIPProtectionCardsSection'

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
    title: 'VIP Protection - Trusted Guards',
    description: 'Specialized personal protection solutions for VIPs with the highest levels of security and confidentiality.'
  }
}

const getContentData = () => {
  return {
    pageTitle: 'VIP Protection',
    heroTitle: 'VIP Personal Protection',
    breadcrumb: 'Trusted Guards / Security Services / VIP Protection',
    mainTitle: 'We provide customized personal security solutions for individuals and groups who require the highest levels of protection.',
    mainDescription: 'Personal protection services are designed with the highest standards of professionalism and confidentiality, whether in daily routines, during travel, or at special events. Our comprehensive service offerings include personal security, residential security, event security, and risk assessment. Each solution is customized based on a thorough understanding of client needs, potential threats, and the surrounding environment, ensuring effective protection while maintaining privacy.',
    servicesTitle: 'Services',
    whyChooseTitle: 'Why Choose Us',
    contactCTA: 'Contact Us',
    services: [
      {
        id: 1,
        title: 'Personal Security',
        description: 'Providing personal protection for individuals and groups, including residential security and travel security, ensuring safety at all times.',
        image: '/images/3.png'
      },
      {
        id: 2,
        title: 'Risk Assessment & Planning',
        description: 'Conducting threat analysis, assessing vulnerabilities, and reviewing security procedures to identify risks and establish effective preventive measures.',
        image: '/images/3.png'
      },
      {
        id: 3,
        title: 'Delegation Protection',
        description: 'Providing escort and secure protection services for individuals and groups during official visits or organized activities, while maintaining confidentiality and privacy.',
        image: '/images/3.png'
      },
      {
        id: 4,
        title: 'Specialized Services',
        description: 'Offering emergency planning, evacuation support, and personal security awareness training to enhance readiness and response capabilities.',
        image: '/images/3.png'
      }
    ],
    features: [
      {
        title: 'Specialized Team',
        description: 'Highly trained team with professional expertise in personal protection services'
      },
      {
        title: 'Comprehensive Risk Assessment',
        description: 'Detailed analysis of potential threats and customized preventive strategies'
      },
      {
        title: 'Privacy Protection',
        description: 'Full commitment to maintaining client confidentiality and privacy at all times'
      },
      {
        title: 'Advanced Technology',
        description: 'Latest security technologies and equipment for effective protection'
      },
      {
        title: 'Rapid Response',
        description: 'Immediate response capability to any emergency or potential threat'
      },
      {
        title: 'Standards Compliance',
        description: 'Full compliance with national and international security standards'
      }
    ]
  }
}

export default async function VIPProtectionPage() {
  const content = getContentData()

  return (
    <div className="ltr">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-[#0f1f2e]">
        <Image
          src="/images/man_hero_image.png"
          alt={content.heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        
        {/* Content */}
        <div className="relative z-20 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-3xl text-left">
            <p className="mb-4 text-sm font-light text-accent">{content.breadcrumb}</p>
            <h1 className="text-5xl font-light leading-tight text-white md:text-6xl">
              {content.heroTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-8 leading-relaxed">
            {content.mainTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-light">
            {content.mainDescription}
          </p>
        </div>
      </section>

      {/* Services Cards Section */}
      <VIPProtectionCardsSection />

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-16 text-center">
            {content.whyChooseTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-slate-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Do you have personal protection needs?
          </h2>
          <p className="text-accent text-lg mb-8 font-light">
            Contact us today for a specialized consultation
          </p>
          <Button 
            className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded font-light"
          >
            {content.contactCTA}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
