/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      colors:{
        'orange': '#FF884B',
        'pink': '#FF577F',
        'azra': '#47B5FF',
        'bright_yellow': '#F1D624',
        'blue1': '#6652E4',
        'gray': '#E4EDF3',
        'dark_blue': '#06283D'
      },

      fontFamily:{
        'oswald': `'Oswald', sans-serif`,
        'monoton': `'Monoton', cursive`
      },

      backgroundImage: {
        'about-pattern': "url('src/assets/TornadoBg.svg')",
        'hero-pattern': "url('src/assets/SquareBg.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
