module.exports = {
  purge: {
    content:[
      './src/**/*.{html,ts}'
    ],
    option: {
      safelist:['bg-blue-400' , 'bg-green-400', 'bg-red-400']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity:['disabled'],
      backgroundColor:['disabled']
    },
  },
  plugins: [],
}
