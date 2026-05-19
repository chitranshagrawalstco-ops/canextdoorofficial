---
name: Light Minimalist Scholar
colors:
  surface: '#ffffff'
  surface-dim: '#f8fafc'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5f9'
  surface-container: '#f8fafc'
  surface-container-high: '#e2e8f0'
  surface-container-highest: '#cbd5e1'
  on-surface: '#0f172a'
  on-surface-variant: '#475569'
  inverse-surface: '#0f172a'
  inverse-on-surface: '#ffffff'
  outline: '#cbd5e1'
  outline-variant: '#e2e8f0'
  surface-tint: '#6366f1'
  primary: '#6366f1'
  on-primary: '#ffffff'
  primary-container: '#e0e7ff'
  on-primary-container: '#3730a3'
  inverse-primary: '#818cf8'
  secondary: '#0ea5e9'
  on-secondary: '#ffffff'
  secondary-container: '#e0f2fe'
  on-secondary-container: '#0369a1'
  tertiary: '#ec4899'
  on-tertiary: '#ffffff'
  tertiary-container: '#fce7f3'
  on-tertiary-container: '#9d174d'
  error: '#ef4444'
  on-error: '#ffffff'
  error-container: '#fee2e2'
  on-error-container: '#991b1b'
  primary-fixed: '#e0e7ff'
  primary-fixed-dim: '#c7d2fe'
  on-primary-fixed: '#312e81'
  on-primary-fixed-variant: '#4f46e5'
  secondary-fixed: '#e0f2fe'
  secondary-fixed-dim: '#bae6fd'
  on-secondary-fixed: '#0c4a6e'
  on-secondary-fixed-variant: '#0284c7'
  tertiary-fixed: '#fce7f3'
  tertiary-fixed-dim: '#fbcfe8'
  on-tertiary-fixed: '#701a75'
  on-tertiary-fixed-variant: '#db2777'
  background: '#fafbfd'
  on-background: '#0f172a'
  surface-variant: '#f1f5f9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is engineered for the high-achieving student who values clarity, order, and calm focus. The brand personality is prestigious, scholarly, and exceptionally clean. It replaces dark, high-contrast, gamified neon styling with a **Light Minimalist Scholar** aesthetic, prioritizing generous white space, subtle slate borders, and soft shadows over deep backgrounds.

The visual style is **Soft Minimal Glassmorphism on a Light Background**. It features high legibility, clean card components with light borders, and subtle colorful accents to emphasize progress without causing visual fatigue.

## Colors

The background is a soft, warm off-white (`#FAFBFD`), which reduces eye strain compared to harsh pure white.

- **Primary:** A refined, academic indigo (`#6366F1`) used for key actions, navigation highlights, and progress elements.
- **Secondary:** A bright sky blue (`#0EA5E9`) used for secondary links and informative indicators.
- **Surface:** Pure white (`#FFFFFF`) forms the containers, giving them a clean, elevated look.
- **Borders & Grids:** Very thin, low-opacity slate lines (`#E2E8F0`) keep sections organized without heavy visual weight.

## Elevation & Depth

Depth is subtle and natural:
1. **Cards:** Pure white background, very thin light border (`#E2E8F0` or `rgba(226, 232, 240, 0.8)`), and a soft ambient shadow (`0 10px 30px -10px rgba(15, 23, 42, 0.04)`).
2. **Backdrop Blur:** Modals and sticky menus use high blur with a semi-transparent white backdrop (`rgba(255, 255, 255, 0.85)`).
