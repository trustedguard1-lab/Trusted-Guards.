import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Trusted Guards — Join Our Security Team in South Africa',
  description:
    'Explore career opportunities at Trusted Guards. We are hiring security officers, control room operators, consultants, and fire safety specialists across Johannesburg, Cape Town, Durban, and Pretoria.',
  openGraph: {
    title: 'Careers at Trusted Guards',
    description:
      'Join Africa\'s leading security solutions provider. Browse open positions and apply today.',
    type: 'website',
  },
  keywords: [
    'Trusted Guards careers',
    'security jobs South Africa',
    'security officer jobs',
    'Johannesburg security',
    'Cape Town security',
    'PSIRA registered',
    'fire safety specialist',
    'control room operator',
  ],
}

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
