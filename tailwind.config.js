/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light1: "rgb(240, 240, 240)",
      light2: "#f7fafc",
      light3: "#e9ecef",
      light4: "#ced4da",
      darkbg: "#474747",
      navcolor: "#2e2e2e",
      aboutme: "#616161",
      contact: "#000",
      bgcontact: "#333333",
    },

    extend: {
      fontFamily: {
        arvo: "'Arvo', serif",
        rokkitt: "'Rokkitt', serif",
        dosis: "'Dosis', sans-serif",
      },
    },
  },
  plugins: [],
};
