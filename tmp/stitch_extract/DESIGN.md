---
name: Ventura Mono
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1c'
  surface-container: '#202020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c0c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#8b91a0'
  outline-variant: '#414754'
  surface-tint: '#aac7ff'
  primary: '#aac7ff'
  on-primary: '#003064'
  primary-container: '#3e90ff'
  on-primary-container: '#002957'
  inverse-primary: '#005db8'
  secondary: '#c2c1ff'
  on-secondary: '#1800a7'
  secondary-container: '#3630bf'
  on-secondary-container: '#b1b1ff'
  tertiary: '#ffb691'
  on-tertiary: '#552000'
  tertiary-container: '#eb6a12'
  on-tertiary-container: '#4a1b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468d'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c2c1ff'
  on-secondary-fixed: '#0c006b'
  on-secondary-fixed-variant: '#332dbc'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793100'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-safe: 40px
  bento-gap: 16px
  max-width: 1200px
---

## Brand & Style

The design system is centered on a premium, desktop-class experience tailored for developer portfolios. It bridges the gap between a high-end operating system and a personal brand, evoking a sense of technical mastery and refined aesthetics.

The style is **Glassmorphism mixed with Modern Minimalism**. It utilizes translucent layers, significant background blurs, and precise "retina-ready" detailing. The emotional response should be one of "software as craft"—clean, high-performance, and intentionally organized. The interface mimics the depth and tactility of macOS, using bento-grid patterns to modularize projects, skills, and experience into digestible, interactive "app-like" containers.

## Colors

The palette is designed for high-fidelity rendering across light and dark modes. The **Primary Color** (Accent) follows the system-standard Blue, used for primary actions and active states.

- **Dark Mode (Default):** Uses a deep charcoal base (#1e1e1e). Surfaces are translucent (#2d2d2d at 60% opacity) with a 20px-30px backdrop-filter blur.
- **Light Mode:** Uses the signature off-white (#f5f5f7). Surfaces are semi-transparent white (70% opacity) to maintain legibility against blurred background elements.
- **Bilingual Support:** Use the accent color for the language toggle. The inactive language should reside at 50% opacity neutral, while the active language uses the primary accent.

## Typography

This design system uses **Hanken Grotesk** as the primary typeface to emulate the clarity and geometric balance of SF Pro. It is paired with **JetBrains Mono** for technical labels and code snippets to reinforce the developer-centric identity.

- **Scale:** Headlines use tight letter-spacing (-0.02em) to mimic premium editorial layouts.
- **Hierarchy:** Display sizes are reserved for "Hero" sections and project titles in bento boxes.
- **Bilingual Considerations:** Ensure line-heights are generous enough to accommodate the slightly taller Cyrillic character heights in RU mode. Avoid using "All Caps" for long Russian strings as it can hinder legibility.

## Layout & Spacing

The layout utilizes a **Bento Grid** philosophy—a modular, fixed-grid approach where content is grouped into distinct, rounded containers.

- **Desktop:** A 12-column grid with a 1200px max-width. Bento cells should span 3, 4, 6, or 12 columns.
- **Tablet:** 8-column grid. Bento cells reflow into a 2-column stacked layout.
- **Mobile:** 4-column grid. Bento cells become full-width cards.
- **Magnetic Interaction:** Elements within the grid should feature a slight "magnetic" pull toward the cursor (10px-15px offset) when hovered, creating a highly responsive, tactile feeling.

## Elevation & Depth

Hierarchy is defined through **Glassmorphism** rather than traditional drop shadows.

1.  **Level 0 (Base):** The background layer, often containing a subtle mesh gradient or a muted wallpaper-style image.
2.  **Level 1 (Bento Cards):** Translucent surfaces with a `backdrop-filter: blur(20px)`. In Dark Mode, add a 1px inner border (stroke) at 10% white to define the edge.
3.  **Level 2 (Modals/Popovers):** Higher opacity (85%) with a more pronounced outer shadow (0 20px 40px rgba(0,0,0,0.3)) to simulate physical distance from the grid.

All elevated surfaces must include a subtle "inner glow" or "rim light" on the top edge to simulate the macOS window aesthetic.

## Shapes

The design system uses **Rounded (Scale 2)** geometry to maintain a friendly yet professional appearance.

- **Bento Cards:** Use `rounded-xl` (1.5rem / 24px) to create the iconic "app container" look.
- **Buttons & Inputs:** Use `rounded-lg` (1rem / 16px).
- **Icons:** Should be encased in "Squircle" (continuous curve) backgrounds for a native macOS feel.
- **Interactive States:** Hovering over a card should trigger a scale increase of 1.02x to emphasize the "floating" nature of the glass panels.

## Components

### Buttons & Chips
- **Primary:** Solid Accent color with white text. Magnetic hover effect.
- **Secondary:** Glass background with 1px border.
- **Chips (Tech Stack):** Small, capsule-shaped glass containers with `code-label` typography.

### Bento Cards
The core unit of the design system. Every card must have a padding of `24px`. Headlines within cards are consistently placed in the top-left or bottom-left.

### Language Switcher
A segmented control (pill shape) located in the top-right navigation or floating dock. Transition between EN and RU should be a horizontal slide animation.

### Navigation (The Dock)
A floating, centered navigation bar at the bottom of the viewport. Use high-intensity background blur and individual icons that scale up on hover (Magnification effect).

### Input Fields
Minimalist lines or glass containers. Focus state is indicated by a 2px outer glow in the primary accent color.