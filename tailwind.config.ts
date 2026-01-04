import type { Config } from "tailwindcss";

/**
 * Shade Website Tailwind Configuration
 * 
 * Design tokens matched to Shade desktop app (src/renderer/styles/tokens.css)
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background & Surfaces (from Shade app)
        shade: {
          bg: '#0c0e12',
          panel: '#13151c',
          'panel-strong': '#181b24',
          'panel-muted': '#0f1117',
        },
        // Accent Colors (monochromatic warm gray)
        accent: {
          DEFAULT: '#b6b3b4',
          strong: '#d7d4d5',
          muted: 'rgba(182, 179, 180, 0.14)',
        },
        // Text
        text: {
          primary: '#f4f6fb',
          secondary: '#b7bdcb',
          tertiary: '#7b8191',
        },
        // Borders
        border: {
          DEFAULT: '#1f2430',
          strong: '#2a2f3d',
        },
        // Semantic Colors
        success: '#5dd39e',
        warning: '#f7c266',
        danger: '#ff6b6b',
        info: '#b6b3b4',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.8125rem', { lineHeight: '1.25rem' }],
        'base': ['0.875rem', { lineHeight: '1.5rem' }],
        'md': ['0.9375rem', { lineHeight: '1.5rem' }],
        'lg': ['1rem', { lineHeight: '1.75rem' }],
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'xl': '24px',
        'pill': '999px',
      },
      boxShadow: {
        'elev-1': '0 2px 8px rgba(0, 0, 0, 0.25)',
        'elev-2': '0 6px 18px rgba(0, 0, 0, 0.35)',
        'elev-3': '0 12px 32px rgba(0, 0, 0, 0.45)',
        'overlay': '0 20px 60px rgba(0, 0, 0, 0.6)',
        'glow': '0 10px 30px rgba(182, 179, 180, 0.14)',
        'focus': '0 0 0 2px rgba(182, 179, 180, 0.32)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
      },
      transitionDuration: {
        'instant': '80ms',
        'quick': '120ms',
        'normal': '180ms',
        'slow': '250ms',
        'slower': '350ms',
      },
      transitionTimingFunction: {
        'shade': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};

export default config;
