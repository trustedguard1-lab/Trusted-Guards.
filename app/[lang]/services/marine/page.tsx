import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { InteractiveMarineServices } from '@/components/InteractiveMarineServices'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateStaticParams() {
  return [
    { lang: 'en' }
  ]
}

export async function generateMetadata() {
  return {
    title: 'Marine Protection - Trusted Guards',
    description: 'Integrated marine security services for protecting coastlines, ports, facilities, and critical maritime assets.'
  }
}

function getContentData() {
  return {
    pageTitle: 'Marine Protection',
    breadcrumb: ['Trusted Guards', 'Services', 'Marine Protection'],
    mainTitle: 'Marine services provide comprehensive security solutions for protecting coastal areas, maritime passages, vessels, and critical marine infrastructure.',
    mainDescription: 'These services rely on advanced technologies, specialized teams, and extensive maritime expertise to support security operations in ports, terminals, coastal industrial zones, and strategic maritime corridors. Through proactive surveillance, rapid response capabilities, and commitment to national and international maritime security standards, marine services contribute to establishing a secure maritime environment capable of addressing various challenges.',
    galleryServices: [
      {
        id: 1,
        title: 'Marine Protection',
        description: 'Comprehensive security solutions for coastal areas, ports, terminals, vessels, offshore platforms, and high-value marine assets. Includes ocean protection, vessel security operations, marine asset protection, and rapid response support.',
        image: '/images/الحماية البحرية.png'
      },
      {
        id: 2,
        title: 'Monitoring, Command & Control',
        description: 'Advanced maritime surveillance using radars, sensors, and integrated platforms to detect threats and unauthorized movements. Includes secure links with command and control centers for real-time visibility, coordinated response, and continuous operational monitoring.',
        image: '/images/المراقبة والقيادة والتحكم.png'
      },
      {
        id: 3,
        title: 'Compliance & Risk Assessment',
        description: 'Detailed security assessments for maritime routes and facilities, ensuring compliance with national and international security standards.',
        image: '/images/generated_compliance_check.png'
      },
      {
        id: 4,
        title: 'Emergencies & Training',
        description: 'Readiness and response to maritime emergencies including intrusions, piracy, accidents, and hazardous materials. Supported by specialized training programs and certifications to enhance maritime security personnel competency.',
        image: '/images/الطوارئ والتدريب.png'
      }
    ],
    services: [
      {
        id: 1,
        titleEn: 'Marine Protection',
        descEn: 'Comprehensive security solutions for coastal areas, ports, terminals, vessels, offshore platforms, and high-value marine assets. Includes ocean protection, vessel security operations, marine asset protection, and rapid response support.',
        icon: '🚢'
      },
      {
        id: 2,
        titleEn: 'Monitoring, Command & Control',
        descEn: 'Advanced maritime surveillance using radars, sensors, and integrated platforms to detect threats and unauthorized movements. Includes secure links with command and control centers for real-time visibility, coordinated response, and continuous operational monitoring.',
        icon: '📡'
      },
      {
        id: 3,
        titleEn: 'Compliance & Risk Assessment',
        descEn: 'Detailed security assessments for maritime routes and facilities, ensuring compliance with national and international security standards.',
        icon: '📋'
      },
      {
        id: 4,
        titleEn: 'Emergencies & Training',
        descEn: 'Readiness and response to maritime emergencies including intrusions, piracy, accidents, and hazardous materials. Supported by specialized training programs and certifications to enhance maritime security personnel competency.',
        icon: '⚠️'
      }
    ]
  }
}

export default async function MarineProtectionPage({ params }: PageProps) {
  const resolvedParams = await params
  const data = getContentData()

  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Hero Section */}
        <section className="hero-bg-marine relative h-screen w-full overflow-hidden bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 right-0 left-0 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm text-left">
              {data.breadcrumb.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span>{item}</span>
                  {idx < data.breadcrumb.length - 1 && <span>/</span>}
                </div>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white text-left">{data.pageTitle}</h1>
          </div>
        </section>

        {/* Main Description Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {data.mainTitle}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.mainDescription}
            </p>
          </div>
        </section>

        {/* Interactive Marine Services Gallery */}
        <InteractiveMarineServices 
          services={data.galleryServices} 
        />

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Want to learn more?
            </h3>
            <p className="text-accent/90 mb-8">
              Contact us for customized marine security solutions tailored to your needs
            </p>
            <Link 
              href={`/${resolvedParams.lang}/contact`}
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
