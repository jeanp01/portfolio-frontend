/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "light1": "rgb(240, 240, 240)",
      "light2":"#f7fafc",
      "light3":"#e9ecef",
      "light4":"#ced4da",
      "darkbg":"#000",
      "navcolor":"#141414"
    },

    extend: {
      fontFamily:{
        "arvo": "'Arvo', serif",
        "rokkitt":"'Rokkitt', serif",
        "dosis": "'Dosis', sans-serif",

      }
    },
  },
  plugins: [],
}

