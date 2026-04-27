import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FireRescueCardsSection } from '@/components/FireRescueCardsSection'
import { HomeSafetyCardsSection } from '@/components/HomeSafetyCardsSection'
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

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Fire & Rescue',
    description: 'Advanced fire fighting and rescue services'
  }
}

export default async function FireRescuePage({ params }: PageProps) {
  const resolvedParams = await params
  const lang = resolvedParams.lang

  return (
    <>
      <Header />
      <main dir="ltr">
        {/* Hero Section with Full Background Image */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/firefighter_black.png"
            alt="Fire & Rescue"
            fill
            className="object-cover object-[50%_18%] md:object-[50%_22%] group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
          
          <div className="relative z-10 text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-8 text-sm flex-row">
              <span className="text-accent">Our Security Services</span>
              <span className="text-white/60">/</span>
              <span className="text-white/60">Security Services</span>
              <span className="text-white/60">/</span>
              <span className="text-white/60">Fire Fighting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-left">
              Fire Fighting<br />& Rescue
            </h1>
          </div>
        </section>

        {/* Fire Rescue Cards Section */}
        <FireRescueCardsSection />

        <section className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
          <div className="grid items-center gap-8 rounded-[2rem] bg-slate-50 p-6 shadow-sm md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/fire-rescue-showcase-1.png"
                alt="A member of the fire fighting and rescue team"
                fill
                className="object-cover object-[50%_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Added Image
              </p>
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Highly Trained Field Response Teams
              </h2>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                This image has been added to the page to highlight the readiness of fire fighting and rescue teams and their rapid response in high-risk operational environments.
              </p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
              Advanced Fire & Rescue Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              With full compliance to civil defense regulations for private firefighting teams, operations are led by highly trained personnel using modern equipment to meet the requirements of industrial facilities and high-risk buildings.
            </p>
            <p className="text-gray-600 text-sm text-left">
              Services include establishing, equipping, and managing modern fire and rescue stations that enhance emergency response capabilities
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-left">
              Why Trusted Guards?
            </h2>

          <div className="space-y-12">
            {[
              {
                num: '01',
                title: 'Comprehensive Solutions',
                desc: 'From building stations to managing all operations, we handle all aspects of service'
              },
              {
                num: '02',
                title: 'Highly Trained Teams',
                desc: 'Our staff are internationally trained for effective emergency response'
              },
              {
                num: '03',
                title: 'Advanced Technology',
                desc: 'We use modern equipment and technology for maximum safety and efficiency'
              },
              {
                num: '04',
                title: 'Commitment to Excellence',
                desc: 'We are committed to delivering high-quality services that exceed expectations'
              },
              {
                num: '05',
                title: 'Strategic Solutions',
                desc: 'We distinguish all security and safety services with strategic vision'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start pb-8 border-b border-gray-300 last:border-b-0 flex-row">
                <div className="text-5xl md:text-6xl font-light text-gray-300 flex-shrink-0 w-20">
                  {item.num}
                </div>
                <div className="text-left">
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

        {/* At Home Services Section */}
        <HomeSafetyCardsSection />

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-black text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fire & Rescue
            </h2>
            <p className="text-xl text-white/80 mb-10">
              For more information or to request services
            </p>
            <Link href={`/${lang}/contact`}>
              <button className="px-10 py-4 bg-primary hover:bg-secondary text-white font-bold rounded transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
