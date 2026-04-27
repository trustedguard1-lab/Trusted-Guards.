'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GuardRequestForm } from '@/components/recruitment/GuardRequestForm'

export default function SecurityCareerPage() {
  return (
    <>
      <Header />
      <main>
        <GuardRequestForm />
      </main>
      <Footer />
    </>
  )
}

