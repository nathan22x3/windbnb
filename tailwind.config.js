module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
    './src/App.jsx}',
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
      },
    },
  },
};
