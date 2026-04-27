import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: string
  animated?: boolean
}

export function GradientText({
  children,
  className = '',
  gradient = 'from-accent via-secondary to-blue-400',
  animated = false,
}: GradientTextProps) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${
        animated ? 'animate-gradient-shift' : ''
      } ${className}`}
      style={{
        backgroundSize: animated ? '200% 200%' : 'auto',
      }}
    >
      {children}
    </span>
  )
}

export default GradientText
