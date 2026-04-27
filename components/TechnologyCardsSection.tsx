"use client"

import Image from 'next/image';

const technologyServices = [
  {
    id: 'unmanned-aircraft',
    title: 'Safe Unmanned Aircraft',
    image: '/images/pexels-clickerhappy-539124.jpg',
    description: 'State-of-the-art drone technology for surveillance, inspection, and reconnaissance with advanced stabilization and safety features.',
    features: [
      '4K/8K surveillance',
      'Thermal imaging',
      'Wide coverage area',
      'Real-time data transmission',
      'Night vision capability',
      'Weather resistant'
    ],
  },
  {
    id: 'advanced-analytics',
    title: 'Advanced Analytics',
    image: '/images/security_operator_black.png',
    description: 'Intelligent analytics for advanced threat detection, behavioral monitoring, and predictive security measures.',
    features: [
      'Behavioral analysis',
      'Anomaly detection',
      'Predictive monitoring',
      'Pattern recognition',
      'Threat detection',
      'Operational insights'
    ],
  },
  {
    id: 'identity-management',
    title: 'Identity & Physical Access Management',
    image: '/images/generated_cyber_security.png',
    description: 'Biometric and advanced authentication systems for secure access control with comprehensive audit trails.',
    features: [
      'Fingerprint recognition',
      'Facial biometrics',
      'RFID card systems',
      'Multi-factor authentication',
      'Access logging',
      'Real-time alerts'
    ],
  },
  {
    id: 'inspection-verification',
    title: 'Inspection & Verification Solutions',
    image: '/images/tech-surveillance.jpg',
    description: 'Comprehensive inspection tools and verification systems for quality assurance and compliance checking.',
    features: [
      'Digital inspection forms',
      'Real-time reporting',
      'Compliance tracking',
      'Automated verification',
      'Document management',
      'Quality assurance'
    ],
  },
]

export function TechnologyCardsSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" dir="ltr">
      {/* Section Title */}
      <div className="mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Advanced Technology Services
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl">
          Comprehensive technology solutions combining cutting-edge innovations with practical expertise for complete protection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {technologyServices.map((service) => (
          <div
            key={service.id}
            className="relative h-96 rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/10 hover:border-blue-400/30"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient Overlay - Dynamic on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-slate-900/10 group-hover:from-slate-950/70 group-hover:via-slate-900/30 group-hover:to-transparent transition-colors duration-700"></div>
            
            {/* Accent Glow on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-500/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-blue-500/10 group-hover:to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
            
            <div className="absolute inset-x-0 bottom-0 z-30 p-6 md:p-8">
              <div className="text-left">
                <h3 className="text-xl font-bold leading-tight text-white drop-shadow-lg md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 hidden max-w-[92%] translate-y-3 text-sm leading-7 text-white/82 opacity-0 transition-all duration-500 md:block md:group-hover:translate-y-0 md:group-hover:opacity-100 text-left">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
