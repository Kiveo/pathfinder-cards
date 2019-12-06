import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CardsPage from 'containers/CardsPage';
import SignUp from 'SignUp';
import Login from 'Login';
import UserContext from 'context/UserContext';
import CardContextProvider from 'context/CardContext';

const App = () => {
  const [userState, setUserState] = useState({});

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ userState, setUserState }}>
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
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
