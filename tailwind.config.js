module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Rubik", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary_orange: {
          0: "#FF7A19",
        },
      },
    },
  },
  plugins: [],
};
