import React, { useContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CardContext from 'context';
import CardsPage from 'containers/CardsPage';
import SignUp from 'SignUp';
import Login from 'Login';
import cardReducer from './reducer';

const App = () => {
  const initialState = useContext(CardContext);
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
};

export default App;
