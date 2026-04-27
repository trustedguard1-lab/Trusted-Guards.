# Trusted Guards - Professional Design System

## 📋 Overview
A clean, professional design system built for B2B security services, with white as the primary background color and navy blue with silver accents extracted directly from the Trusted Guards logo.

## 🎨 Color Palette

### Primary Colors
- **Background**: #ffffff (Pure White) - Primary background for all pages
- **Foreground**: #1a2f45 (Deep Navy) - Primary text color
- **Primary**: #1a2f45 (Deep Navy) - Main brand color from logo
- **Secondary**: #3d5a7f (Medium Navy) - Secondary actions and highlights

### Accent Colors
- **Accent**: #c0c8d0 (Silver Gray) - Highlights and accents from logo
- **Muted**: #f3f5f8 (Light Gray) - Subtle backgrounds and dividers
- **Muted Foreground**: #6b7a8c (Medium Gray) - Secondary text

### System Colors
- **Success**: #059669 (Green) - Positive actions
- **Destructive**: #dc2626 (Red) - Warnings and errors
- **Border**: #e8edf3 (Light Border) - Subtle dividers
- **Input**: #ffffff (White) - Form inputs

### Dark Mode
- **Background**: #0f172a (Very Dark Navy)
- **Foreground**: #f3f5f8 (Off White)
- Maintains the same navy and silver accent system

## 🔤 Typography

### Font Family
- **Primary**: IBM Plex Sans (Latin) + IBM Plex Sans Arabic (for RTL)
- **Weights**: 300, 400, 500, 600, 700
- **Mono**: IBM Plex Mono

### Text Hierarchy
- **Headings**: Bold (700) or Semibold (600) weights
- **Body**: Regular (400) or Medium (500) weights
- **Small**: Regular (400), reduced size
- **Line Height**: 1.5 for body text (leading-relaxed)

## 🏗️ Component Standards

### Header
- Clean white background with subtle border
- Professional navigation with smooth hover effects
- Logo scales smoothly on scroll
- No unnecessary gradients or effects

### Hero Banner
- Background image with navy blue overlay
- Clean white text with silver accents
- Minimal, professional typography
- White button with primary text on hover

### Service Cards
- White background with subtle borders
- Icon backgrounds using primary color (10% opacity)
- Clean typography without gradients
- Smooth hover effects with border and shadow changes

### Footer
- White background with light border
- Organized link columns with clear hierarchy
- Muted text colors for secondary information
- Small, professional typography throughout

### Buttons
- Primary: Deep Navy background, white text
- Secondary: Light backgrounds with navy text
- Hover: Color shifts and slight scale increase
- No loud gradients or multiple color layers

### Forms
- White inputs with subtle borders
- Label text in primary color
- Clear focus states
- Proper spacing and organization using field components

## 📐 Spacing & Layout

### Base Unit
- 4px spacing scale
- Padding: 4px, 8px, 12px, 16px, 24px, 32px (p-1 through p-8)
- Gaps: 4px, 8px, 16px, 24px (gap-1 through gap-6)

### Border Radius
- Small: 0.375rem (6px)
- Medium: 0.5rem (8px)
- Large: 0.75rem (12px)
- Extra Large: 1rem (16px)

### Layout Method Priority
1. **Flexbox** for most layouts (row, column, grid-like)
2. **CSS Grid** for 2D complex layouts only
3. **Max-width**: 80rem (1280px) for main container

## ✨ Design Principles

### Professional & Organized
- Clean, uncluttered layouts
- Consistent spacing and alignment
- Clear visual hierarchy
- No unnecessary animations or decorative elements

### Brand Consistent
- Navy blue and silver from logo appears throughout
- White backgrounds for clean, modern look
- Subtle shadows for depth (not bold)
- Professional, business-appropriate colors

### Accessibility
- Minimum contrast ratio 4.5:1 for text
- Clear focus states on interactive elements
- Proper text sizing (min 14px body text)
- ARIA labels on interactive components

### Performance
- Minimal animations (300ms duration max)
- No heavy gradients or blurs
- Optimized font loading (IBM Plex Sans)
- Single font family for consistency

## 🔄 Transitions & Interactions

- **Duration**: 200-300ms for smooth transitions
- **Easing**: ease-in-out for natural motion
- **Hover**: Subtle color shifts, slight shadows
- **Active**: Scale 95% for button feedback

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Header**: Scales smoothly on scroll
- **Navigation**: Hamburger menu on mobile

---

**Version**: 1.0  
**Last Updated**: 2026-03-24  
**Font**: IBM Plex Sans (with full Arabic support)
