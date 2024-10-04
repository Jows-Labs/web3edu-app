import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cyellow: "#F6D87E",

      dyellow: "#F0BB20",

      ccblue: "#F5F7FD",

      cblue: "#41648D",

      blue: "#1A4476",

      dblue: "#123053",

      ddblue: "#102948",

      cgreen: "#7EC8A0",

      green: "#7EC8A0",

      dgreen: "#21A16B",

      ddgreen: "#17714B",

      dddgreen: "146241",

      neutralbg: "#FFFFFF",

      neutral: "#000000",

      gray: "#9A9A9A",

      dgray: "#374151",

      cgray: "#F8F6F6",

      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "selector",
  themes: {
    "web3edu-dark": {
      primary: "#21a16b",

      "primary-content": "#000904",

      secondary: "#1a4476",

      "secondary-content": "#ced7e3",

      accent: "#f0bb20",

      "accent-content": "#140d00",

      neutral: "#1a4476",

      "neutral-content": "#ced7e3",

      "base-100": "#000000",

      "base-200": "#282424",

      "base-300": "#282424",

      "base-content": "#bebebe",

      info: "#1a4476",

      "info-content": "#ced7e3",

      success: "#21a16b",

      "success-content": "#000904",

      warning: "#f0bb20",

      "warning-content": "#140d00",

      error: "#ff0000",

      "error-content": "#160000",
    },
  },
};
export default config;
