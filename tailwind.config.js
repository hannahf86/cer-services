/** @type {import('tailwindcss').Config} */

// const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headers: "Kallisto",
        body: ["Maven Pro", "sans-serif"],
      },
      colors: {
        black: "#141414",
        accent: "#F67A3B",
        white: "#F9F9F9",
        attention: "#A14DB9",
        star: "#F6CA3B",
        red: "#FB4444",
        green: "#65CF69",
      },
      screens: {
        xs: "425px",
        xsSm: "500px",
        sm: "640px",
        md: "768px",
        mdMid: "880px",
      },
      fontSize: {
        xs: ["clamp(0.90rem, calc(0.82rem + 0.29vw), 0.8rem)", "1.4"],
        sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.0rem)", "1.4"],
        md: ["clamp(1.1rem, calc(0.94rem + 0.6vw), 1.30rem)", "1.5"],
        base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
      },
    },
  },
  plugins: [],
};
