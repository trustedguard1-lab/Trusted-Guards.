import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TimelineSection } from '@/components/TimelineSection'
import { Button } from '@/components/ui/button'
import { getAboutHeroBlurb, getAboutMetaDescription, getAboutStats, getMissionCopy, getSecurityPillars, getSecurityPillarsSectionCopy, getVisionCopy } from '@/lib/about-copy'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Lock, User, Building2, ArrowRight, Sparkles, Target } from 'lucide-react'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  return {
    title: 'About Us - Trusted Guards',
    description: getAboutMetaDescription(resolvedParams.lang === 'ar' ? 'ar' : 'en')
  }
}

const foundationYear = 2015
const yearsOfExperience = new Date().getFullYear() - foundationYear

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = await params
  const language = resolvedParams.lang === 'ar' ? 'ar' : 'en'
  const pillars = getSecurityPillars(language)
  const pillarsSection = getSecurityPillarsSectionCopy(language)
  const stats = getAboutStats(language)
  const pillarIcons = {
    physical: Shield,
    cyber: Lock,
    personal: User,
    organizational: Building2,
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Image
            src="/images/security_products_whiteboard.png"
            alt={'Trusted Guards Team'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  About Us
                </p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
                  Security solutions that are simple in presentation, precise in execution, and reliable in outcome.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                  {getAboutHeroBlurb(language)}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-[1.2rem] border border-white/15 bg-white/10 px-4 py-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{item.label}</div>
                      <div className="mt-2 text-2xl font-black text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-[1.1rem] bg-primary px-7 text-white hover:bg-primary/92">
                    <Link href={`/${language}/contact`}>
                      Request a consultation
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl">
                <div className="relative h-[32rem] sm:h-[36rem] lg:h-[40rem] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/security_products_whiteboard.png"
                    alt={'Trusted Guards operations environment'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] bg-white/95 px-5 py-4 text-primary md:inset-x-6 md:bottom-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary/55">
                    Operating model
                  </div>
                  <div className="mt-2 text-lg font-bold md:text-xl">
                    Clear site understanding, organized execution, and reliable response.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
              <div className="rounded-[1.25rem] border border-primary/10 bg-white p-8">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                    {getMissionCopy(language)}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-primary/10 bg-white p-8">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-secondary/10 text-secondary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                    {getVisionCopy(language)}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <TimelineSection />

        <section className="py-14 md:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary/55">
                Security pillars
              </p>
              <h2 className="mt-3 text-3xl font-black text-primary md:text-[2.5rem]">
                {pillarsSection.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/72 md:text-lg">
                {pillarsSection.subtitle}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => {
                const Icon = pillarIcons[pillar.key as keyof typeof pillarIcons]

                return (
                  <div key={index} className="rounded-[1.2rem] border border-primary/10 bg-white p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-primary">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">
                      {pillar.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary to-slate-900 px-8 py-12 text-white shadow-xl md:px-14 md:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl lg:text-left">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 shadow-sm">
                  Let’s Start
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                  If you need a <span className="text-accent">security partner</span> that truly understands operations before selling solutions,<br className="hidden md:inline" /> we are ready.
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-medium">
                  We help you build a clear security roadmap that starts with real assessment and ends with a measurable deployment plan.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-primary font-bold px-10 py-4 text-lg shadow-lg hover:bg-slate-100 transition-all duration-200">
                  <Link href={`/${language}/contact`}>
                    Book a consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
