import React, { useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import cardReducer from 'reducer';


export const CardContext = React.createContext({
  samples: [
    {
      id: 1, name: 'Spell Card', description: 'Sample spell information. Once spell is cast, click to toggle "used" state.', used: false,
    },
    {
      id: 2, name: 'Monster Card', description: 'Sample monster information. Used can be toggled to indicate battle or track defeated foes.', used: false,
    },
  ],
});


const CardContextProvider = ({ children }) => {
  const initialCards = useContext(CardContext);
  const [cardsState, dispatch] = useReducer(cardReducer, initialCards, () => {
    const localCards = sessionStorage.getItem('cardsState');
    return localCards ? JSON.parse(localCards) : initialCards;
  });

  useEffect(() => {
    sessionStorage.setItem('cardsState', JSON.stringify(cardsState));
  }, [cardsState]);

  return (
    <CardContext.Provider value={{ cardsState, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

CardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContextProvider;
