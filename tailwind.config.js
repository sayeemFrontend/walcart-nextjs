const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "5rem",
      },
    },
    extend: {
      backgroundColor: {
        inherit: "inherit",
      },
      screens: {
        xs: "460px",
      },
    },
    colors: {
      primary: colors.neutral,
      secondary: colors.amber,
    },
  },
  plugins: [],
};
