/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    screens:{
      sm: '550px',
      md: '800px',
      lg: '976px',
      xl:'1440px'
    },
    extend: {


      colors: {
        bleu: 'hsla(206, 100%, 48%, 1)',
        unitedBlue: 'hsla(211, 66%, 58%, 1)',
        beaver: 'hsla(20, 21%, 54%, 1)',
        ghostWhite: 'hsla(222, 31%, 94%, 1)',
        licorice: 'hsla(352, 52%, 8%, 1)',
        coffee: 'hsla(22, 38%, 28%, 1)'
      
      },
    },

  },
  plugins: [],
}

