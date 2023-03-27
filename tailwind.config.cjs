/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#424642",
        // secondary: "#A27B5C",

        primary: "#171010",
        secondary: "#a27b5c",
        tertiary: "#362222",

        "black-100": "#2B2B2B",
        "black-200": "#423F3E",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};