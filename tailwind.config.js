/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0040e0',
          container: '#2e5bff',
        },
        secondary: {
          DEFAULT: '#b90040',
          container: '#e31754',
        },
        tertiary: {
          DEFAULT: '#824500',
          container: '#a65900',
        },
        surface: 'rgb(var(--surface))',
        'surface-dim': 'rgb(var(--surface-dim))',
        'surface-container': 'rgb(var(--surface-container))',
        'surface-container-lowest': 'rgb(var(--surface-container-lowest))',
        'surface-container-low': 'rgb(var(--surface-container-low))',
        'surface-container-high': 'rgb(var(--surface-container-high))',
        'surface-container-highest': 'rgb(var(--surface-container-highest))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'clay': '1.5rem',
      },
      boxShadow: {
        'clay-light': '20px 20px 60px #d9d9e6, -20px -20px 60px #ffffff',
        'clay-dark': '20px 20px 60px #0a0b10, -20px -20px 60px #2e303a',
      }
    },
  },
  plugins: [],
}

