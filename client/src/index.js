import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.css';
import theme from './themes';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


