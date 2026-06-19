import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {DEFAULT:"#1a5c38",dark:"#0f3d25",light:"#2a7a4e"},
        accent: {DEFAULT:"#c9922a",dark:"#a6751f",light:"#e0a840"},
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
