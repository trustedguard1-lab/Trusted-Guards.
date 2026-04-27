'use client'

import Image from 'next/image'

export function ClientsSection() {
  const clients = [
    { name: 'Standard Bank', category: 'Financial Sector', logo: '/images/clients/standard-bank.png' },
    { name: 'Netcare Hospital', category: 'Healthcare Sector', logo: '/images/clients/netcare.png' },
    { name: 'V&A Waterfront', category: 'Retail Sector', logo: '/images/clients/va-waterfront.png' },
    { name: 'CSIR', category: 'Government Sector', logo: '/images/clients/csir.png' },
    { name: 'University of Cape Town', category: 'Education Sector', logo: '/images/clients/uct.png' },
    { name: 'Table Bay Hotel', category: 'Hospitality Sector', logo: '/images/clients/table-bay.png' },
    { name: 'Vodacom', category: 'Telecommunications', logo: '/images/clients/vodacom.png' },
    { name: 'PPC Cement', category: 'Industrial Sector', logo: '/images/clients/ppc.png' },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're proud to be trusted by hundreds of companies and organizations
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div key={index} className="group relative h-44 rounded-2xl overflow-hidden shadow-lg bg-white/90 transition-all duration-700 cursor-pointer flex items-end justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                <div className="text-lg font-extrabold text-white text-center drop-shadow-lg">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
