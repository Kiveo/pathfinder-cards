import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';

import Theme from 'themes/Theme';
// todo: setup router
// import App from './App';
// import App from './Login';
import App from './SignUp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={Theme}><App /></ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
