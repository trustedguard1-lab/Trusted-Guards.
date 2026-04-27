'use client'

import Image from 'next/image'
import { Radar, Siren } from 'lucide-react'

import { getHomepageAboutHighlights, getHomepageAboutIntro, getHomepageAboutSectionTitle, getHomepageAboutStats, getHomepageMissionCopy, getHomepageVisionCopy } from '@/lib/about-copy'
import { statsData } from './StatsSection'

export function AboutSection() {
  const language = 'en'
  // إحصائيات ثابتة حسب طلبك
  const stats = [
    { label: 'Projects', value: '500+' },
    { label: 'Employees', value: '220+' },
    { label: 'Year Founded', value: '2011' },
  ]
  const highlights = getHomepageAboutHighlights(language)

  const sectionCopy = {
    title: getHomepageAboutSectionTitle(language),
    description: getHomepageAboutIntro(language),
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/5 shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_70%)]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-950">
                <Image
                  src="/images/security_products_whiteboard.png"
                  alt="Trusted Guards Security Products"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>

            <div className="relative mt-6 rounded-[1.75rem] border border-white/15 bg-white/95 p-5 shadow-[0_24px_58px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Security technology systems
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-foreground/75">
                    Clear, practical solutions to protect facilities and people using modern devices and software.
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-right sm:block">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/70">HTG</p>
                  <p className="mt-1 text-2xl font-black text-primary">2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8"> 
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
                <span>About Trusted Guards</span>
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl md:text-[3.5rem]">
                {sectionCopy.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75 md:text-xl">
                {sectionCopy.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-100 to-slate-50 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-4 text-3xl font-black text-slate-950 md:text-[2.25rem]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-[0_15px_30px_rgba(59,130,246,0.22)]">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Our Mission</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {getHomepageMissionCopy(language)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-gradient-to-br from-primary/90 to-slate-950 p-6 text-white shadow-[0_18px_48px_rgba(15,23,42,0.14)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/15 text-white shadow-[0_15px_30px_rgba(255,255,255,0.14)]">
                    <Siren className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Our Vision</h3>
                    <p className="mt-3 text-base leading-7 text-white/80">
                      {getHomepageVisionCopy(language)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-950">Why Trusted Guards?</h3>
              </div>

              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-center gap-4 rounded-[1.25rem] border border-slate-200/75 bg-slate-50 px-4 py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black">
                      0{index + 1}
                    </div>
                    <span className="font-semibold text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
