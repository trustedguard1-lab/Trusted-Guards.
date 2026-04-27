'use client';

import { SectorCard } from './SectorCard';

interface Sector {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface SectorsGridProps {
  sectors: Sector[];
  language: string;
}

export function SectorsGrid({ sectors, language }: SectorsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectors.map((sector) => (
        <SectorCard
          key={sector.id}
          id={sector.id}
          name={sector.name}
          description={sector.description}
          icon={sector.icon}
          color={sector.color}
          language={language}
        />
      ))}
    </div>
  );
}
