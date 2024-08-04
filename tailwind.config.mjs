import { Code } from "astro:components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridRow: {
        "span-16": "span 16 / span 16",
      },
      gridTemplateRows: {
        18: "repeat(18,minmax(0,1fr))",
      },
      colors: {
        background: "#011627",
        Code: "#607B96",
        var: "#4D5BCE",
        btn: "#FEA55F",
      },
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
