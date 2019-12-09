import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CardsPage from 'containers/CardsPage';
import SignUp from 'containers/SignUp';
import Login from 'containers/Login';
import UserContextProvider from 'context/UserContext';
import CardContextProvider from 'context/CardContext';

const App = () => (
  <Router>
    <Switch>
      <UserContextProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/cards">
          <CardContextProvider>
            <CardsPage />
          </CardContextProvider>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </UserContextProvider>
    </Switch>
  </Router>
);

export default App;
