/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center:true,
      padding:'1rem',
      screens: {
        "2xl":"1400px"
      }
    },
    backgroundImage: {
      'custom-pattern': "url('C:\Users\chankve\Desktop\goa\GOA-HOMEWORKS\DAY 128\HOMEWORK\Shua Qalaqi\src\assets\download.jpeg')",
    },
    extend: {},
  },
  plugins: [],
}