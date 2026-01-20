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
        // New Vintage Brown Palette
        vintageBrown: '#2A1B15', // Deep coffee/leather brown
        deepBrown: '#1a100c',    // Darker shade for contrast
        textCream: '#E6DCC3',    // Warm pleasant text color for brown bg
        
        // Updated darkBg to match the new theme
        darkBg: '#2A1B15', 
        vintagePurple: '#4c1d95',
        deepVintage: '#1e1b4b',
        fogPurple: '#1e1b4b',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
