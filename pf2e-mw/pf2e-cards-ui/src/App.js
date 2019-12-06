import React, { useContext, useReducer, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CardContext from 'context/CardContext';
import CardsPage from 'containers/CardsPage';
import SignUp from 'SignUp';
import Login from 'Login';
import UserContext from 'context/UserContext';
import cardReducer from './reducer';

const App = () => {
  const initialCards = useContext(CardContext);
  const [cardsState, dispatch] = useReducer(cardReducer, initialCards);
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
            <CardContext.Provider value={{ cardsState, dispatch }}>
              <CardsPage />
            </CardContext.Provider>
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
