import React from 'react'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  description?: string
  gradient?: string
  index?: number
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  description,
  gradient = 'from-primary to-secondary',
  index = 0,
}: StatsCardProps) {
  return (
    <div
      className="group relative p-6 rounded-xl border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur-xl hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
      }}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Icon container with glow effect */}
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10 group-hover:from-accent/20 group-hover:to-secondary/20 transition-all duration-500">
          <Icon className="w-6 h-6 text-accent group-hover:text-secondary transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
          {value}
        </div>
        <p className="text-sm font-semibold text-muted-foreground mb-2">
          {label}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-500">
            {description}
          </p>
        )}
      </div>

      {/* Hover underline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

export default StatsCard
