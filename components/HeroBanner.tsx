import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Image
        src="/images/security_products_whiteboard.png"
        alt="Security Products Whiteboard"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Smart and Reliable Security Solutions
              <span className="block text-accent mt-2">For Comprehensive and Advanced Protection</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/95 mb-8 leading-relaxed font-medium max-w-xl">
              Trusted Guards specializes in providing advanced and integrated security solutions that combine the latest smart technologies with effective physical security.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-accent font-semibold flex items-center gap-2 shadow-lg"
              >
                Discover Our Services
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
