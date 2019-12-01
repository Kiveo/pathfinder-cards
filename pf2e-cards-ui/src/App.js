import React, { useState, useEffect } from 'react';
import { PageHeading, SubHeading, Page } from 'components/core';
import { Input } from 'components/inputs';
import CardList from 'components/cards/CardList';

const App = () => {
  // -- state --
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      const cardsResponse = await fetch(`/cards?search=${query}`)
        .then((response) => response.json());
      setCards(cardsResponse);
    };
    fetchCards();
  }, [query]);

  // -- RENDER --
  return (
    <Page>
      <PageHeading>Pathfinder Cards</PageHeading>
      <SubHeading>Card list</SubHeading>
      <Input
        type="text"
        name="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <CardList cards={cards} />
    </Page>
  );
};

export default App;
