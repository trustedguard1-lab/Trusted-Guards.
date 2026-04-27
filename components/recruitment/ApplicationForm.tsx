'use client'

import { useState, useMemo, useRef } from 'react'
import { Send, CheckCircle2, ClipboardCheck, Upload, AlertCircle, X } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface FormErrors {
  [key: string]: string
}

export function ApplicationForm() {
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-50px' })

  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    email: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    education: '',
    city: '',
    position: '',
    coverLetter: '',
  })

  const positions = ['Security Officer', 'Control Room Operator', 'Security Consultant', 'Fire Safety Specialist', 'Administrative Coordinator']

  const educationLevels = ['Matric / Grade 12', 'Diploma', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD']

  const saCities = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein']

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1))
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1))
  const years = Array.from({ length: 50 }, (_, i) => String(2008 - i))

  // Validation
  const validate = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return 'This field is required'
        if (value.trim().length < 2) return 'Must be at least 2 characters'
        return ''
      case 'idNumber':
        if (!value.trim()) return 'ID number is required'
        if (!/^\d{13}$/.test(value)) return 'SA ID number must be 13 digits'
        return ''
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        if (!/^(\+27|0)\d{9}$/.test(value.replace(/\s/g, '')))
          return 'Format: +27 XX XXX XXXX or 0XX XXX XXXX'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Invalid email address'
        return ''
      case 'position':
        if (!value) return 'Please select a position'
        return ''
      case 'education':
        if (!value) return 'Please select education level'
        return ''
      case 'city':
        if (!value) return 'Please select a city'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size must not exceed 5MB' }))
        return
      }
      if (file.type !== 'application/pdf') {
        setErrors((prev) => ({ ...prev, resume: 'Please upload a PDF file only' }))
        return
      }
      setFileName(file.name)
      setErrors((prev) => ({ ...prev, resume: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return

    const requiredFields = ['firstName', 'lastName', 'idNumber', 'phone', 'email', 'position', 'education', 'city']
    const newErrors: FormErrors = {}
    const newTouched: Record<string, boolean> = {}
    let hasErrors = false

    for (const field of requiredFields) {
      const error = validate(field, formData[field as keyof typeof formData])
      if (error) {
        newErrors[field] = error
        hasErrors = true
      }
      newTouched[field] = true
    }

    setErrors((prev) => ({ ...prev, ...newErrors }))
    setTouched((prev) => ({ ...prev, ...newTouched }))

    if (hasErrors) return
    setSubmitted(true)
  }

  // Progress calculation
  const progress = useMemo(() => {
    const requiredFields = ['firstName', 'lastName', 'idNumber', 'phone', 'email', 'position', 'education', 'city', 'dobDay', 'dobMonth', 'dobYear']
    const filled = requiredFields.filter((f) => formData[f as keyof typeof formData]).length
    const base = (filled / requiredFields.length) * 90
    const extras = (agreed ? 5 : 0) + (fileName ? 5 : 0)
    return Math.round(base + extras)
  }, [formData, agreed, fileName])

  const inputClass =
    'w-full rounded-lg border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-foreground/30 focus:ring-2 focus:ring-primary/10'
  const selectClass =
    'w-full rounded-lg border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/10'
  const labelClass = 'mb-1.5 block text-sm font-semibold text-foreground/80'

  const getInputBorder = (name: string) =>
    errors[name] && touched[name] ? 'border-red-400 focus:border-red-400' : 'border-primary/10 focus:border-primary/30'

  const ErrorMessage = ({ name }: { name: string }) =>
    errors[name] && touched[name] ? (
      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
        <AlertCircle className="h-3 w-3" />
        {errors[name]}
      </p>
    ) : null

  if (submitted) {
    return (
      <section id="apply" className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center" dir="ltr">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl border border-emerald-200 bg-white p-12 shadow-sm"
          >
            <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-emerald-500" />
            <h3 className="text-2xl font-bold text-foreground">
              Application Submitted Successfully!
            </h3>
            <p className="mt-3 text-foreground/60">
              We will review it and contact you soon.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false)
                setFormData({ firstName: '', secondName: '', lastName: '', idNumber: '', phone: '', email: '', dobDay: '', dobMonth: '', dobYear: '', education: '', city: '', position: '', coverLetter: '' })
                setAgreed(false)
                setFileName('')
                setErrors({})
                setTouched({})
              }}
              className="mt-6 rounded-xl"
              variant="outline"
            >
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="bg-slate-50 py-14 md:py-20">
      <div ref={formRef} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" dir="ltr">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/8 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        >
          {/* Header + Progress */}
          <div className="border-b border-primary/8 px-6 py-5 md:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/8 p-2.5">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Application
                </h2>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="text-xs font-semibold text-foreground/50">{progress}%</span>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>
            {/* Mobile progress */}
            <div className="mt-3 sm:hidden">
              <div className="flex items-center justify-between text-xs text-foreground/50">
                <span>Completion</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Full Name Row */}
            <div className="mb-6">
              <label className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass} ${getInputBorder('firstName')}`}
                    placeholder="First Name"
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div>
                  <input
                    name="secondName"
                    type="text"
                    value={formData.secondName}
                    onChange={handleChange}
                    className={`${inputClass} border-primary/10 focus:border-primary/30`}
                    placeholder="Middle Name (optional)"
                  />
                </div>
                <div>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass} ${getInputBorder('lastName')}`}
                    placeholder="Last Name"
                  />
                  <ErrorMessage name="lastName" />
                </div>
              </div>
            </div>

            {/* Email + Phone */}
            <div className="mb-6 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${getInputBorder('email')}`}
                  placeholder="name@example.com"
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${getInputBorder('phone')}`}
                  placeholder="+27 XX XXX XXXX"
                />
                <ErrorMessage name="phone" />
              </div>
            </div>

            {/* SA ID + Position */}
            <div className="mb-6 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="idNumber" className={labelClass}>
                  South African ID Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  maxLength={13}
                  value={formData.idNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${getInputBorder('idNumber')}`}
                  placeholder="13 digits — YYMMDDXXXXXXX"
                />
                <ErrorMessage name="idNumber" />
              </div>
              <div>
                <label htmlFor="position" className={labelClass}>
                  Position Applied For <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${selectClass} ${getInputBorder('position')}`}
                >
                  <option value="">Select a position</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
                <ErrorMessage name="position" />
              </div>
            </div>

            {/* DOB + Education */}
            <div className="mb-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select name="dobDay" value={formData.dobDay} onChange={handleChange} className={`${selectClass} border-primary/10 focus:border-primary/30`}>
                    <option value="">Day</option>
                    {days.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select name="dobMonth" value={formData.dobMonth} onChange={handleChange} className={`${selectClass} border-primary/10 focus:border-primary/30`}>
                    <option value="">Month</option>
                    {months.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select name="dobYear" value={formData.dobYear} onChange={handleChange} className={`${selectClass} border-primary/10 focus:border-primary/30`}>
                    <option value="">Year</option>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="education" className={labelClass}>
                  Education Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${selectClass} ${getInputBorder('education')}`}
                >
                  <option value="">Select level</option>
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <ErrorMessage name="education" />
              </div>
            </div>

            {/* City + Resume */}
            <div className="mb-6 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="city" className={labelClass}>
                  Nearest City <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${selectClass} ${getInputBorder('city')}`}
                >
                  <option value="">Select a city</option>
                  {saCities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ErrorMessage name="city" />
              </div>
              <div>
                <label className={labelClass}>
                  Resume / CV (PDF — max 5MB)
                </label>
                <div className="relative">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-3 text-sm transition-all duration-200 hover:border-primary/30 ${
                      errors.resume ? 'border-red-400 bg-red-50/30' : 'border-primary/10 bg-slate-50/50'
                    }`}
                  >
                    <Upload className={`h-5 w-5 ${errors.resume ? 'text-red-400' : 'text-primary/40'}`} />
                    <span className="flex-1 truncate text-foreground/50">
                      {fileName || 'Upload your PDF CV'}
                    </span>
                    {fileName && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setFileName('')
                        }}
                        className="rounded-full p-1 hover:bg-slate-200"
                      >
                        <X className="h-4 w-4 text-foreground/40" />
                      </button>
                    )}
                  </label>
                </div>
                <ErrorMessage name="resume" />
              </div>
            </div>

            {/* Declaration */}
            <div className="mb-8 rounded-xl bg-slate-50/50 p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-primary/20 text-primary transition focus:ring-primary/20"
                />
                <span className="text-xs leading-5 text-foreground/60">
                  I hereby declare that all information provided is true and correct. I understand that any false information may lead to the cancellation of my application and potential legal action.
                </span>
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={!agreed}
              className="relative w-full overflow-hidden rounded-xl bg-primary py-6 text-base font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="h-5 w-5" />
                Submit Application
              </span>
            </Button>

            <p className="mt-4 text-center text-xs text-foreground/35">
              By submitting this form, you agree to our recruitment privacy policy and data processing terms.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
