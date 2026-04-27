'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RecruitmentHero } from '@/components/recruitment/RecruitmentHero'

export default function RecruitmentPage() {
  return (
    <>
      <Header />
      <main>
        <RecruitmentHero />
      </main>
      <Footer />
    </>
  )
}
