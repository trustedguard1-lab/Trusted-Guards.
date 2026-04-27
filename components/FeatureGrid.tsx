import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: FeatureItem[]
  columns?: number
  title?: string
  subtitle?: string
}

export function FeatureGrid({
  features,
  columns = 3,
  title,
  subtitle,
}: FeatureGridProps) {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-12 sm:mb-16">
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className={`grid gap-6 sm:gap-8 grid-cols-1 ${
          columns === 2
            ? 'sm:grid-cols-2'
            : columns === 4
            ? 'sm:grid-cols-2 lg:grid-cols-4'
            : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-xl border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur-xl hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 animate-fade-in-up"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10 group-hover:from-accent/20 group-hover:to-secondary/20 transition-all duration-500">
                  <Icon className="w-6 h-6 text-accent group-hover:text-secondary transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureGrid
