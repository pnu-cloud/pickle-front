// /** @type {import('tailwindcss').Config} */
import { PICKLE_COLOR, PICKLE_WIDTH, PICKLE_HEIGHT } from './src/constants/pickleTheme';

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mainWhite: PICKLE_COLOR.mainWhite,
        middleBlack: PICKLE_COLOR.middleBlack,
        subBlack: PICKLE_COLOR.subBlack,
        lightGray: '#F0F0F0',
        middleGray: '#BFBFBF',
        darkGray: '#858585',
        pointOrange: PICKLE_COLOR.pointOrange,
        subOrange: PICKLE_COLOR.subOrange,
      },
      fontFamily: {
        base: 'Poppins',
      },
      fontSize: {
        h1: '28px',
        h3: '22px',
        middle: '18px',
        small: '15px',
      },
      spacing: {
        header: PICKLE_HEIGHT.header.sm,
        sidebar: PICKLE_WIDTH.sidebar,
      },
      maxWidth: {
        container: PICKLE_WIDTH.container,
      },
      minWidth: {
        sidebar: PICKLE_WIDTH.sidebar,
      },
    },
  },
  plugins: [],
};
