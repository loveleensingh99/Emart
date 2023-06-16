/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0282fd",
          green: "#34c398",
        },
      },
    },
  },
  plugins: [],
};
