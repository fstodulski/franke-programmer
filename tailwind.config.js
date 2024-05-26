import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts,astro}'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        default: '#94A3B8',
        'base-black': '#000000',
        'base-white': '#ffffff',
        'slate-(lighten)-slate-100': '#f6fafefa',
        'slate-(lighten)-slate-200': '#f1f6fef0',
        'slate-(lighten)-slate-300': '#e7f2fde0',
        'slate-(lighten)-slate-400': '#d3e6fdb2',
        'slate-(lighten)-slate-50': '#fbfcfefc',
        'slate-(lighten)-slate-500': '#c7e2ff80',
        'slate-(lighten)-slate-600': '#c1e1fb5c',
        'slate-(lighten)-slate-700': '#b9e2fd45',
        'slate-(lighten)-slate-800': '#afe1f829',
        'slate-(lighten)-slate-900': '#94c4eb17',
        'slate-(lighten)-slate-950': '#020617',
        'slate-slate-100': '#f1f5f9',
        'slate-slate-200': '#e2e8f0',
        'slate-slate-300': '#cbd5e1',
        'slate-slate-400': '#94a3b8',
        'slate-slate-50': '#f8fafc',
        'slate-slate-500': '#64748b',
        'slate-slate-600': '#475569',
        'slate-slate-700': '#334155',
        'slate-slate-800': '#1e293b',
        'slate-slate-900': '#0f172a',
        'slate-slate-950': '#020617',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: [...fontFamily.sans]
      }
    }
  }
};

export default config;
