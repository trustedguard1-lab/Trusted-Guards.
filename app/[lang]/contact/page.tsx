'use client'

import { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setStatusType('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string }
        throw new Error(data.error ?? 'Failed to send your request.')
      }

      setFormData({ name: '', email: '', department: '', subject: '', message: '' })
      setStatusType('success')
      setStatusMessage('Your message has been sent successfully.')
    } catch (error) {
      setStatusType('error')
      setStatusMessage(
        error instanceof Error ? error.message : 'Failed to send your request. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', department: '', subject: '', message: '' })
  }

  const contactCards = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['21-27 Third Avenue, Kensington', 'Cape Town, South Africa'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sam@trusted-guards.com'],
    },
  ]

  return (
    <>
      <Header />
      <main dir="ltr">
        <section className="bg-white py-6 md:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(240,243,247,0.72),rgba(255,255,255,1))] p-4 shadow-[0_16px_40px_rgba(15,31,46,0.05)] md:p-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-primary/10 bg-slate-100 shadow-[0_24px_60px_rgba(15,31,46,0.12)]">
                <iframe
                  title="Trusted Guards location map"
                  src="https://www.google.com/maps?q=21-27%20Third%20Avenue%20Kensington%20Cape%20Town%20South%20Africa&z=15&output=embed"
                  className="h-[360px] w-full border-0 md:h-[430px] xl:h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
              {contactCards.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="rounded-[1.6rem] border border-primary/10 bg-white p-5 shadow-[0_16px_42px_rgba(15,31,46,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(15,31,46,0.1)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-slate-900">{info.title}</h2>
                    <div className="mt-3 space-y-1.5 text-sm leading-7 text-slate-600">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-[0_18px_48px_rgba(15,31,46,0.06)] md:p-8">
                <div className="mb-8 border-b border-slate-200/80 pb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary/60">
                    Contact form
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
                    Send your request details and our team will get back to you.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                    This form is suitable for general inquiries, service requests, consultations, partnerships, and careers.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="mb-2 block text-sm font-semibold text-slate-900">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        title="Select department"
                      >
                        <option value="">Select department</option>
                        <option value="sales">Sales and Services</option>
                        <option value="consulting">Consulting</option>
                        <option value="operations">Operations and Support</option>
                        <option value="careers">Careers</option>
                        <option value="partnerships">Partnerships</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-900">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="Example: Security consultation request for a site"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className="w-full resize-none rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      placeholder="Write your request or inquiry details here..."
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-5 sm:flex-row">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-2xl bg-gradient-to-r from-primary to-secondary py-6 text-white shadow-[0_16px_32px_rgba(26,58,82,0.18)] hover:from-primary/95 hover:to-secondary/95"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {isSubmitting ? 'Sending...' : 'Send Request'}
                      </span>
                    </Button>
                    <Button
                      type="reset"
                      variant="outline"
                      className="flex-1 rounded-2xl border-slate-300 py-6"
                      onClick={handleReset}
                    >
                        Clear Fields
                    </Button>
                  </div>

                  {statusMessage ? (
                    <p
                      className={`text-sm font-medium ${
                        statusType === 'success' ? 'text-emerald-600' : 'text-red-600'
                      }`}
                    >
                      {statusMessage}
                    </p>
                  ) : null}
                </form>
            </div>
          </div>
        </section>

      </main>
      <Footer
        hideSocial
        hidePhone
        contactEmail="sam@trusted-guards.com"
        contactAddressEn="21-27 Third Avenue, Kensington, Cape Town, South Africa"
      />
    </>
  )
}
