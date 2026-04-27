import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectorsGrid } from '@/components/SectorsGrid';

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Sectors - Trusted Guards',
    description: 'Specialized security services across all sectors and industries'
  }
}

const sectorsData = {
  en: [
    {
      id: 'banks',
      name: 'Banks',
      description: 'Comprehensive security solutions for banking institutions',
      icon: '🏦',
      color: 'bg-primary'
    },
    {
      id: 'tourism',
      name: 'Tourism',
      description: 'Protection and security services for hotels and tourism facilities',
      icon: '🏨',
      color: 'bg-secondary'
    },
    {
      id: 'government',
      name: 'Government & Authorities',
      description: 'Specialized security for government offices and public institutions',
      icon: '🏛️',
      color: 'bg-primary'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      description: 'Security services for cinemas, theaters, and entertainment venues',
      icon: '🎭',
      color: 'bg-secondary'
    },
    {
      id: 'mega-projects',
      name: 'Mega Projects',
      description: 'Large-scale security management for major construction and projects',
      icon: '🏗️',
      color: 'bg-primary'
    },
    {
      id: 'sports',
      name: 'Sports',
      description: 'Event security and protection services for sports facilities',
      icon: '⚽',
      color: 'bg-secondary'
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      description: 'Property and residential complex security solutions',
      icon: '🏢',
      color: 'bg-primary'
    },
    {
      id: 'industries',
      name: 'Industries',
      description: 'Industrial facility protection and workplace security',
      icon: '🏭',
      color: 'bg-secondary'
    },
    {
      id: 'aviation-transport',
      name: 'Aviation & Transport',
      description: 'Aviation and transportation sector security services',
      icon: '✈️',
      color: 'bg-primary'
    }
  ]
};

export default async function SectorsPage({ params }: PageProps) {
  const sectors = sectorsData.en;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sectors
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Specialized security services across all sectors and industries
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <SectorsGrid sectors={sectors} language="en" />
        </section>
      </main>
      <Footer />
    </>
  );
}
