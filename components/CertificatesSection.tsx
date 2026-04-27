'use client'

import Image from 'next/image'
import { Award } from 'lucide-react'

export function CertificatesSection() {
  const certificates = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      image: '/images/cert-iso.jpg'
    },
    {
      title: 'ISO 27001:2022',
      description: 'Information Security Management',
      image: '/images/cert-security.jpg'
    },
    {
      title: 'PSIRA',
      description: 'Private Security Industry Regulatory Authority',
      image: '/images/cert-psira.jpg'
    },
    {
      title: 'SABS',
      description: 'South African Bureau of Standards',
      image: '/images/cert-sabs.jpg'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Certified with multiple international certifications and accreditations
          </p>
        </div>

        {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
                <div key={index} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg bg-white/90 transition-all duration-700 cursor-pointer flex items-end">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-7 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                    <div className="text-2xl font-extrabold text-white text-left drop-shadow-lg">
                      {cert.title}
                    </div>
                    <div className="text-base text-white/90 font-medium drop-shadow-md">
                      {cert.description}
                    </div>
                  </div>
                </div>
          ))}
        </div>
      </div>
    </section>
  )
}
