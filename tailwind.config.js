/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6552FF',
          light: '#8474FF',
          dark: '#5241CC',
        },
        success: {
          light: '#4ADE80',
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        warning: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#FCA5A5',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
      },
    },
  },
  plugins: [],
};