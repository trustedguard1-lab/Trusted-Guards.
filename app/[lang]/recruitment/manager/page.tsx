'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { MapPin, Clock, Briefcase, ChevronDown, CheckCircle2, Search, Share2 } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useI18n } from '@/lib/i18n-context'

type JobCategory = 'all' | 'professional' | 'manager'

interface JobPosition {
  id: string
  title: string
  location: string
  city: string
  type: string
  workType: string
  category: JobCategory
  descriptionEn: string
  requirements: string[]
  postedDate: string
  salary: string
}

const positions: JobPosition[] = [
  {
    id: 'control_room_operator',
    title: 'Control Room Operator',
    location: 'Cape Town, South Africa',
    city: 'capetown',
    type: 'Full-Time',
    workType: 'full-time',
    category: 'professional',
    postedDate: '2026-04-08',
    salary: 'R15,000 - R22,000',
    descriptionEn: 'Monitor and manage security operations from our state-of-the-art command center in Cape Town.',
    requirements: ['Experience with CCTV and surveillance systems', 'Strong attention to detail', 'Ability to work in shifts', 'Technical knowledge of security systems'],
  },
  {
    id: 'security_consultant',
    title: 'Security Consultant',
    location: 'Remote / On-site',
    city: 'remote',
    type: 'Full-Time',
    workType: 'remote',
    category: 'manager',
    postedDate: '2026-04-05',
    salary: 'R35,000 - R55,000',
    descriptionEn: 'Provide expert security assessments and recommendations to enterprise clients across South Africa.',
    requirements: ['5+ years in security consulting', 'Relevant certifications (CPP, PSP)', 'Strong analytical and reporting skills', 'Client relationship management experience'],
  },
  {
    id: 'admin_coordinator',
    title: 'Administrative Coordinator',
    location: 'Pretoria, South Africa',
    city: 'pretoria',
    type: 'Part-Time',
    workType: 'part-time',
    category: 'manager',
    postedDate: '2026-04-12',
    salary: 'R10,000 - R15,000',
    descriptionEn: 'Coordinate administrative operations and support the team at our Pretoria office.',
    requirements: ['Minimum 1 year administrative experience', 'Proficient in Microsoft Office', 'Excellent organizational skills', 'Strong English proficiency'],
  },
]

const tabs: { id: JobCategory | 'all'; labelEn: string }[] = [
  { id: 'all', labelEn: 'All Jobs' },
  { id: 'professional', labelEn: 'Professional' },
  { id: 'manager', labelEn: 'Manager' },
]

export default function ManagementCareerPage() {
  const { language } = useI18n()
  const dir = 'ltr'

  const [activeTab, setActiveTab] = useState<'all' | JobCategory>('all')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-50px' })

  const getCount = (id: string) =>
    id === 'all' ? positions.length : positions.filter(p => p.category === id).length


  // Search handler state
  const [pendingKeyword, setPendingKeyword] = useState("");
  const [pendingLocation, setPendingLocation] = useState("");

  // Filtered jobs based on committed search
  const filtered = positions.filter(p => {
    const matchTab = activeTab === 'all' || p.category === activeTab;
    const kw = searchKeyword.toLowerCase();
    const matchKw = !kw || p.title.toLowerCase().includes(kw);
    const matchLoc = !searchLocation || p.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchTab && matchKw && matchLoc;
  });

  // Search button handler
  const handleSearch = () => {
    setSearchKeyword(pendingKeyword);
    setSearchLocation(pendingLocation);
  };

  const handleShare = (pos: JobPosition) => {
    const url = `${window.location.origin}/${language}/recruitment/manager#${pos.id}`
    if (navigator.share) {
      navigator.share({ title: pos.title, url })
    } else {
      navigator.clipboard.writeText(url)
      setCopiedId(pos.id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900" dir={dir}>
          <Image
            src="/images/trusted_guards_bright_office.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/40 to-slate-950/85" />

          <div className="relative mx-auto max-w-7xl px-6 pb-36 pt-32 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-black leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'inherit' }}
              >
                Inspiring and Rewarding Careers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-5 text-base leading-8 text-white/80 drop-shadow md:text-lg"
              >
                We are committed to your growth and development, comprehensive training and a clear path for career progression.
              </motion.p>
            </div>
          </div>

          {/* ─── FLOATING SEARCH BAR ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-0 left-1/2 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 px-4 sm:px-6 z-20"
          >
            <div className="rounded-3xl bg-gradient-to-br from-amber-100 via-white to-cyan-50 shadow-[0_8px_32px_rgba(255,193,7,0.10),0_1.5px_8px_rgba(0,0,0,0.07)] border border-amber-300/60" dir={dir}>
              <div className="flex flex-col sm:flex-row items-stretch divide-y divide-slate-100 sm:divide-y-0 sm:divide-x">

                <div className="flex flex-1 flex-col px-6 py-4 justify-center">
                  <label htmlFor="job-keyword" className="mb-1 text-[12px] font-extrabold uppercase tracking-wider text-amber-600 drop-shadow-sm">
                    FIND JOBS
                  </label>
                  <input
                    id="job-keyword"
                    type="text"
                    value={pendingKeyword}
                    onChange={e => setPendingKeyword(e.target.value)}
                    placeholder="Job title, skill, keyword"
                    className="text-base text-slate-900 font-semibold outline-none placeholder:text-foreground/35 bg-white border-2 border-amber-300 focus:border-amber-500 rounded-lg px-4 py-2 shadow-md focus:ring-2 focus:ring-amber-300 transition-all duration-200"
                    onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                  />
                </div>

                <div className="hidden sm:block w-px bg-slate-100" />


                <div className="flex flex-1 flex-col px-6 py-4 justify-center">
                  <label htmlFor="job-location" className="mb-1 flex items-center gap-1 text-[12px] font-extrabold uppercase tracking-wider text-amber-600 drop-shadow-sm">
                    <MapPin className="h-4 w-4" />
                    NEAR LOCATION
                  </label>
                  <input
                    id="job-location"
                    type="text"
                    value={pendingLocation}
                    onChange={e => setPendingLocation(e.target.value)}
                    placeholder="City, state, country"
                    className="text-base text-slate-900 font-semibold outline-none placeholder:text-foreground/35 bg-white border-2 border-amber-300 focus:border-amber-500 rounded-lg px-4 py-2 shadow-md focus:ring-2 focus:ring-amber-300 transition-all duration-200"
                    onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center rounded-e-2xl rounded-s-none bg-amber-500 px-8 py-4 text-white text-lg font-extrabold shadow-lg transition-all duration-200 hover:bg-amber-400 sm:rounded-e-2xl min-w-[56px] focus:outline-none focus:ring-2 focus:ring-amber-400 border-l-2 border-amber-300"
                  aria-label="Search"
                  style={{ alignSelf: 'stretch', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── CATEGORY TABS ───────────────────────────────────────── */}
        <section className="border-b border-slate-200 bg-white pt-20 pb-0" dir={dir}>
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex gap-1 overflow-x-auto">
              {tabs.map(tab => {
                const count = getCount(tab.id)
                const active = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'all' | JobCategory)}
                    className={`relative flex shrink-0 items-center gap-2 px-5 py-4 text-sm font-semibold transition-colors duration-200 ${
                      active ? 'text-amber-600' : 'text-foreground/55 hover:text-foreground/80'
                    }`}
                  >
                    {tab.labelEn}
                    <span className={`rounded-full px-1.5 text-xs font-bold ${active ? 'text-amber-500' : 'text-foreground/40'}`}>
                      ({count})
                    </span>
                    {active && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-amber-500"
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── JOB LISTINGS ────────────────────────────────────────── */}
        <section className="bg-slate-50 py-12" dir={dir}>
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <p className="mb-6 text-sm text-foreground/50">
              {`${filtered.length} position${filtered.length !== 1 ? 's' : ''} available`}
            </p>

            <div ref={listRef} className="space-y-4">
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
                  <Briefcase className="mx-auto mb-3 h-10 w-10 text-foreground/20" />
                  <p className="text-foreground/50">
                    No positions match your criteria.
                  </p>
                </div>
              ) : (
                filtered.map((pos, i) => {
                  const expanded = expandedJob === pos.id
                  return (
                    <motion.div
                      key={pos.id}
                      id={pos.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={listInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`rounded-2xl border bg-white transition-all duration-300 ${
                        expanded
                          ? 'border-amber-200 shadow-[0_8px_30px_rgba(0,0,0,0.07)]'
                          : 'border-slate-100 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedJob(expanded ? null : pos.id)}
                        className="flex w-full items-center justify-between p-5 text-start md:p-6"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-lg font-bold text-foreground">
                              {pos.title}
                            </h3>
                            <span className="rounded-full bg-amber-50 px-3 py-0.5 text-xs font-semibold text-amber-600">
                              {pos.type}
                            </span>
                            <span className="hidden rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-600 sm:inline-flex">
                              {pos.salary}
                            </span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-foreground/50">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {pos.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {new Date(pos.postedDate).toLocaleDateString('en')}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-foreground/30 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-slate-100 px-5 pb-6 pt-5 md:px-6">
                              <p className="text-sm leading-7 text-foreground/65">
                                {pos.descriptionEn}
                              </p>
                              <div className="mt-5">
                                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                                  <Briefcase className="h-4 w-4 text-amber-400" />
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {pos.requirements.map((req, ri) => (
                                    <li key={ri} className="flex items-start gap-2.5 text-sm text-foreground/60">
                                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                  href="mailto:careers@trustedguards.co.za"
                                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-400 hover:scale-105"
                                >
                                  Apply Now
                                </a>
                                <button
                                  onClick={e => { e.stopPropagation(); handleShare(pos) }}
                                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-foreground/60 transition-all hover:border-slate-300"
                                  aria-label="Share"
                                >
                                  <Share2 className="h-4 w-4" />
                                  {copiedId === pos.id ? 'Copied!' : 'Share'}
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

