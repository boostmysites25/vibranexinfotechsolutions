/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // New color palette for premium AI & Future-Tech company
        primary: "#0a192f", // Deep Tech Blue
        secondary: "#00B9C6", // Bright Aqua
        secondaryLight:"#00C8D4", // Light Aqua
        // secondary: "#00ffff", // Vibrant Cyan
        textWhite: "#ffffff", // Crisp White
        bgGrey: "#111111", // Deep Space Grey
        // bgGrey: "#1c1e21", // Deep Space Grey
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
