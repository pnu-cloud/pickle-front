import { createTheme } from '@mui/material/styles';
import { PICKLE_COLOR } from './pickleTheme';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PICKLE_COLOR.pointOrange,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '28px',
    },
    h3: {
      fontSize: '22px',
    },
    middle: {
      fontSize: '18px',
    },
    small: {
      fontSize: '15px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontFamily: 'Poppins',
          textTransform: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
    MuiTextarea: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
  },
});

export default muiTheme;
