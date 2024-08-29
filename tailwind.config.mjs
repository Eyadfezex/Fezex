/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridRow: {
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
        "span-13": "span 13 / span 13",
        "span-17": "span 17 / span 17",
        "span-29": "span 29 / span 29",
      },
      gridTemplateRows: {
        18: "repeat(18,minmax(0,1fr))",
        14: "repeat(14,minmax(0,1fr))",
        20: "repeat(20,minmax(0,1fr))",
      },
      gridTemplateColumns: {
        30: "repeat(30,minmax(0,1fr))",
        14: "repeat(14,minmax(0,1fr))",
      },
      colors: {
        background: "#011627",
        Code: "#607B96",
        var: "#C98BDF",
        btn: "#FEA55F",
        Cbg: "#011321",
        at: "#4D5BCE",
      },
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
