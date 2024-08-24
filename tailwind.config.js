/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#17181D",
        "bg-color1": "#292C35",
        "bg-color2": "#1E1E1E",
        "bg-div": "#E09145",
        "txt-color": "#E09145",
      },
    },
    fontFamily: {
      Roboto_Slab: ["Roboto Slab", "serif"],
      Mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
};
