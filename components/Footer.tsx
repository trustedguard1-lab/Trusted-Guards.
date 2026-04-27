'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { getAboutFooterCopy } from '@/lib/about-copy'

type FooterProps = {
  hideSocial?: boolean
  hidePhone?: boolean
  contactEmail?: string
  contactAddressEn?: string
}

export function Footer({
  hidePhone = false,
  contactEmail = 'sam@trusted-guards.com',
  contactAddressEn = '21-27 Third Avenue, Kensington, Cape Town, South Africa',
}: FooterProps) {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en'
  const currentYear = new Date().getFullYear()
  const contactAddress = contactAddressEn

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: `/${language}/about` },
        { name: 'Services', href: `/${language}/services` },
        { name: 'Consultations', href: `/${language}/services/consultations` },
        { name: 'Contact', href: `/${language}/contact` },
      ]
    },
    {
      title: 'Contact Information',
      links: [
        { name: `Email: ${contactEmail}`, href: `mailto:${contactEmail}` },
        ...(!hidePhone ? [{ name: 'Phone: +27 21 500 4000', href: 'tel:+27215004000' }] : []),
        { name: `Address: ${contactAddressEn}`, href: `/${language}/contact` },
      ]
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-border" dir="ltr">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${language}`} className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trusted_guards_logo_only-PcQqAXST5IdVn5wczouQ6W9JzmP5ct.png"
                alt="Trusted Guards Logo"
                width={160}
                height={70}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed max-w-xs">
              {getAboutFooterCopy(language)}
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground mb-4 text-sm">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${contactEmail}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contactEmail}
                </a>
              </li>
              {!hidePhone && (
                <li>
                  <a 
                    href="tel:+27215004000"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +27 21 500 4000
                  </a>
                </li>
              )}
              <li className="text-xs text-muted-foreground">
                {contactAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            All rights reserved © {currentYear} Trusted Guards
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
