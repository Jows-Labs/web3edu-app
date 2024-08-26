import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
  daisyui: {
    themes: [
      {
        web3edu: {
          primary: "#21a16b",

          "primary-content": "#000904",

          secondary: "#1a4476",

          "secondary-content": "#ced7e3",

          accent: "#f0bb20",

          "accent-content": "#140d00",

          neutral: "#1a4476",

          "neutral-content": "#ced7e3",

          "base-100": "#ffffff",

          "base-200": "#f8f4f4",

          "base-300": "#dedede",

          "base-content": "#161616",

          info: "#1a4476",

          "info-content": "#ced7e3",

          success: "#21a16b",

          "success-content": "#000904",

          warning: "#f0bb20",

          "warning-content": "#140d00",

          error: "#ff0000",

          "error-content": "#160000",
        },
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
    ],
  },
};
export default config;
