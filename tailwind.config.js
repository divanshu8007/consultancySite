/** @type {import('tailwindcss').Config} */

const minWidth = '';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'min': minWidth + "px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontSize: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'base': '1rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '4.5rem',
      },
      fontWeight: {
        'light': 300,
        'medium': 450,
        'semibold': 600,
        'extrabold': 800,
      },
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}