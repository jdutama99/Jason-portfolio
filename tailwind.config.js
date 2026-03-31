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
        primary: '#0A0A0A',
        secondary: '#F5F5F5',
        purple: '#A77FFB',
        darkBlue: '#041755',
        muted: '#A0A0A0',
        accent: '#FFFFFF',
        card: '#1A1A1A',
        dim: '#666666',
        deep: '#D4D4D4',
      },
    },
  },
  plugins: [],
};
