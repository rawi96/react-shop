module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '1/3': '25%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
