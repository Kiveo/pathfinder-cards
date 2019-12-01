import React, { useState, useEffect, useRef } from 'react';
import {
  PageHeading, SubHeading, Page, Loader,
} from 'components/core';
import CardList from 'components/cards/CardList';
import Search from 'components/inputs/Search';

const App = () => {
  // -- Hooks --
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const searchRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCards = async () => {
      const cardsResponse = await fetch(`/cards?search=${query}`).then((response) => response.json());
      setCards(cardsResponse);
      setLoading(false);
    };
    fetchCards();
  }, [query]);

  // -- Handlers --
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchRef.current.value);
  };

  const handleClear = () => {
    setQuery('');
    searchRef.current.value = '';
    searchRef.current.focus();
  };

  // -- RENDER --
  return (
    <Page>
      <PageHeading>Pathfinder Cards</PageHeading>
      <SubHeading>Card list</SubHeading>
      <Search handleSubmit={handleSubmit} handleClear={handleClear} searchRef={searchRef} />
      {loading
        ? <Loader />
        : <CardList cards={cards} />}
    </Page>
  );
};

export default App;
