import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Theme from 'themes/Theme';
import UserContext from 'UserContext';

// todo: setup router
import App from './App';
// import App from 'containers/CardsPage';
// import App from './Login';
// import App from './SignUp';
import * as serviceWorker from './serviceWorker';

const username = 'Hero';

ReactDOM.render(
  <UserContext.Provider value={username}>
    <ThemeProvider theme={Theme}><App /></ThemeProvider>
  </UserContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
