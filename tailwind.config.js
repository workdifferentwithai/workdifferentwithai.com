/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-oswald)", ...defaultTheme.fontFamily.serif],
        display: ["var(--font-oswald)", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      inset: {
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
        },
        azure_radiance: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          500: "#1eadff",
          600: "#068fff",
          700: "#007bff",
          800: "#085ec5",
          900: "#0d519b",
          950: "#0e315d",
        },
        apple: {
          50: "#f1fcf2",
          100: "#dff9e4",
          200: "#c1f1cb",
          300: "#90e5a3",
          400: "#58d073",
          500: "#32b550",
          600: "#28a745",
          700: "#1f7634",
          800: "#1e5d2d",
          900: "#1a4d27",
          950: "#092a12",
        },
        outer_space: {
          50: "#f4f6f7",
          100: "#e3e8ea",
          200: "#c9d3d8",
          300: "#a4b4bc",
          400: "#778c99",
          500: "#5c717e",
          600: "#4f5f6b",
          700: "#44505a",
          800: "#3d454d",
          900: "#343a40",
          950: "#21262b",
        },
        gold: {
          50: "#ffffe7",
          100: "#feffc1",
          200: "#fffd86",
          300: "#fff441",
          400: "#ffe60d",
          500: "#ffd700",
          600: "#d19e00",
          700: "#a67102",
          800: "#89580a",
          900: "#74480f",
          950: "#442604",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
