/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-fade": "#e5f8f5",
        "white-light": "#e4f5f0",
        "green-dark": "#0e422c",
        "green-light": "#2c9a74",
        "green-fade": "#3b745e",
      },
    },
  },
  plugins: [],
};
