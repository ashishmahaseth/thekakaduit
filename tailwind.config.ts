import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kakadu: {
          50: '#e8f7f0',
          100: '#c5e9d4',
          200: '#9ed9b5',
          300: '#6ec493',
          400: '#42b074',
          500: '#1BAE70',
          600: '#169962',
          700: '#128554',
          800: '#0e6b42',
          900: '#0a5534',
          950: '#073d25',
        },
        brand: {
          navy: '#14261C',
          navyLight: '#1a3328',
          green: '#1BAE70',
          greenDark: '#169962',
          greenLight: '#e8f7f0',
          gold: '#f0b90b',
          slate: '#f4f6f9',
          dark: '#1a1f36',
          text: '#4A5449',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(27,174,112,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,174,112,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'helpdesk-pulse': 'helpdesk-pulse 2s ease-in-out infinite',
        'helpdesk-glow': 'helpdesk-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'helpdesk-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'helpdesk-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(27, 174, 112, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(27, 174, 112, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
