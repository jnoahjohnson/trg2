module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "36rem",
        144: "42rem",
      },
      colors: {
        darkbg: {
          DEFAULT: "hsl(0, 0%, 15%)",
          dark: "hsl(219, 10%, 7%)",
        },
        sushi: "hsl(84, 46%, 44%)",
        rblue: {
          DEFAULT: "hsla(207, 88%, 37%, 1.00)",
          dark: "hsla(218, 57%, 23%, 1.00)",
        },
      },
    },
  },
};
