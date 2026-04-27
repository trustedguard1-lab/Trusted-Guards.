'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ClipboardList } from 'lucide-react'

const MEDICAL_LOCATIONS = ['Johannesburg','Cape Town','Durban','Pretoria','Port Elizabeth','Bloemfontein','East London','Nelspruit','Polokwane','Kimberley','George','Potchefstroom','Worcester','Richards Bay','Thohoyandou']

const EDUCATION = ['Primary','Intermediate','Secondary (Matric)','Diploma',"Bachelor's","Master's",'PhD']

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const YEARS = Array.from({ length: 60 }, (_, i) => String(2006 - i))

interface FormData {
  firstName: string
  secondName: string
  thirdName: string
  lastName: string
  idNumber: string
  phone: string
  dobDay: string
  dobMonth: string
  dobYear: string
  education: string
  medicalLocation: string
}

type FieldName = keyof FormData

export function GuardRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', secondName: '', thirdName: '', lastName: '',
    idNumber: '', phone: '',
    dobDay: '', dobMonth: '', dobYear: '',
    education: '', medicalLocation: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [captchaDone, setCaptchaDone] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<FieldName | 'agreed' | 'captcha', string>>>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (name: FieldName, value: string): string => {
    if (['firstName', 'lastName'].includes(name) && !value.trim())
      return 'Required'
    if (name === 'idNumber' && !/^\d{10}$/.test(value))
      return 'Must be 10 digits'
    if (name === 'phone' && !/^\d{10}$/.test(value.replace(/\s/g, '')))
      return 'Invalid format'
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name as FieldName]) {
      setErrors(prev => ({ ...prev, [name]: validate(name as FieldName, value) }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name as FieldName, value) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}
    const requiredFields: FieldName[] = ['firstName','lastName','idNumber','phone','dobDay','dobMonth','dobYear','education','medicalLocation']
    requiredFields.forEach(k => {
      const err = validate(k, formData[k])
      if (err || !formData[k]) newErrors[k] = err || 'Required'
    })
    if (!agreed) newErrors.agreed = 'Required'
    if (!captchaDone) newErrors.captcha = 'Please verify'
    setErrors(newErrors)
    const allTouched = requiredFields.reduce((acc, k) => ({ ...acc, [k]: true }), {})
    setTouched(allTouched)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d1117] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md rounded-3xl bg-white p-12 text-center shadow-2xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Application Submitted!
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Thank you for applying. We will contact you shortly to complete the medical procedures.
          </p>
        </motion.div>
      </div>
    )
  }

  const inputBase = 'w-full rounded-md border bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200 placeholder:text-slate-400'
  const inputErr = (name: FieldName) =>
    `${inputBase} ${errors[name] && touched[name] ? 'border-red-400' : 'border-slate-200'}`

  const selectBase = 'w-full appearance-none rounded-md border bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200'
  const selectErr = (name: FieldName) =>
    `${selectBase} ${errors[name] && touched[name] ? 'border-red-400' : 'border-slate-200'}`

  return (
    <div className="min-h-screen bg-[#0d1117] px-4 py-14" dir="ltr">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Form Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5">
            <div />
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-slate-800">
                Application
              </h2>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white">
                <ClipboardList className="h-5 w-5" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="px-8 py-8 space-y-6">
            {/* Row 1: Full Name + National ID */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Full Name — 4 sub-inputs */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    { name: 'firstName' as FieldName, placeholder: 'First' },
                    { name: 'secondName' as FieldName, placeholder: 'Second' },
                    { name: 'thirdName' as FieldName, placeholder: 'Third' },
                    { name: 'lastName' as FieldName, placeholder: 'Family' },
                  ].map(({ name, placeholder }) => (
                    <div key={name}>
                      <input
                        name={name}
                        type="text"
                        value={formData[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={inputErr(name)}
                      />
                    </div>
                  ))}
                </div>
                {(errors.firstName && touched.firstName) && (
                  <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>

              {/* National ID */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  National ID Number
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <input
                  name="idNumber"
                  type="text"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.idNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1XXXXXXXXX"
                  className={inputErr('idNumber')}
                />
                {errors.idNumber && touched.idNumber && (
                  <p className="mt-1 text-xs text-red-500">{errors.idNumber}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone + Date of Birth */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="05X XXX XXXX"
                  className={inputErr('phone')}
                />
                {errors.phone && touched.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date of Birth
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="dobDay"
                    value={formData.dobDay}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={selectErr('dobDay')}
                  >
                    <option value="">Day</option>
                    {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select
                    name="dobMonth"
                    value={formData.dobMonth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={selectErr('dobMonth')}
                  >
                    <option value="">Month</option>
                    {MONTHS.map((m, i) => (
                      <option key={m} value={String(i + 1).padStart(2, '0')}>{m}</option>
                    ))}
                  </select>
                  <select
                    name="dobYear"
                    value={formData.dobYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={selectErr('dobYear')}
                  >
                    <option value="">Year</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                {(errors.dobDay && touched.dobDay) && (
                  <p className="mt-1 text-xs text-red-500">{errors.dobDay}</p>
                )}
              </div>
            </div>

            {/* Row 3: Education + Medical Location */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Education Level
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={selectErr('education')}
                >
                  <option value="">Select Level</option>
                  {EDUCATION.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Medical Examination City
                  <span className="text-red-500 ms-1">*</span>
                </label>
                <select
                  name="medicalLocation"
                  value={formData.medicalLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={selectErr('medicalLocation')}
                >
                  <option value="">Select City</option>
                  {MEDICAL_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </div>

            {/* Declaration */}
            <div className="rounded-xl bg-slate-50 p-6">
              <label className="flex cursor-pointer gap-4">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => {
                    setAgreed(e.target.checked)
                    setErrors(prev => ({ ...prev, agreed: '' }))
                  }}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-slate-800 transition focus:ring-slate-800"
                />
                <span className="text-sm leading-6 text-slate-600">
                  I hereby declare that all information provided is true and correct. I understand that any false information may lead to the cancellation of my application.
                </span>
              </label>
              {errors.agreed && <p className="mt-2 text-xs text-red-500">{errors.agreed}</p>}
            </div>

            {/* Captcha Placeholder */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-slate-100 bg-slate-50 p-6 sm:flex-row">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={captchaDone}
                  onChange={e => {
                    setCaptchaDone(e.target.checked)
                    setErrors(prev => ({ ...prev, captcha: '' }))
                  }}
                  className="h-6 w-6 rounded-md border-slate-300 text-slate-800 transition focus:ring-slate-800"
                />
                <span className="text-sm font-medium text-slate-700">I am not a robot</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-slate-400">Security Check</p>
                <p className="text-xs font-bold text-slate-300">reCAPTCHA</p>
              </div>
            </div>
            {errors.captcha && <p className="text-center text-xs text-red-500">{errors.captcha}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
