/**
 * Tailwind CSS v4 Configuration — "Ventura Mono"
 *
 * Generated from Google Stitch Design System: "Atomic macOS Developer Portfolio"
 * Project: projects/17570780041700440538
 *
 * === Design Tokens (Quarks) ===
 *
 * This file is the SINGLE SOURCE OF TRUTH for all design tokens consumed by
 * atoms, molecules, and organisms across the project. Every primitive value
 * is derived from the Stitch Material Design 3 named-color palette, the
 * custom macOS "Silicon Desktop" overrides, and the typography/spacing
 * scale exported from the design system.
 *
 * @see atomic-design-quarks skill — quarks are sub-atomic design tokens
 *      that atoms consume; no visual rendering, pure values.
 */

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    // ─── COLOR PALETTE (Material Design 3 + macOS Silicon Desktop) ───
    colors: {
      // ▸ Primary — #0a84ff (macOS Accent Blue)
      primary: {
        DEFAULT: '#aac7ff',          // on-dark primary
        container: '#3e90ff',        // primary-container
        fixed: '#d6e3ff',            // primary-fixed
        'fixed-dim': '#aac7ff',      // primary-fixed-dim
        on: '#003064',               // on-primary
        'on-container': '#002957',    // on-primary-container
        'on-fixed': '#001b3e',       // on-primary-fixed
        'on-fixed-variant': '#00468d',// on-primary-fixed-variant
        inverse: '#005db8',          // inverse-primary
        accent: '#0a84ff',           // override-primary (macOS accent)
      },

      // ▸ Secondary — #5e5ce6 (override-secondary)
      secondary: {
        DEFAULT: '#c2c1ff',
        container: '#3630bf',
        fixed: '#e2dfff',
        'fixed-dim': '#c2c1ff',
        on: '#1800a7',
        'on-container': '#b1b1ff',
        'on-fixed': '#0c006b',
        'on-fixed-variant': '#332dbc',
      },

      // ▸ Tertiary — #ffb691 (warm accent)
      tertiary: {
        DEFAULT: '#ffb691',
        container: '#eb6a12',
        fixed: '#ffdbcb',
        'fixed-dim': '#ffb691',
        on: '#552000',
        'on-container': '#4a1b00',
        'on-fixed': '#341100',
        'on-fixed-variant': '#793100',
      },

      // ▸ Error
      error: {
        DEFAULT: '#ffb4ab',
        container: '#93000a',
        on: '#690005',
        'on-container': '#ffdad6',
      },

      // ▸ Surface hierarchy (Dark Mode — 8-step elevation ramp)
      surface: {
        DEFAULT: '#131313',                 // surface (also root background)
        dim: '#131313',                     // surface-dim
        bright: '#393939',                  // surface-bright
        'container-lowest': '#0e0e0e',       // surface-container-lowest
        'container-low': '#1b1b1c',          // surface-container-low
        'container': '#202020',              // surface-container
        'container-high': '#2a2a2a',         // surface-container-high
        'container-highest': '#353535',      // surface-container-highest
        variant: '#353535',                  // surface-variant
        tint: '#aac7ff',                     // surface-tint
        on: '#e5e2e1',                       // on-surface / on-background
        'on-variant': '#c0c6d6',             // on-surface-variant
        inverse: '#e5e2e1',                  // inverse-surface
        'inverse-on': '#303030',             // inverse-on-surface
      },

      // ▸ Outline (MD3 — inherently flat, 2 values)
      outline: '#8b91a0',
      'outline-variant': '#414754',

      // ▸ Neutral (override-neutral #1e1e1e)
      neutral: {
        DEFAULT: '#1e1e1e',
        50: '#f5f5f7',
        100: '#e8e8ed',
        200: '#d1d1d6',
        300: '#aeaeb2',
        400: '#8e8e93',
        500: '#636366',
        600: '#48484a',
        700: '#363639',
        800: '#2c2c2e',
        900: '#1e1e1e',
      },

      // ▸ Semantic aliases — canonical quarks used by atoms
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',

      // ▸ Glassmorphism overlays
      glass: {
        white: 'rgba(255, 255, 255, 0.10)',
        black: 'rgba(0, 0, 0, 0.05)',
        accent: 'rgba(10, 132, 255, 0.15)',
      },
    },

    // ─── FONT FAMILIES ───
    fontFamily: {
      // Headlines: Hanken Grotesk (geometric, "San Francisco" feel)
      sans: [
        'Hanken Grotesk',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'sans-serif',
      ],
      // Body: Inter (exceptional legibility, systematic weights)
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'sans-serif',
      ],
      // Code/Labels: JetBrains Mono (developer-centric)
      mono: [
        'JetBrains Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'monospace',
      ],
    },

    // ─── FONT SIZES (Typography Scale from Stitch) ───
    fontSize: {
      // Display
      'display-lg': [
        '56px',
        { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
      ],
      'display-lg-mobile': [
        '36px',
        { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' },
      ],
      // Headline
      'headline-md': [
        '32px',
        { lineHeight: '1.3', fontWeight: '600' },
      ],
      // Body
      'body-lg': [
        '18px',
        { lineHeight: '1.6', fontWeight: '400' },
      ],
      'body-sm': [
        '14px',
        { lineHeight: '1.5', fontWeight: '400' },
      ],
      // Label / Mono
      'label-mono': [
        '12px',
        { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '500' },
      ],
      // Standard scale (8px base)
      xs: ['12px', { lineHeight: '1rem' }],
      sm: ['14px', { lineHeight: '1.25rem' }],
      base: ['16px', { lineHeight: '1.5rem' }],
      lg: ['18px', { lineHeight: '1.75rem' }],
      xl: ['20px', { lineHeight: '1.75rem' }],
      '2xl': ['24px', { lineHeight: '2rem' }],
      '3xl': ['30px', { lineHeight: '2.25rem' }],
      '4xl': ['36px', { lineHeight: '2.5rem' }],
      '5xl': ['48px', { lineHeight: '1.1' }],
      '6xl': ['60px', { lineHeight: '1.1' }],
    },

    // ─── FONT WEIGHTS ───
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    // ─── LINE HEIGHTS ───
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.6',
      loose: '2',
    },

    // ─── LETTER SPACING ───
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0em',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.2em',
    },

    // ─── BORDER RADIUS ("Soft-Tech" ROUND_EIGHT) ───
    borderRadius: {
      none: '0',
      sm: '0.25rem',      // 4px  — icons, small chips
      DEFAULT: '0.5rem',  // 8px  — ROUND_EIGHT: buttons, pills, inputs
      md: '0.75rem',      // 12px — medium cards
      lg: '1rem',         // 16px — buttons (rounded-lg as requested)
      xl: '1.5rem',       // 24px — Bento cards (rounded-xl as requested)
      '2xl': '2rem',      // 32px — modals
      full: '9999px',     // — pills, toggles
    },

    // ─── BORDER WIDTHS ───
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },

    // ─── SPACING (8px atomic base grid) ───
    spacing: {
      px: '1px',
      0: '0',
      xs: '4px',         // 0.5 × base
      sm: '12px',        // 1.5 × base
      base: '8px',       // 1 × base
      md: '24px',        // 3 × base
      lg: '48px',        // 6 × base
      xl: '80px',        // 10 × base
      gutter: '24px',
      margin: '32px',    // 4 × base
      'max-width': '1200px',

      // Numeric aliases for arbitrary values
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },

    // ─── SHADOWS (Light emission, not drop shadows) ───
    boxShadow: {
      none: 'none',
      // Glassmorphic glow
      'glow-primary': '0 0 40px 0 rgba(10, 132, 255, 0.15)',
      'glow-secondary': '0 0 40px 0 rgba(94, 92, 230, 0.15)',
      // Modal / Popover
      modal: '0 10px 30px rgba(0, 0, 0, 0.2)',
      // Magnetic lift
      magnetic: '0 8px 24px rgba(0, 0, 0, 0.3)',
      // Inner bevel (glassmorphic)
      'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
    },

    // ─── BACKDROP BLUR (Glassmorphism) ───
    backdropBlur: {
      none: '0',
      sm: '4px',
      DEFAULT: '20px',  // Bento cards
      lg: '40px',       // Modals
    },

    // ─── OPACITY ───
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.10',
      15: '0.15',
      20: '0.20',
      25: '0.25',
      30: '0.30',
      40: '0.40',
      50: '0.50',
      60: '0.60',
      70: '0.70',
      80: '0.80',       // Card glass opacity
      90: '0.90',
      100: '1',
    },

    // ─── MAX WIDTHS ───
    maxWidth: {
      none: 'none',
      container: '1200px',
      prose: '65ch',
    },

    // ─── SCREENS (Breakpoints) ───
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '4k': '2560px',
    },

    // ─── ANIMATION / TRANSITIONS ("Buttery" 400ms) ───
    transitionDuration: {
      DEFAULT: '400ms',
      fast: '200ms',
      normal: '400ms',
      slow: '600ms',
    },

    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    extend: {
      // ─── CUSTOM ANIMATIONS ───
      keyframes: {
        'magnetic-lift': {
          '0%': { transform: 'translateY(0)', boxShadow: '0 0 0 0 rgba(10, 132, 255, 0)' },
          '100%': { transform: 'translateY(-4px)', boxShadow: '0 0 40px 0 rgba(10, 132, 255, 0.15)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'magnetic-lift': 'magnetic-lift 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scan-line': 'scan-line 2s ease-in-out infinite',
        'fade-in': 'fade-in 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },

      // ─── Z-INDEX SCALE ───
      zIndex: {
        hide: '-1',
        base: '0',
        raised: '1',
        dropdown: '1000',
        sticky: '1100',
        fixed: '1200',
        overlay: '1300',
        modal: '1400',
        popover: '1500',
        tooltip: '1600',
      },
    },
  },

  // ─── PLUGINS ───
  plugins: [],
};

export default config;
