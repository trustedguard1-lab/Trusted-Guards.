'use client'

import { useRef } from 'react'
import { FileText, Search, Users, Stethoscope, FileCheck, Briefcase } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export function ApplicationTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out the form and attach your CV',
    },
    {
      icon: Search,
      title: 'Initial Review',
      description: 'Our team reviews your application and qualifications',
    },
    {
      icon: Users,
      title: 'Interview',
      description: 'In-person or video interview',
    },
    {
      icon: Stethoscope,
      title: 'Background & Medical Check',
      description: 'Medical exam and background verification',
    },
    {
      icon: FileCheck,
      title: 'Job Offer',
      description: 'Receive and negotiate your job offer',
    },
    {
      icon: Briefcase,
      title: 'Start Working',
      description: 'Join the Trusted Guards team!',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Application Journey
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/55">
            Learn about our hiring process from start to finish
          </p>
        </motion.div>

        <div ref={ref} className="mt-12">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 h-0.5 w-full bg-primary/10" style={{ left: 0 }}>
                <motion.div
                  className="h-full bg-primary/40"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>

              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/15 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/50">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden">
            <div className="relative ps-8">
              {/* Vertical line */}
              <div className="absolute bottom-0 top-0 w-0.5 bg-primary/10 start-3">
                <motion.div
                  className="w-full bg-primary/40"
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : {}}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.12 }}
                    className="relative flex items-start gap-4"
                  >
                    <div className="absolute -start-5 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white shadow-sm">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ms-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                          {index + 1}
                        </span>
                        <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="mt-1 text-xs text-foreground/50">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
