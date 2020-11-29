import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './app';
import 'normalize.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
