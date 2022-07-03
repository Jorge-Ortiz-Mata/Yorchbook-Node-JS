/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  purge: [],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        }
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  variants: {},
  plugins: [],
}