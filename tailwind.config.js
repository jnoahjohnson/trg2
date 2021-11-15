module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        112: "28rem",
      },
      colors: {
        darkbg: {
          DEFAULT: "hsl(0, 0%, 15%)",
          dark: "hsl(219, 10%, 7%)",
        },
        sushi: "hsl(84, 46%, 44%)",
      },
    },
  },
};
