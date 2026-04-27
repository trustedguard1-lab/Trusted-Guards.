import Image from 'next/image'
import Link from 'next/link'
import {
  Blocks,
  Building2,
  ClipboardCheck,
  Radar,
  ShieldCheck,
  Target,
  Wrench,
  Workflow,
} from 'lucide-react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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
    title: 'Security Consultations - Trusted Guards',
    description: 'Specialized security consulting services that help organizations build protection strategies, assess risks, and improve operational readiness.'
  }
}

const offeringItems = [
  {
    icon: Target,
    title: 'Security Strategy Development',
    description: 'Developing security frameworks and strategies aligned with organizational goals, growth plans, and operational priorities.',
  },
  {
    icon: Building2,
    title: 'Governance and Compliance',
    description: 'Building policies, controls, and compliance models that strengthen regulatory alignment and operational accountability.',
  },
  {
    icon: Radar,
    title: 'Risk and Threat Assessment',
    description: 'Analyzing threats, gaps, and likely scenarios to define priorities and shape mitigation plans.',
  },
  {
    icon: Workflow,
    title: 'Security Operating Model Design',
    description: 'Establishing or reshaping security functions to improve efficiency and integrate them smoothly with business operations.',
  },
  {
    icon: ClipboardCheck,
    title: 'Master Planning and Roadmaps',
    description: 'Creating phased roadmaps to protect critical assets and evolve security capabilities over the medium and long term.',
  },
  {
    icon: Blocks,
    title: 'Systems and Technology Integration',
    description: 'Aligning security technologies with the existing operating environment to maximize value without unnecessary complexity.',
  },
  {
    icon: ShieldCheck,
    title: 'Solution Design and Option Evaluation',
    description: 'Evaluating alternatives and shaping right-fit solutions with neutral recommendations driven by actual operational need.',
  },
  {
    icon: Wrench,
    title: 'Implementation and Transition Support',
    description: 'Supporting delivery teams during rollout, improving readiness, and transferring knowledge for sustainable operations after launch.',
  },
]

const keyQuestions = [
  {
    value: 'strategy',
    title: 'How do we build a security strategy that supports the organization vision?',
    description: 'We begin by understanding the organization goals, operating model, and critical assets, then translate that into actionable security priorities with clear success measures.',
  },
  {
    value: 'compliance',
    title: 'How can complex regulatory requirements be addressed while improving internal readiness?',
    description: 'We review current controls, identify gaps, and introduce a governance and execution model that enables compliance without slowing down the business.',
  },
  {
    value: 'risk',
    title: 'How do we identify risks before they escalate into real threats?',
    description: 'We use operational, field, and technical assessments to map risks, classify them by likelihood and impact, and connect them to the right response plans.',
  },
  {
    value: 'operations',
    title: 'How can security operations be established or improved?',
    description: 'We define roles, procedures, control points, and escalation models to create operational clarity, faster decisions, and stronger field execution.',
  },
  {
    value: 'technology',
    title: 'How do we select the right technologies without overengineering the solution?',
    description: 'We assess the actual need of the site and operating model, then recommend technologies that add measurable operational value and integrate cleanly with the current environment.',
  },
  {
    value: 'future',
    title: 'How do we protect critical assets while preparing for the future?',
    description: 'We build a roadmap that balances immediate needs, phased investment, and capability development so the organization remains resilient and future-ready.',
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Understand the organization',
    description: 'We begin by analyzing structure, operations, and current risks to identify the key areas of impact.',
  },
  {
    number: '02',
    title: 'Define the priorities',
    description: 'We rank risks and opportunities and craft a roadmap centered on operational and strategic priorities.',
  },
  {
    number: '03',
    title: 'Design the solutions',
    description: 'We propose practical security and technology models that fit the organization and its current capabilities.',
  },
  {
    number: '04',
    title: 'Support delivery',
    description: 'We provide an execution and performance monitoring framework to ensure a smooth transition and measurable results.',
  },
]

const outcomeCards = [
  {
    title: 'Stronger decision-making',
    description: 'Our recommendations make the security choice clear and grounded in real operational insight.',
  },
  {
    title: 'Reduced operational risk',
    description: 'We help reduce security gaps and lower the organization’s exposure to real risk.',
  },
  {
    title: 'Optimized security investment',
    description: 'We recommend practical solutions that prioritize value over unnecessary complexity.',
  },
  {
    title: 'Continuity of operations',
    description: 'We ensure consulting is designed to support business continuity while staying adaptable to change.',
  },
]

export default async function ConsultationsPage({ params }: PageProps) {
  const resolvedParams = await params
  return (
    <>
      <Header />
      <main dir="ltr">
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0f1f2e_0%,#13324a_58%,#f8fafc_100%)] pb-20 pt-24 text-white md:pb-28 md:pt-32">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
            <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-12 left-8 h-44 w-44 rounded-full bg-white/10 blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-1 lg:items-center">
              <div className="animate-in fade-in slide-in-from-right-6 duration-700 mx-auto w-full max-w-full">
                <div className="relative h-[860px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_60px_120px_rgba(8,18,30,0.45)]">
                  <Image
                    src="/images/handshake_dark_skin_4.png"
                    alt="Security consultations"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,46,0.1),rgba(15,31,46,0.8))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8">
            <div className="rounded-[1.75rem] border border-primary/10 bg-primary/[0.03] p-7 shadow-[0_16px_40px_rgba(15,31,46,0.05)]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary/65">
                What Sets Us Apart
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-primary">
                Consulting that focuses on decision and execution together.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Operational understanding',
                  desc: 'We assess the field, management, and technical reality before making any recommendation.'
                },
                {
                  title: 'Actionable recommendations',
                  desc: 'We shape outputs that can be converted into clear delivery steps.'
                },
                {
                  title: 'Knowledge transfer',
                  desc: 'We help internal teams continue confidently after the engagement ends.'
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="animate-in fade-in zoom-in-95 duration-700 rounded-[1.5rem] border border-primary/10 bg-white p-6 shadow-[0_16px_32px_rgba(15,31,46,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/20"
                >
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="brand-kicker mb-3 text-xs font-bold">What We Offer</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Consulting capabilities that support the organization from planning to execution.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We cover multiple stages, from risk and governance analysis to solution design and implementation support, tailored to the scale and complexity of the organization.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {offeringItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group animate-in fade-in zoom-in-95 duration-700 rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_18px_45px_rgba(15,31,46,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_22px_54px_rgba(15,31,46,0.1)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="brand-kicker mb-3 text-xs font-bold">Strategic Questions</p>
                <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                  We turn complex questions into a clear action path.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  In consulting engagements, value begins with the right question. That is why we focus on the questions that shape decisions, reveal gaps, and clarify execution priorities.
                </p>
              </div>

              <div className="rounded-[2rem] border border-primary/10 bg-slate-50 p-4 shadow-[0_18px_45px_rgba(15,31,46,0.05)] md:p-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {keyQuestions.map((item) => (
                    <AccordionItem
                      key={item.value}
                      value={item.value}
                      className="rounded-[1.25rem] border border-primary/10 bg-white px-5 shadow-sm transition-all duration-300 data-[state=open]:border-primary/20 data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="py-5 text-left text-lg font-bold leading-relaxed text-slate-900 hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-base leading-8 text-slate-600">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-slate-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
                Our Approach
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                How we deliver consulting value.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {deliverySteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="mb-6 text-6xl font-black text-white/10">{step.number}</div>
                  <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-7 text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="brand-kicker mb-3 text-xs font-bold">The Impact</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Tangible outcomes for the organization.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {outcomeCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-primary/10 bg-slate-50 p-8 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,31,46,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-black md:text-5xl">
              Ready to build your security strategy?
            </h2>
            <p className="mb-10 text-lg leading-8 text-white/70">
              Our team is ready to support you and we are happy to listen to your needs and help you achieve your goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${resolvedParams.lang}/contact`}
                className="inline-flex items-center justify-center rounded-xl bg-secondary px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/90 hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
