import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PrivateRoute from 'ui-routes/PrivateRoute';
import history from 'utils/history';
import CardsPage from 'containers/CardsPage';
import UserContextProvider from 'context/UserContext';
import CardContextProvider from 'context/CardContext';

import SignUp from 'containers/SignUp';
import Login from 'containers/Login';

// Todo: extract and expand routing
const App = () => (
  <Router history={history}>
    <Switch>
      <UserContextProvider>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <PrivateRoute path="/cards">
          <CardContextProvider>
            <CardsPage />
          </CardContextProvider>
        </PrivateRoute>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </UserContextProvider>
    </Switch>
  </Router>
);

export default App;
