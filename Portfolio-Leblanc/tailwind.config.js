/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sugii-blue': '#081b29'
      },
      boxShadow: {
        'sugii': '0_0_2px_#fff inset_0_0_2px_#fff 0_0_5px_#08f 0_0_15px_#08f 0_0_30px_#08f',
      }
    },
  },
  plugins: [],
}