'use client'

import { useState } from 'react'
import { Play, Shield, Users, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function VideoSection() {
  const [playing, setPlaying] = useState(false)

  const highlights = [
    {
      icon: Shield,
      label: 'Safe Work Environment',
    },
    {
      icon: Users,
      label: 'Cohesive Team',
    },
    {
      icon: Award,
      label: 'Accredited Training',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Discover Our Work Environment
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/55">
            See what it's like to work at Trusted Guards from the inside
          </p>
        </motion.div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-5">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/8 bg-slate-900 shadow-lg">
              <div className="aspect-video">
                {playing ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    src="/videos/recruitment-intro.mp4"
                  >
                    <track kind="captions" />
                  </video>
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="h-full w-full" style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }} />
                    </div>

                    {/* Company logo / text overlay */}
                    <div className="text-center">
                      <Shield className="mx-auto mb-4 h-16 w-16 text-primary/60" />
                      <p className="mb-6 text-sm font-medium text-white/50">
                        Trusted Guards — Company Overview
                      </p>
                      <button
                        onClick={() => setPlaying(true)}
                        className="group flex items-center gap-3 rounded-full bg-primary/90 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                          <Play className="h-4 w-4 fill-white text-white" />
                        </div>
                        Watch Video
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Side highlights */}
          <div className="space-y-4 lg:col-span-2">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * index }}
                className="flex items-center gap-4 rounded-xl border border-primary/8 bg-white p-5 shadow-sm transition-all hover:border-primary/15 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/8">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}

            <AnimatePresence>
              {playing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-emerald-200/50 bg-emerald-50/50 p-4 text-center">
                    <p className="text-xs text-emerald-700">
                      🎬 Place your video at public/videos/recruitment-intro.mp4
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
