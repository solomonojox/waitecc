/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061980',
        hoverPrimary: '#2e2eb4',
        secondary: '#facc15',
        hoverSecondary: '#eab308',
        tertiary: '#156fb0',
        green1: '#60aa45',
        green2: '#64b248',
      }
    },
  },
  plugins: [],
}