/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      colors: {
        primary: "#fea928",
        // primary: "#615EFC",
        secondary: "#ed8900",
        // secondary: "#615EFC",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
