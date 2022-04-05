module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06f",
        secondary: "#5462BC"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
