/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        crimson: "#710117",
        crimson_lighter: "#c82848",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
