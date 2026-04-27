'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Clock, Briefcase, ChevronDown, CheckCircle2, Search, Share2, ArrowUpDown, Filter } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type JobCategory = 'all' | 'security' | 'professional' | 'manager'

interface JobPosition {
  id: string
  title: string
  location: string
  city: string
  type: string
  workType: string
  category: string
  description: string
  requirements: string[]
  postedDate: string
  salary: string
}

interface JobListingsProps {
  initialCategory?: JobCategory
}

export function JobListings({ initialCategory }: JobListingsProps = {}) {
  const searchParams = useSearchParams()
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<JobCategory>(initialCategory ?? 'all')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [workTypeFilter, setWorkTypeFilter] = useState('all')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest')
  const [showFilters, setShowFilters] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory)
      return
    }

    const category = searchParams.get('category')
    if (category && ['all', 'security', 'professional', 'manager'].includes(category)) {
      setActiveTab(category as JobCategory)
    }
  }, [searchParams, initialCategory])

  const clearFilters = () => {
    setSearchKeyword('')
    setSearchLocation('')
    setWorkTypeFilter('all')
    setActiveTab('all')
    setSortBy('newest')
    setShowFilters(false)
  }

  const positions: JobPosition[] = [
    {
      id: 'security_officer',
      title: 'Security Officer',
      location: 'Johannesburg, South Africa',
      city: 'johannesburg',
      type: 'Full-Time',
      workType: 'full-time',
      category: 'security',
      postedDate: '2026-04-10',
      salary: 'R12,000 - R18,000',
      description: 'We are seeking experienced security officers to join our team and ensure the safety of our clients\' facilities in Johannesburg.',
      requirements: ['Minimum 2 years of security experience', 'Valid PSIRA registration (Grade C or higher)', 'Physical fitness certification', 'Excellent English communication skills'],
    },
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
      description: 'Monitor and manage security operations from our state-of-the-art command center in Cape Town.',
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
      description: 'Provide expert security assessments and recommendations to enterprise clients across South Africa.',
      requirements: ['5+ years in security consulting', 'Relevant certifications (CPP, PSP)', 'Strong analytical and reporting skills', 'Client relationship management experience'],
    },
    {
      id: 'fire_safety_specialist',
      title: 'Fire Safety Specialist',
      location: 'Durban, South Africa',
      city: 'durban',
      type: 'Full-Time',
      workType: 'full-time',
      category: 'professional',
      postedDate: '2026-04-01',
      salary: 'R20,000 - R30,000',
      description: 'Lead fire safety operations and ensure compliance with national and international standards in Durban.',
      requirements: ['Fire safety certification', '3+ years in fire safety operations', 'Knowledge of SANS 10400 and NFPA standards', 'Emergency response training'],
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
      description: 'Coordinate administrative operations and support the team at our Pretoria office.',
      requirements: ['Minimum 1 year administrative experience', 'Proficient in Microsoft Office', 'Excellent organizational skills', 'Strong English proficiency'],
    },
  ]

  const tabs: { id: JobCategory; label: string }[] = [
    { id: 'all', label: 'All Positions' },
    { id: 'security', label: 'Security' },
    { id: 'professional', label: 'Professional' },
    { id: 'manager', label: 'Management' },
  ]

  const workTypes = [
    { id: 'all', label: 'All' },
    { id: 'full-time', label: 'Full-Time' },
    { id: 'part-time', label: 'Part-Time' },
    { id: 'remote', label: 'Remote' },
  ]

  const cities = [
    { id: '', label: 'All Cities' },
    { id: 'johannesburg', label: 'Johannesburg' },
    { id: 'capetown', label: 'Cape Town' },
    { id: 'durban', label: 'Durban' },
    { id: 'pretoria', label: 'Pretoria' },
    { id: 'remote', label: 'Remote' },
  ]

  const filteredPositions = positions
    .filter(p => {
      const matchesTab = activeTab === 'all' || p.category === activeTab
      const matchesKeyword = !searchKeyword || p.title.toLowerCase().includes(searchKeyword.toLowerCase())
      const matchesLocation = !searchLocation || p.city === searchLocation
      const matchesWorkType = workTypeFilter === 'all' || p.workType === workTypeFilter
      return matchesTab && matchesKeyword && matchesLocation && matchesWorkType
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
    })

  const handleShare = (position: JobPosition) => {
    const url = `${window.location.origin}/en/recruitment#${position.id}`
    const text = `Job: ${position.title} - ${position.location}`
    if (navigator.share) {
      navigator.share({ title: position.title, text, url })
    } else {
      navigator.clipboard.writeText(url)
      setCopiedId(position.id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  const getTabCount = (tabId: string) => {
    return positions.filter(p => tabId === 'all' || p.category === tabId).length
  }

  const categoryTitle = activeTab === 'security'
    ? 'Security Solutions Jobs'
    : activeTab === 'manager'
    ? 'Administrative Jobs'
    : activeTab === 'professional'
    ? 'Professional Jobs'
    : 'All Jobs'

  const categoryDescription = activeTab === 'security'
    ? 'Browse job opportunities in the security solutions sector and join licensed companies.'
    : activeTab === 'manager'
    ? 'Find administrative opportunities within the security ecosystem in a professional setting.'
    : activeTab === 'professional'
    ? 'Explore the available professional positions in security operations and management.'
    : 'Find all available career opportunities now.'

  return (
    <section id="positions" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{categoryTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/65 md:text-base">{categoryDescription}</p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-2xl border border-primary/8 bg-white p-2 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr_auto]">
            <div className="relative">
              <Search className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/30 start-4" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Job title, skill, keyword"
                className="w-full rounded-xl bg-slate-50 py-3.5 text-sm text-foreground outline-none placeholder:text-foreground/35 focus:bg-slate-100 ps-11 pe-4"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/30 start-4" />
              <select
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full appearance-none rounded-xl bg-slate-50 py-3.5 text-sm text-foreground outline-none focus:bg-slate-100 ps-11 pe-10"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/30 end-4" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-primary/8 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground/50">
                      Work Type:
                    </span>
                    <div className="flex gap-1.5">
                      {workTypes.map((wt) => (
                        <button
                          key={wt.id}
                          onClick={() => setWorkTypeFilter(wt.id)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            workTypeFilter === wt.id
                              ? 'bg-primary text-white'
                              : 'bg-slate-100 text-foreground/60 hover:bg-slate-200'
                          }`}
                        >
                          {wt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground/50">
                      Sort:
                    </span>
                    <button
                      onClick={() => setSortBy(sortBy === 'newest' ? 'oldest' : 'newest')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-200"
                    >
                      <ArrowUpDown className="h-3 w-3" />
                      {sortBy === 'newest' ? 'Newest First' : 'Oldest First'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-foreground/60 hover:bg-slate-200 hover:text-foreground/80'
              }`}
            >
              {tab.label}
              <span className={`ms-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-foreground/10 text-foreground/50'
              }`}>
                {getTabCount(tab.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center text-sm text-foreground/55 sm:text-left">
            Find the right role and apply easily through the form below.
          </div>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-primary/20 hover:bg-primary/10"
          >
            Clear Filters
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="text-center text-sm text-foreground/45 lg:text-left">
              {filteredPositions.length} position{filteredPositions.length !== 1 ? 's' : ''} available
            </div>

            {/* Job Cards */}
            <div ref={listRef} className="mt-6 space-y-4">
              {filteredPositions.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-primary/15 py-16 text-center">
                  <Briefcase className="mx-auto mb-3 h-10 w-10 text-foreground/20" />
                  <p className="text-foreground/50">
                    No positions match your criteria.
                  </p>
                </div>
              ) : (
                filteredPositions.map((position, index) => {
                  const isExpanded = expandedJob === position.id
                  return (
                    <motion.div
                      key={position.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={listInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      id={position.id}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isExpanded
                          ? 'border-primary/20 bg-primary/[0.015] shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                          : 'border-primary/8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedJob(isExpanded ? null : position.id)}
                        className="flex w-full items-center justify-between p-5 text-start md:p-6"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-lg font-bold text-foreground">{position.title}</h3>
                            <span className="rounded-full bg-primary/8 px-3 py-0.5 text-xs font-semibold text-primary">
                              {position.type}
                            </span>
                            {position.salary && (
                              <span className="hidden rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-600 sm:inline-flex">
                                {position.salary}
                              </span>
                            )}
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-foreground/50">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {position.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {new Date(position.postedDate).toLocaleDateString('en-ZA')}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-foreground/30 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-primary/8 px-5 pb-6 pt-4 md:px-6">
                              {position.salary && (
                                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-600 sm:hidden">
                                  {position.salary}
                                </div>
                              )}
                              <p className="text-foreground/65">{position.description}</p>

                              <div className="mt-5">
                                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                                  <Briefcase className="h-4 w-4 text-primary/50" />
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {position.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/60">
                                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                  href="#apply"
                                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                                >
                                  Apply Now
                                </a>
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleShare(position) }}
                                  className="inline-flex items-center gap-2 rounded-xl border border-primary/15 px-4 py-2.5 text-sm font-medium text-foreground/60 transition-all hover:border-primary/30 hover:text-foreground/80"
                                  aria-label="Share job"
                                >
                                  <Share2 className="h-4 w-4" />
                                  {copiedId === position.id ? 'Copied!' : 'Share'}
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

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-3xl border border-primary/8 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Why Apply Now
                </p>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Real opportunities for career growth
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/60">
                  Join a team that values experience and offers sustainable training and clear progression.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Accredited training & development',
                    'Competitive pay & benefits',
                    'Supportive workplace culture',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-foreground/60">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#apply"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90"
                >
                  Start Applying
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
