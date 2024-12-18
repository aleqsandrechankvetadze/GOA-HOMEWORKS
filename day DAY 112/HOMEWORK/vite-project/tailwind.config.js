/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: "1rem",
      center: true,
      screens: {
        "2xl":"1400px"
      }
    },
    extend: {},
  },
  plugins: [],
}