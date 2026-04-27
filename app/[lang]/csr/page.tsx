import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users, Leaf, BookOpen } from 'lucide-react'
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
    title: 'Corporate Social Responsibility - Trusted Guards',
    description: 'Learn about our corporate social responsibility and community programs'
  }
}

const getInitiatives = () => [
  {
    icon: Users,
    titleEn: 'Employment & Training Program',
    descEn: 'Youth and women employment with specialized professional training',
    image: '/images/csr-training.jpg'
  },
  {
    icon: BookOpen,
    titleEn: 'Scholarship Program',
    descEn: 'Scholarships for outstanding students from low-income families',
    image: '/images/csr-scholarship.jpg'
  },
  {
    icon: Heart,
    titleEn: 'Humanitarian Programs',
    descEn: 'Supporting families in need, charities and volunteer work',
    image: '/images/csr-humanitarian.jpg'
  },
  {
    icon: Leaf,
    titleEn: 'Environmental Sustainability',
    descEn: 'Commitment to eco-friendly practices and carbon footprint reduction',
    image: '/images/csr-environment.jpg'
  },
]

const getPrograms = () => [
  {
    year: 2025,
    titleEn: 'South Africa Youth Empowerment Initiative',
    descEn: 'Training and employment of 100 young men and women in security and management fields',
  },
  {
    year: 2025,
    titleEn: 'Township Community Support Program',
    descEn: 'Financial support and free security services for local communities in Cape Town',
  },
  {
    year: 2024,
    titleEn: 'Scholarships for Top Students',
    descEn: 'Full scholarships for 50 outstanding students at South African universities',
  },
  {
    year: 2024,
    titleEn: 'Greening & Sustainability Project',
    descEn: 'Planting 5000 trees in Cape Town',
  },
]

export default async function CSRPage({ params }: PageProps) {
  const initiatives = getInitiatives()
  const programs = getPrograms()

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 -z-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Corporate Social Responsibility
              </h1>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Commitment to Society
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We believe true success is not measured by profits alone, but by our positive impact on society. We work hard to implement programs that improve peoples lives and develop the community sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Main Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={initiative.image}
                        alt={initiative.titleEn}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                        priority={index === 0}
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-2">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600">
                          <Icon size={24} />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {initiative.titleEn}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {initiative.descEn}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programs Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Programs & Projects
            </h2>
            <div className="space-y-8">
              {programs.map((program, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold">
                        {program.year % 100}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {program.titleEn}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {program.descEn}
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Result:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {program.descEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
