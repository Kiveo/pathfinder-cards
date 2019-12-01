import React from 'react';

const CardContext = React.createContext({
  cards: [
    {
      id: 1, name: 'Pathfinder Card 1', description: 'Prototype 1', used: false,
    },
    {
      id: 2, name: 'Pathfinder Card 2', description: 'Prototype 2', used: false,
    },
    {
      id: 3, name: 'Pathfinder Card 3', description: 'Prototype 3', used: false,
    },
  ],
});


export default CardContext;
