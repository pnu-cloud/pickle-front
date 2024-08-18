// /** @type {import('tailwindcss').Config} */
import { PICKLE_COLOR, PICKLE_WIDTH, PICKLE_HEIGHT } from './src/constants/pickleTheme';

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mainWhite: PICKLE_COLOR.mainWhite,
        middleBlack: PICKLE_COLOR.middleBlack,
        lightGray: PICKLE_COLOR.lightGray,
        middleGray: PICKLE_COLOR.middleGray,
        darkGray: PICKLE_COLOR.darkGray,
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
