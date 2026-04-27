'use client'

import { useState, useEffect, useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n-context'

export function Testimonials() {
  const { language } = useI18n()
  const isArabic = language === 'ar'
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: isArabic ? 'ثابو مالينغا' : 'Thabo Malenga',
      role: isArabic ? 'ضابط أمن أول — جوهانسبرج' : 'Senior Security Officer — Johannesburg',
      quote: isArabic
        ? 'العمل في Trusted Guards غيّر مسيرتي المهنية. البيئة احترافية والفرص للتطوير لا تنتهي. فخور بأنني جزء من هذا الفريق.'
        : 'Working at Trusted Guards transformed my career. The environment is professional and the opportunities for growth are endless. Proud to be part of this team.',
      years: isArabic ? '5 سنوات' : '5 years',
    },
    {
      name: isArabic ? 'نوماليزو ندلوفو' : 'Nomalizo Ndlovu',
      role: isArabic ? 'مشغلة غرفة تحكم — كيب تاون' : 'Control Room Operator — Cape Town',
      quote: isArabic
        ? 'التكنولوجيا المتقدمة والتدريب المستمر يجعلان Trusted Guards مكاناً مميزاً للعمل. الدعم من الفريق رائع.'
        : 'The cutting-edge technology and continuous training make Trusted Guards a standout workplace. The team support is incredible.',
      years: isArabic ? '3 سنوات' : '3 years',
    },
    {
      name: isArabic ? 'سيفو مويلا' : 'Sipho Mwela',
      role: isArabic ? 'مستشار أمني — ديربان' : 'Security Consultant — Durban',
      quote: isArabic
        ? 'من أول يوم شعرت بالترحيب. الشركة تستثمر فعلاً في موظفيها وتوفر مساراً واضحاً للتقدم الوظيفي.'
        : 'I felt welcomed from day one. The company truly invests in its people and provides a clear path for career advancement.',
      years: isArabic ? '7 سنوات' : '7 years',
    },
    {
      name: isArabic ? 'ليراتو موتسيبي' : 'Lerato Motsepe',
      role: isArabic ? 'أخصائية سلامة حرائق — بريتوريا' : 'Fire Safety Specialist — Pretoria',
      quote: isArabic
        ? 'برامج التأمين الطبي والمزايا ممتازة. Trusted Guards تهتم حقاً بصحة ورفاهية موظفيها.'
        : 'The medical aid and benefits are excellent. Trusted Guards genuinely cares about the health and wellbeing of its employees.',
      years: isArabic ? '4 سنوات' : '4 years',
    },
  ]

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), [testimonials.length])
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length), [testimonials.length])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" dir={isArabic ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {isArabic ? 'ماذا يقول فريقنا' : 'What Our Team Says'}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/55">
            {isArabic
              ? 'اسمع من زملائنا عن تجربتهم في Trusted Guards'
              : 'Hear from our colleagues about their experience at Trusted Guards'}
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-2xl border border-primary/8 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm md:p-12">
            <Quote className="mx-auto mb-6 h-10 w-10 text-primary/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isArabic ? 30 : -30 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <blockquote className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="mt-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-foreground">{testimonials[current].name}</h4>
                  <p className="mt-1 text-sm text-foreground/50">{testimonials[current].role}</p>
                  <span className="mt-1 inline-block rounded-full bg-primary/8 px-3 py-0.5 text-xs font-medium text-primary">
                    {testimonials[current].years}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-foreground/60 transition-all hover:border-primary/25 hover:text-primary"
                aria-label={isArabic ? 'السابق' : 'Previous'}
              >
                {isArabic ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'w-6 bg-primary' : 'w-2 bg-primary/20'
                    }`}
                    aria-label={`${isArabic ? 'شهادة' : 'Testimonial'} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-foreground/60 transition-all hover:border-primary/25 hover:text-primary"
                aria-label={isArabic ? 'التالي' : 'Next'}
              >
                {isArabic ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
