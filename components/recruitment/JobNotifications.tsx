'use client'

import { useState } from 'react'
import { Bell, CheckCircle2, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n-context'
import { Button } from '@/components/ui/button'

export function JobNotifications() {
  const { language } = useI18n()
  const isArabic = language === 'ar'
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section className="bg-gradient-to-r from-primary/5 via-primary/8 to-primary/5 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" dir={isArabic ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Bell className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {isArabic ? 'لا تفوّت أي فرصة وظيفية' : 'Never Miss a Job Opportunity'}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/55">
            {isArabic
              ? 'اشترك لتصلك إشعارات فورية عند توفر وظائف جديدة في Trusted Guards'
              : 'Subscribe to get instant notifications when new positions open at Trusted Guards'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm"
              >
                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                <p className="text-base font-semibold text-foreground">
                  {isArabic ? 'تم الاشتراك بنجاح!' : 'Successfully Subscribed!'}
                </p>
                <p className="text-sm text-foreground/50">
                  {isArabic ? 'سنرسل لك إشعاراً عند توفر وظائف جديدة.' : 'We\'ll notify you when new jobs become available.'}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-0"
              >
                <div className="relative w-full sm:flex-1">
                  <Mail className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/30 start-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                    className={`w-full rounded-xl border bg-white py-3.5 pe-4 ps-12 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-foreground/30 focus:ring-2 focus:ring-primary/15 sm:rounded-e-none ${
                      error ? 'border-red-400' : 'border-primary/10'
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl sm:w-auto sm:rounded-s-none"
                >
                  <Bell className="me-2 h-4 w-4" />
                  {isArabic ? 'اشتراك' : 'Subscribe'}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          {error && (
            <p className="mt-2 text-center text-xs text-red-500">{error}</p>
          )}

          {!subscribed && (
            <p className="mt-3 text-center text-xs text-foreground/35">
              {isArabic
                ? 'نحترم خصوصيتك ولن نشارك بريدك مع أي طرف آخر.'
                : 'We respect your privacy and will never share your email with third parties.'}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
