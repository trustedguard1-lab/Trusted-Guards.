'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function RecruitmentHero() {
  const pathname = usePathname()
  const lang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en'

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      <Image
        src="/images/handshake_dark_skin_4.png"
        alt=""
        fill
        className="object-cover object-center brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/90" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center text-white sm:px-6 lg:px-8" dir="ltr">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
        >
          National Security Services Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Safe Platform
          <br />
          <span className="text-primary">
            Your Future Starts Here
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
        >
          Believing that human capital is the main driver of development. Join our team now!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href={`/${lang}/recruitment/security`}
            className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
          >
            Security Solutions Jobs
          </Link>
          <Link
            href={`/${lang}/recruitment/manager`}
            className="inline-flex min-w-[240px] items-center justify-center rounded-full border-2 border-white/25 bg-white/10 px-10 py-4 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/20"
          >
            Administrative Jobs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
