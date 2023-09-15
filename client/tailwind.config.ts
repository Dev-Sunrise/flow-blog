import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#58BCB3",
        grayDarkColor: "#606060",
        blueColor: "#4D2DB7",
        yellowColor: "#F0B86E",
        redColor: "#F6635C",
      },
      boxShadow: {
        primaryShadow: "1px 2px 3px 0 rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};
export default config;
