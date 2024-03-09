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
        primary: '#171818',
        secondary: '#E8E8F7',
        purple: '#A77FFB',
        darkBlue: '#041755',
      },
    },
  },
  plugins: [],
};
