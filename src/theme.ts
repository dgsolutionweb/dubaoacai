import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082',
      light: '#9370DB',
      dark: '#2E0051',
    },
    secondary: {
      main: '#FF1493',
      light: '#FF69B4',
      dark: '#C71585',
    },
    background: {
      default: '#1a0029',
      paper: '#2c0045',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #FF1493, #FFD700)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    body1: {
      fontSize: '1.1rem',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '0.95rem',
      letterSpacing: '0.25px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          background: 'linear-gradient(145deg, rgba(75, 0, 130, 0.95), rgba(46, 0, 81, 0.98))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 20, 147, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'rgba(255, 20, 147, 0.2)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
  },
}); 