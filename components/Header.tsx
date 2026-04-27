'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sectors = [
    { id: 'banks', name: 'Banks', href: `/${language}/sectors/banks` },
    { id: 'tourism', name: 'Tourism', href: `/${language}/sectors/tourism` },
    { id: 'government', name: 'Government & Authorities', href: `/${language}/sectors/government` },
    { id: 'entertainment', name: 'Entertainment', href: `/${language}/sectors/entertainment` },
    { id: 'mega-projects', name: 'Mega Projects', href: `/${language}/sectors/mega-projects` },
    { id: 'sports', name: 'Sports', href: `/${language}/sectors/sports` },
    { id: 'real-estate', name: 'Real Estate', href: `/${language}/sectors/real-estate` },
    { id: 'industries', name: 'Industries', href: `/${language}/sectors/industries` },
    { id: 'aviation-transport', name: 'Aviation & Transport', href: `/${language}/sectors/aviation-transport` },
  ]

  const navigation = [
    { name: 'Home', href: `/${language}` },
    { name: 'About', href: `/${language}/about` },
    { name: 'Careers', href: `/${language}/recruitment` },
    { name: 'Contact', href: `/${language}/contact` },
  ]

  const serviceLinks = [
    {
      name: 'Services',
      href: `/${language}/services`,
      description: 'Browse all security services',
    },
    {
      name: 'Consultations',
      href: `/${language}/services/consultations`,
      description: 'Specialized consulting for organizations',
      featured: true,
    },
    {
      name: 'Safety Zone',
      href: `/${language}/services/safety-zone`,
      description: 'Advanced protection against unauthorized drone intrusion',
    },
    {
      name: 'Technology',
      href: `/${language}/services/technology`,
      description: 'Smart systems and advanced solutions',
    },
    {
      name: 'Command Center',
      href: `/${language}/services/command-center`,
      description: 'Centralized security operations oversight',
    },
  ]

  const consultationLabel = 'Request Consultation'
  const servicesMenuTriggerId = 'header-services-trigger'
  const servicesMenuContentId = 'header-services-content'
  const sectorsMenuTriggerId = 'header-sectors-trigger'
  const sectorsMenuContentId = 'header-sectors-content'

  return (
    <header className={`sticky top-0 z-50 w-full px-3 pt-3 transition-all duration-300 ${
      scrolled 
        ? 'pb-2' 
        : 'pb-3'
    }`}>
      <nav className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
        scrolled
          ? 'border-primary/10 bg-white/92 shadow-[0_18px_50px_rgba(15,31,46,0.12)] backdrop-blur-xl'
          : 'border-white/70 bg-white/88 shadow-[0_16px_40px_rgba(15,31,46,0.08)] backdrop-blur-xl'
      } px-4 sm:px-6 lg:px-8`} dir="ltr">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trusted_guards_logo_only-PcQqAXST5IdVn5wczouQ6W9JzmP5ct.png"
              alt="Trusted Guards Logo"
              width={200}
              height={90}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            <Link
              href={`/${language}`}
              className="rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
            >
              Home
            </Link>
            <Link
              href={`/${language}/about`}
              className="rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  id={servicesMenuTriggerId}
                  aria-controls={servicesMenuContentId}
                  className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                id={servicesMenuContentId}
                align="start"
                className="w-80 rounded-2xl border-0 bg-gray-100 p-4 shadow-2xl text-foreground"
              >
                <div className="mb-3 px-3">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">
                    Services
                  </p>
                </div>
                <div className="space-y-2">
                  {serviceLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="block">
                      <DropdownMenuItem className={`rounded-xl px-4 py-3 hover:bg-primary/10 text-foreground ${link.featured ? 'bg-primary/[0.04] text-primary' : ''}`}>
                        <div className="flex w-full items-start justify-between gap-3">
                          <div>
                            <div className="text-base font-semibold">{link.name}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{link.description}</div>
                          </div>
                          {link.featured ? (
                            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                              New
                            </span>
                          ) : null}
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sectors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  id={sectorsMenuTriggerId}
                  aria-controls={sectorsMenuContentId}
                  className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
                >
                  Sectors
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                id={sectorsMenuContentId}
                align="start" 
                className="w-64 p-6 bg-gray-100 rounded-2xl shadow-2xl border-0 text-foreground"
              >
                <div className="space-y-3">
                  {sectors.map((sector) => (
                    <Link key={sector.id} href={sector.href} className="block">
                      <DropdownMenuItem className="px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 cursor-pointer border-b border-transparent">
                        {sector.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={`/${language}/recruitment`}
              className="rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
            >
              Careers
            </Link>
            <Link
              href={`/${language}/contact`}
              className="rounded-full px-4 py-2 text-base font-bold text-primary drop-shadow-sm tracking-wide transition-all duration-300 hover:bg-muted hover:text-accent"
            >
              Contact
            </Link>

            <div className="h-6 w-px bg-border" />
            <Link
              href={`/${language}/contact`}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(26,58,82,0.22)] transition-all duration-300 hover:bg-secondary hover:shadow-[0_16px_34px_rgba(26,58,82,0.28)]"
            >
              {consultationLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-primary/10 bg-muted p-2 text-primary transition-all duration-300 hover:bg-primary/10 active:scale-95"
              aria-label="Open menu"
            >
              <span className="text-xl font-bold">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-in fade-in slide-in-from-top-2 duration-300 space-y-2 border-t border-primary/10 py-4" dir="ltr">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-xl px-3 py-3 text-sm font-semibold text-primary hover:bg-muted hover:translate-x-1 transition-all duration-300`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  animation: `slideInMenu 0.3s ease-out ${index * 50}ms both`
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-3">
              <div className="mb-2 text-sm font-semibold text-primary">
                Services
              </div>
              <div className="space-y-1 pl-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block rounded-xl px-3 py-3 text-sm hover:bg-muted hover:translate-x-1 transition-all duration-300 ${link.featured ? 'bg-primary/[0.05] text-primary' : 'text-primary/80'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold">{link.name}</span>
                      {link.featured ? (
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                          New
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-1 text-xs text-foreground/55">{link.description}</div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Sectors Dropdown */}
            <div className="px-3 py-3">
              <div className="text-sm font-semibold text-primary mb-2">
                Sectors
              </div>
              <div className="space-y-1 pl-2">
                {sectors.map((sector) => (
                  <Link
                    key={sector.id}
                    href={sector.href}
                    className={`block rounded-xl px-3 py-2 text-sm text-primary/80 hover:bg-muted hover:translate-x-1 transition-all duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={`/${language}/contact`}
              onClick={() => setIsOpen(false)}
              className="mx-3 mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {consultationLabel}
            </Link>
          </div>
        )}

        <style jsx>{`
          @keyframes slideInMenu {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </nav>
    </header>
  )
}
