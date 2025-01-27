/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        equbGray: "#F5F7FA",
        black: "#000000",
        primary: "#4B9B41",
        secondary: "#273240",
        RegisteringBtn: "#E6F6AA",
        ActiveBtn: "#00B087",
        InActiveBtn: "#FFC5C5",
        btnColor: "#149D52",
        btnHover: "#159D50",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxHeight: {
        "vh-60": "calc(100vh - 80px)",
      },
      boxShadow: {
        bottom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Adjust blur and spread for desired shadow
      },
    },
  },
  plugins: [],
};
