import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark', // default background is dark
    primary: {
      main: '#3C0008',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#F4F4F4',
      secondary: '#B0B0B0',
    }
  },
  typography: {
    fontFamily: `'Philosopher', 'Times New Roman', serif`,
    allVariants: {
      fontWeight: 400,
    },
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.43,
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Arial, sans-serif',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: 'Arial, sans-serif',
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.35,
    },
    overline: {
      fontSize: '10px',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },
};