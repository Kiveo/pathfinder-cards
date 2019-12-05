import React, { useContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CardContext from 'context/CardContext';
import CardsPage from 'containers/CardsPage';
import SignUp from 'SignUp';
import Login from 'Login';
import UserContext from 'context/UserContext';
import cardReducer from './reducer';

const App = () => {
  const initialState = useContext(CardContext);
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value="User Sample">
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cards">
            <CardContext.Provider value={{ state, dispatch }}>
              <CardsPage />
            </CardContext.Provider>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
