/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#000000", // Example background color
        secondary: "#F8F8F8",
        red:"#FF3333",
         // Another example background color
      },
      textColor: {
        primary: "#000000", // Example text color
        secondary: "#F8F8F8",
        faint_text: "#636364",
        red:"#FF3333" // Another example text color
      },
    },
  },
  plugins: [],
};
