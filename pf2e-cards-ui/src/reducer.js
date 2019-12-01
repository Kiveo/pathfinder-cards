import uuidv4 from 'uuidv4';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_USED': {
      // create new collection, with payload's attribute toggled
      const newCards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return { ...action.payload, used: !action.payload.used };
        }
        return card;
      });
      // 'Reducing' 1. old state and 2. new portion into a single NEW state.
      return { ...state, cards: newCards };
    }

    // TODO implement and handle api based deletes
    case 'DELETE_CARD': {
      // create new collection, with payload's card removed
      const newCards = state.cards.filter((card) => card.id !== action.payload.id);
      // 'Reducing'
      return { ...state, cards: newCards };
    }

    // TODO implement and handle api based creation
    case 'CREATE_CARD': {
      // for non-api/db based creation, we need a new unique id
      const newCard = { id: uuidv4(), ...action.payload };
      // create new collection, with payload's card added
      const newCards = state.cards.concat(newCard);
      // 'Reducing'
      return { ...state, cards: newCards };
    }

    default:
      return state;
  }
};

export default cardReducer;
