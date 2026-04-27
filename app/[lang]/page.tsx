import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import HeroSectionWithVideo from '@/components/HeroSectionWithVideo'
import { AboutSection } from '@/components/AboutSection'
import { ServicesCarousel } from '@/components/ServicesCarousel'
import { SolutionsNavigator } from '../../components/SolutionsNavigator'
import { StatsSection } from '@/components/StatsSection'
export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSectionWithVideo />
        <AboutSection />
        <StatsSection />
        <ServicesCarousel />
        <SolutionsNavigator />
      </main>
      <Footer />
    </>
  )
}
