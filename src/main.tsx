import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans KR", sans-serif',
  },
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#34495e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.chinese': {
          fontFamily: '"Noto Serif SC", serif',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
); 