'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SectorDetailProps {
  name: string;
  description: string;
  features: string[];
  services: string[];
  icon: React.ReactNode;
  color: string;
  language: string;
  backLink: string;
}

export function SectorDetail({
  name,
  description,
  features,
  services,
  icon,
  color,
  language,
  backLink
}: SectorDetailProps) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href={backLink} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
        <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
        {language === 'ar' ? 'العودة إلى القطاعات' : 'Back to Sectors'}
      </Link>

      {/* Header */}
      <div className={`${color} rounded-lg p-8 md:p-12 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{icon}</div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
        <p className="text-lg opacity-90 max-w-2xl">{description}</p>
      </div>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'ar' ? 'المميزات والخدمات' : 'Features & Services'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">
                {language === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
              </h3>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`${color.replace('bg-', 'text-')} font-bold mr-3 mt-1`}>✓</div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">
                {language === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h3>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`${color.replace('bg-', 'text-')} font-bold mr-3 mt-1`}>→</div>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'ar' ? 'هل تبحث عن خدمات متخصصة؟' : 'Looking for specialized services?'}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          {language === 'ar' 
            ? 'اتصل بفريقنا المتخصص للحصول على حلول مخصصة لاحتياجات قطاعك'
            : 'Contact our specialized team to get customized solutions for your sector needs'}
        </p>
        <Button size="lg" className="gap-2">
          {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
