/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#9cd3d8',
        solidBlue: '#0b698b',
        coolWhite: '#f2f2f2',
        mediumBlue: '#0396a6'
      },
      gridTemplateAreas: {
        'modal': [
          'header header',
          'textarea rightSide',
          'buttons rightSide',
        ],
      },
      fontFamily: {
        classic: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Apple Color Emoji",Helvetica,Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}