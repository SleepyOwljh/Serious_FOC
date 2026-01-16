/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f3ff',
        neonPink: '#ff00ff',
        neonPurple: '#bc13fe',
        vintagePurple: '#7D5BA6',
        deepVintage: '#2E1A36',
        fogPurple: '#4A3052',
        darkBg: '#0a0a0a',
        cardBg: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
