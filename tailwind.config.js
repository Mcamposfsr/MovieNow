/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        whiteGlass: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',

      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }

    },
  },
  plugins: [],
}