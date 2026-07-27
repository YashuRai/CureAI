import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Brand Colors
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFE',
          200: '#C7E0FC',
          300: '#A4CAFE',
          400: '#7CB3FB',
          500: '#2563EB', // Primary Blue
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1F2937',
        },
        secondary: {
          50: '#F0F9FF',
          100: '#E0F7FF',
          200: '#B3F0FF',
          300: '#00D4FF', // Cyan
          400: '#00A8D8',
          500: '#0088B8',
          600: '#006899',
          700: '#004D7A',
          800: '#00365C',
          900: '#00213D',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // Success Green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#145231',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Warning Amber
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444', // Danger Red
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Premium Accents
        purple: {
          50: '#F5F3FF',
          400: '#A78BFA',
          500: '#8B5CF6', // Soft Purple
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
        },
        emerald: {
          50: '#F0FDF4',
          400: '#6EE7B7',
          500: '#10B981', // Premium Emerald
          600: '#059669',
          700: '#047857',
          800: '#065F46',
        },
        // Neutral
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundColor: {
        'premium-light': '#F8FAFC',
        'glass-white': 'rgba(255, 255, 255, 0.95)',
        'glass-dark': 'rgba(15, 23, 42, 0.95)',
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
        lg: '24px',
        xl: '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'glass-xl': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'count-up': 'count-up 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
