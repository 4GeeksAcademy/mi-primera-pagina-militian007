/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'berkana-cyan': '#00B4D8',
        'berkana-dark': '#0077B6',
        'berkana-gold': '#FFB703',
      }
    },
  },
  plugins: [],
}
