/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontSize: {
      "2xs": ".6rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        fem: {
          100: "#24232C", //bg
          200: "#817D92", //title and STRENGTH
          300: "#E6E5EA", //normal text
          400: "#18171F", //STRENGTH bg
          500: "#A4FFAF", //accent and 4 bars
          600: "#F64A4A", //1 bar
          700: "#FB7C58", //2 bars
          800: "#F8CD65", //3 bars
          900: "",
        },
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        JetBrains: [
          "JetBrains",
          "JetBrainsItalic",
          "JetBrainsBold",
          "JetBrainsBoldItalic",
          "sans-serif",
        ],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
