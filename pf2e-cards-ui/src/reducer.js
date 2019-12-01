const cardReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_USED': {
      // creating a NEW collection, with payload's attribute toggled
      const newCards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return { ...action.payload, used: !action.payload.used };
        }
        return card;
      });
      // 'Reducing' 1. old state and 2. new portion into a single NEW state.
      return { ...state, cards: newCards };
    }

    default:
      return state;
  }
};

export default cardReducer;
