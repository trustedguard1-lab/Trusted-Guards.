import React from 'react'
import { LucideIcon } from 'lucide-react'

const animationDelayClasses = [
  'animate-delay-0',
  'animate-delay-100',
  'animate-delay-200',
  'animate-delay-300',
  'animate-delay-400',
  'animate-delay-500',
]

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  gradient?: string
  index?: number
  isHighlighted?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  gradient = 'from-primary/10 to-secondary/10',
  index = 0,
  isHighlighted = false,
}: ServiceCardProps): React.JSX.Element {
  const delayClass = animationDelayClasses[index % animationDelayClasses.length]

  return (
    <div
      className={`group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${delayClass} ${
        isHighlighted ? 'ring-2 ring-primary/40' : ''
      }`}
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-primary`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
