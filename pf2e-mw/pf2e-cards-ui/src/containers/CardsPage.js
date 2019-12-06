import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import {
  PageHeading, SubHeading, Page, Loader, ErrorMessage,
} from 'components/core';
import CardList from 'components/cards/CardList';
import Search from 'components/inputs/Search';
import CardContext from 'context/CardContext';
import NewCard from './NewCard';

const CardsPage = () => {
  // -- Hooks --
  const { cardsState } = useContext(CardContext);

  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const searchRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // in case async is happening on unmount, we can abort during cleanup
    const abortController = new AbortController();
    setLoading(true);
    const fetchCards = async () => {
      try {
        const cardsResponse = await fetch(`api/cards?search=${query}`, { signal: abortController.signal })
          .then((response) => response.json());

        setCards(cardsResponse);
        setLoading(false);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchCards();
    return () => {
      abortController.abort();
    };
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
      <NewCard />
      <SubHeading>Local Cards</SubHeading>
      <CardList cards={cardsState.samples} />
      <SubHeading>{`(${cards.length || 0}) Database Cards`}</SubHeading>
      <Search handleSubmit={handleSubmit} handleClear={handleClear} searchRef={searchRef} />
      {loading
        ? <Loader searchableSize />
        : <CardList cards={cards} searchableSize />}
      {error && <ErrorMessage error={error} />}
    </Page>
  );
};

export default CardsPage;
