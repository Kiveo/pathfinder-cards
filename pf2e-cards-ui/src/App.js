import React, { useState, useEffect } from 'react';

const App = () => {
  // -- state --
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/cards')
      .then((response) => response.json())
      .then((formattedResponse) => setCards(formattedResponse));
  }, []);

  // -- RENDER --
  return (
    <div>
      <h1>Pathfinder Cards</h1>
      <h3>Card list</h3>
      {cards.map((card) => (
        <p>
          {card.name}
        </p>
      ))}
    </div>
  );
};

export default App;
