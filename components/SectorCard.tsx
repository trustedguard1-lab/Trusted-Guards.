'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface SectorCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  language: string;
}

export function SectorCard({
  id,
  name,
  description,
  icon,
  color,
  language,
}: SectorCardProps) {
  const href = `/${language}/sectors/${id}`;
  const isArabic = language === 'ar';

  return (
    <Link href={href} className="group block">
      <Card className="h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
            {icon}
          </div>
          <h3 className={`mb-2 text-xl font-bold text-foreground ${color}`}>
            {name}
          </h3>
          <p className="mb-5 line-clamp-3 text-sm text-muted-foreground">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary/80">
            {isArabic ? 'اعرف المزيد' : 'Learn more'}
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
