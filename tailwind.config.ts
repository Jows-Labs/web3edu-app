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

      ccgray: "#FFFAFA",

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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["light"],
  },
  darkMode: "selector",



  
};
export default config;
