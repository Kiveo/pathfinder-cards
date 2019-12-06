import React from 'react';

const CardContext = React.createContext({
  samples: [
    {
      id: 1, name: 'Spell Card', description: 'Sample spell information. Once spell is cast, click to toggle "used" state.', used: false,
    },
    {
      id: 2, name: 'Monster Card', description: 'Sample monster information. Used can be toggled to indicate battle or track defeated foes.', used: false,
    },
  ],
});


export default CardContext;
