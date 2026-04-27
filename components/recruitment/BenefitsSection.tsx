'use client'

import { motion } from 'framer-motion'

export function BenefitsSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="order-2 lg:order-1">
            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
              At the National Security Services Company (Saif), we believe that human capital is the main engine of growth and development in the private security service sector, and we are committed to integrating human capabilities with digital solutions.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
              Saif provides a digital platform as a national initiative to attract and qualify job seekers in the security services sector, while helping employers provide a safe environment for their facilities and employees.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              About the Platform
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
