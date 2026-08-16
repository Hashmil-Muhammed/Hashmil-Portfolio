/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Light mode palette
        bg: '#FFFFFF',
        surface: '#F4F4F6',
        surfaceHover: '#EBEBED',
        primary: '#111115',
        secondary: '#71717A',
        border: '#E4E4E7',
        accent: '#000000',
        red: '#E63946',
        // Dark mode
        'dark-bg': '#0A0A0D',
        'dark-surface': '#111115',
        'dark-border': '#1E1E24',
        'dark-primary': '#F4F4F6',
        'dark-secondary': '#71717A',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.03)',
        'card': '0 2px 16px rgba(0,0,0,0.04)',
        'hover': '0 8px 32px rgba(0,0,0,0.08)',
        'dark-soft': '0 4px 20px rgba(0,0,0,0.4)',
        'dark-card': '0 2px 16px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        'card': '12px',
        'pill': '100px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'spin-slow': 'spin 30s linear infinite',
        'spin-y': 'spinY 20s linear infinite',
        'blink-hard': 'blinkHard 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        spinY: {
          '0%, 100%': { transform: 'rotateY(-25deg)' },
          '50%': { transform: 'rotateY(25deg)' },
        },
        blinkHard: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
