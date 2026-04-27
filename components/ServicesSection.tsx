'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ServicesSection() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en'

  const services = [
    {
      title: 'Technology',
      description: 'Advanced technological solutions for cybersecurity and digital infrastructure, intelligent systems to protect your digital assets',
      image: '/images/pexels-clickerhappy-539124.jpg',
      href: `/${language}/services/technology`
    },
    {
      title: 'Fire Fighting & Rescue',
      description: 'Professional rescue teams equipped with cutting-edge equipment, rapid and effective emergency response',
      image: '/images/firefighter_black.png',
      href: `/${language}/services/fire-rescue`
    },
    {
      title: 'Facilities Management',
      description: 'Integrated facility and infrastructure management, preventive maintenance for optimal operations',
      image: '/images/security_technician_black.png',
      href: `/${language}/services/facilities-management`
    },
    {
      title: 'Marine Protection',
      description: 'Maritime and coastal security services, comprehensive protection of marine resources and borders',
      image: '/images/modern_boat_sea.png',
      href: `/${language}/services/marine`
    },
    {
      title: 'VIP Protection',
      description: 'Luxury and discreet personal protection services, customized protection for important personalities and officials',
      image: '/images/3.png',
      href: `/${language}/services/vip-protection`
    },
    {
      title: 'Event Security Services',
      description: 'Comprehensive security for events, conferences and celebrations, professional security and attendance management',
      image: '/images/security_team_black_v2.png',
      href: `/${language}/services/events`
    },
    {
      title: 'Security Consulting',
      description: 'Specialized consulting services that help organizations assess risks, build strategies, and improve operational readiness',
      image: '/images/security_operator_black.png',
      href: `/${language}/services/consultations`
    },
    {
      title: 'Safety Zone',
      description: 'An advanced solution for combating aerial intrusion that combines early detection, electronic jamming, and interception to protect privacy and sensitive facilities',
      image: '/images/safety_zone_hyper_realistic_dome.png',
      href: `/${language}/services/safety-zone`
    },
    {
      title: 'Command & Control Center',
      description: 'Advanced operations center for 24/7 monitoring and control, modern control room with latest smart surveillance systems',
      image: '/images/security_operator_black.png',
      href: `/${language}/services/command-center`
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-medium">
            Each service engineered to counter specific threats, powered by cutting-edge technology and unmatched operational expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-xl bg-white/90 transition-all duration-700 cursor-pointer flex items-end">
                {/* صورة الخدمة */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* تدرج غامق */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700" />
                {/* النصوص تظهر فقط عند المرور */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-4 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                  <div className="text-3xl font-extrabold text-white text-left drop-shadow-lg">
                    {service.title}
                  </div>
                  <div className="text-lg text-white/90 font-medium drop-shadow-md">
                    {service.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={`/${language}/services`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:shadow-2xl hover:scale-105 active:scale-95 rounded-lg transition-all duration-300 font-bold shadow-lg hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 group"
          >
            View All Services
            <span className="inline-flex group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
