/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "36rem",
        144: "42rem",
      },
      colors: {
        darkbg: {
          DEFAULT: "hsl(0, 0%, 0%)",
          dark: "hsl(219, 10%, 7%)",
        },
        sushi: "hsl(10, 5%, 60%)", //"hsl(84, 46%, 44%)", -- bright green color
        rblue: {
          DEFAULT: "hsla(207, 88%, 37%, 1.00)",
          dark: "hsla(218, 57%, 23%, 1.00)",
        },
      },
    },
  },
  plugins: [],
};
