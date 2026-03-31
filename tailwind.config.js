/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('../public/assets/heroBg.png')",
        blueBg: "url('../public/assets/blueBg.png')",
        heroMobile: "url('../public/assets/heroMobile.png')",
        blueBgMobile: "url('../public/assets/blueBgMobile.png')",
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        purple: '#A77FFB',
        darkBlue: '#041755',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        dim: 'rgb(var(--color-dim) / <alpha-value>)',
        deep: 'rgb(var(--color-deep) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
