/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/images/hero-bg-2.png')",
        "hero-tablet": "url('/assets/images/hero-bg-tablet.png')",
        "hero-dekstop": "url('/assets/images/hero-bg-dekstop.png')",
        "checkbox-checked": "url('/assets/icons/checkbox-checked.svg')",
      },
    },

    colors: {
      // Primary Colors
      "dark-green-01": "#1e4c2f",
      "dark-green-02": "#257e34",
      "dark-green-03": "#1d9e34",

      "black-01": "#0b0f0e",
      "black-02": "#1d2322",
      "black-03": "#313736",

      // Secondary Colors
      "grey-01": "#818b9c",
      "grey-02": "#9ba6b9",
      "grey-03": "#bcc5d4",

      "l-grey-01": "#f1f1f1",
      "l-grey-02": "#f6f6f6",
      "l-grey-03": "#f9f9f9",

      "d-grey-01": "#e4e9ee",
      "d-grey-02": "#f0f3f6",
      "d-grey-03": "#f8f9fc",

      "orange-01": "#FFA439",
      "orange-02": "#FFD5B8",
      "orange-03": "#FCECE1",

      "red-01": "#e04124",
      "red-02": "#ef907f",
      "red-03": "#f9bcb1",

      white: "#ffffff",
      transparent: "transparent",
    },

    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".eh": {
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".eh-1": {
          fontSize: "58px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "120%",
          letterSpacing: "-0.2px",
        },
        ".eh-2": {
          fontSize: "38px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".eh-3": {
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".eh-4": {
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".eh-5": {
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".eh-6": {
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".h1": {
          fontSize: "34px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "120%",
          letterSpacing: "-0.2px",
        },
        ".h2": {
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".h3": {
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".h4": {
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".h4-fw-500": {
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".h5": {
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        },
        ".par-1-18": {
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".par-1-16": {
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".par-2": {
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".par-3": {
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".par-4": {
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        },
      });
    }),
  ],
};
