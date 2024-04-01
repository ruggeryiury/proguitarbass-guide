const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '0px',
      'mobile-md': '320px',
      'mobile-lg': '375px',
      tablet: '425px',
      'tablet-md': '600px',
      'tablet-lg': '768px',
      laptop: '1024px',
      'laptop-lg': '1366px',
      desktop: '1440px',
      hd: '1290px',
    },
    extend: {
      fontFamily: {
        pentatonic: ['Pentatonic', 'sans-serif'],
        aeroport: ['Aeroport', 'sans-serif'],
      },
      colors: {
        'main-white': '#EEE',
        'main-black': '#0A0A0A',
      },
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-condensed': {
          'font-stretch': 'condensed',
        },
        '.font-unstretched': {
          'font-stretch': 'normal'
        }
      })
    }),
  ],
}