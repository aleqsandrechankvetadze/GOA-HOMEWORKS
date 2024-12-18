/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container:{
      center:true,
      screens:{
        "screen" : "screen"
      }
    },
    extend: {},
  },
  plugins: [],
}