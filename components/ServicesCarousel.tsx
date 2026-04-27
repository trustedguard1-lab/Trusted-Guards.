"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const cardsPerView = 4;
  const services = [
    {
      id: "technology",
      title: "Technology",
      image: "/images/pexels-clickerhappy-539124.jpg",
      description: "Advanced technological solutions and smart systems",
    },
    {
      id: "fire-rescue",
      title: "Fire & Rescue",
      image: "/images/firefighter_black.png",
      description: "Professional rescue teams with cutting-edge equipment",
    },
    {
      id: "facilities-management",
      title: "Facility Management",
      image: "/images/security_technician_black.png",
      description: "Integrated infrastructure and maintenance management",
    },
    {
      id: "marine",
      title: "Marine Protection",
      image: "/images/modern_boat_sea.png",
      description: "Advanced maritime and coastal security services",
    },
    {
      id: "vip-protection",
      title: "VIP Protection",
      image: "/images/3.png",
      description: "Luxury and discreet personal protection services",
    },
    {
      id: "events",
      title: "Event Security Services",
      image: "/images/security_team_black_v2.png",
      description: "Comprehensive security for events and conferences",
    },
    {
      id: "safety-zone",
      title: "Safety Zone",
      image: "/images/safety_zone_hyper_realistic_dome.png",
      description: "Advanced counter-drone protection for sensitive sites and privacy defense",
    },
    {
      id: "command-center",
      title: "Command & Control Center",
      image: "/images/security_operator_black.png",
      description: "Modern control room with smart surveillance systems",
    },
  ];
  const maxIndex = Math.max(0, services.length - cardsPerView);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="brand-kicker mb-3 text-xs font-bold">
            Our Services
          </p>
          <h2 className="brand-section-title mb-6 text-3xl font-black md:text-5xl">
            Core services with a clear offer.
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-foreground/70">
            Solutions designed to protect critical sites with disciplined execution.
          </p>
        </div>
        <div className="relative flex items-center min-h-[420px]">
          <button
            aria-label="Previous"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            className="absolute left-2 z-10 bg-accent/90 hover:bg-accent text-white rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex gap-8 w-full justify-center">
            {services.slice(activeIndex, activeIndex + cardsPerView).map((service) => (
              <Link
                key={service.id}
                href={`/${lang}/services/${service.id}`}
                className="w-full max-w-lg focus:outline-none group rounded-3xl overflow-hidden bg-white/90 shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                style={{ textDecoration: 'none' }}
              >
                <div className="relative h-[29rem] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-7 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                    <div className="text-2xl font-extrabold text-white text-left drop-shadow-lg">
                      {service.title}
                    </div>
                    <div className="text-base text-white/90 font-medium drop-shadow-md">
                      {service.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setActiveIndex((prev) => Math.min(maxIndex, prev + 1))}
            disabled={activeIndex >= maxIndex}
            className="absolute right-2 z-10 bg-accent/90 hover:bg-accent text-white rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
