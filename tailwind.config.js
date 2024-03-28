/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Clash Display", "san serif"],
      secondary: ["Wix Madefor Text", "san serif"],
    },
    extend: {
      colors: {
        primary: "#6640FF",
        secondary: "#f3c56d",
        cblue: "#5730f6",
        highlight: "#FFF0D9",
      },
    },
  },
  plugins: [],
};
