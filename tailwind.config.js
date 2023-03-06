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
      },
      screens: {
        's': {'max': '590px'},
        // => @media (max-width: 590px) { ... }
        'sm': {'min': '590px', 'max': '854px'},
        // => @media (min-width: 590px and max-width: 854px) { ... }
        'md': {'min': '855px', 'max': '1069px'},
        // => @media (min-width: 855px and max-width: 1069px) { ... }
        'lg': {'min': '1070px', 'max': '1329px'},
        // => @media (min-width: 1070px and max-width: 1329px) { ... }
        'xl': {'min': '1330px', 'max': '1535px'},
        // => @media (min-width: 1330px and max-width: 1535px) { ... }
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}