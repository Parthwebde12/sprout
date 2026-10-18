/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7EF",
        paper: "#FFFFFF",
        forest: "#1F4D3A",
        leaf: "#5E9E54",
        gold: "#F2B134",
        ink: "#1D2420",
        mute: "#55605A",
        line: "#E4DCCB",
        danger: "#9B2C2C",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', "Georgia", "serif"],
        body: ["system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      boxShadow: {
        hard: "3px 3px 0 #1D2420",
        soft: "5px 5px 0 #E4DCCB",
      },
    },
  },
  plugins: [],
};