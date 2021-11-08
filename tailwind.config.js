module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkbg: {
          DEFAULT: 'hsl(0, 0%, 15%)',
          dark: 'hsl(0, 0%, 10%)',
        },
        sushi: 'hsl(84, 46%, 44%)',
      },
    },
  },
};
