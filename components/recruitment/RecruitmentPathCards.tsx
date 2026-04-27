'use client'

import { motion } from 'framer-motion'
import { Shield, Briefcase, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const paths = [
  {
    id: 'security',
    icon: Shield,
    title: 'Security Solutions Jobs',
    desc: 'Apply to a licensed security company. Complete the guard application form and start your career.',
    href: '/recruitment/security',
    accent: 'amber',
  },
  {
    id: 'manager',
    icon: Briefcase,
    title: 'Administrative Jobs',
    desc: 'Discover available administrative and professional opportunities and apply for the role that suits your qualifications.',
    href: '/recruitment/manager',
    accent: 'blue',
  },
]

export function RecruitmentPathCards() {
  const pathname = usePathname()
  const lang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en'

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Join Our Team
          </h2>
          <p className="mt-3 text-sm text-foreground/55 md:text-base">
            Choose the right recruitment path for you:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {paths.map((path, i) => {
            const Icon = path.icon
            const Arrow = ArrowRight
            const isAmber = path.accent === 'amber'
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/${lang}${path.href}`}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${
                    isAmber
                      ? 'group relative block overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 hover:border-amber-300 hover:shadow-xl'
                      : 'group relative block overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 hover:border-blue-300 hover:shadow-xl'
                  }`}
                >
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-md ${
                      isAmber ? 'bg-amber-500 text-white' : 'bg-blue-600 text-white'
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{path.title}</h3>
                  <p className="mb-6 text-sm leading-7 text-foreground/60">{path.desc}</p>
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${
                      isAmber ? 'text-amber-600' : 'text-blue-600'
                    }`}
                  >
                    Apply Now
                    <Arrow className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
