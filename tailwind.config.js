/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beat: {
          '0%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.2)' },
        },
        appear:{
          '0%': { transform: 'scale(0)'},
          '70%': { transform: 'scale(1)'}
        },
      },
      animation:{
        beat:'beat 1s',
        appear:'appear 1s'
      }
    },
  },
  plugins: [],
}