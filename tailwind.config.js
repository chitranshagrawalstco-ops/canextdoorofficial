/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fbf4dc',
          card: '#ffffff',
          cardBorder: '#e2e8f0',
          primary: '#6366f1',
          electric: '#0ea5e9',
          navy: '#f1f5f9',
          accent: '#ec4899'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

