import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import {
  PageHeading, SubHeading, Page, Loader, ErrorMessage,
} from 'components/core';
import CardList from 'components/cards/CardList';
import Search from 'components/inputs/Search';
import CardContext from 'context';

const CardsPage = () => {
  // -- Hooks --
  const { state } = useContext(CardContext);

  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const searchRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCards = async () => {
      try {
        const cardsResponse = await fetch(`/cards?search=${query}`).then((response) => response.json());
        setCards(cardsResponse);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
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
      <SubHeading>Sample Cards</SubHeading>
      <CardList cards={state.cards} />
      <SubHeading>{`(${cards.length || 0}) Real Card list`}</SubHeading>
      <Search handleSubmit={handleSubmit} handleClear={handleClear} searchRef={searchRef} />
      {loading
        ? <Loader />
        : <CardList cards={cards} />}
      {error && <ErrorMessage error={error} />}
    </Page>
  );
};

export default CardsPage;
