import React, { useContext, useReducer } from 'react';
import CardContext from 'context';
import CardsPage from 'containers/CardsPage';
import cardReducer from './reducer';

const App = () => {
  const initialState = useContext(CardContext);
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      <CardsPage />
    </CardContext.Provider>
  );
};

export default App;
