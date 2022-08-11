/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLens: '#abfe2c',
        greenLens2: '#96E024',
        darkGreenLens: '#00501e',
        darkGrey: "#131313",
        lightGrey: "#272727",
        blueRainbow: "#2437E0"
      }
    },
  },
  plugins: [],
}
