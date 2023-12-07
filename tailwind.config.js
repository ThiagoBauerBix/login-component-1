/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      colors: {
        black: {
          primary: "#15161A",
        },
        gray: {
          primary: "#31333B",
          secondary: "#2A2C33",
        },
        blue: {
          primary: "#2985D1",
        },
        yellow: {
          primary: "#E1C750",
          secondary: "#D48531",
        },
        green: {
          primary: "#61964F",
          secondary: "#397332",
        },
        red: {
          primary: "#BF3030",
          secondary: "#8F0E0E",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin", "tw-elements/dist/plugin.cjs")],
};
