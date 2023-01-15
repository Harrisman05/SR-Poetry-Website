/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'esteban': ['Esteban'],
        'handlee': ['Handlee'],
        'tangerine': ['Tangerine'],
      },
      colors: {
        'youtube-red': '#ff0000',
      },
    },
  },
  plugins: [],
}