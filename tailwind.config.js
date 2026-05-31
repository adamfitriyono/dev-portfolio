/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './public/index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5FFF',
          hover: '#2450E6',
          light: '#EBF0FF',
        },
        surface: {
          dark: '#161616',
          'dark-elevated': '#1F1F1F',
          light: '#FFFFFF',
          muted: '#F8F9FA',
          alt: '#E8EBF0',
        },
        text: {
          dark: '#161616',
          light: '#F5F5F5',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        primary: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 4px 24px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        iconSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.15)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        cursorBlink: {
          '0%, 45%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(7px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'icon-spin': 'iconSpin 0.45s ease-in-out',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'scroll-bounce': 'scrollBounce 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
