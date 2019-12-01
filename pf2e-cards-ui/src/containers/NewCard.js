import React, { useState, useContext } from 'react';
import CardContext from 'context';
import { PageHeading, Page } from 'components/core';
import { Form, Input, Button } from 'components/inputs';

const NewCard = () => {
  // -- Hooks --
  const { dispatch } = useContext(CardContext);

  const [card, setCard] = useState({
    name: '',
    description: '',
    used: false,
  });

  // -- Handlers --
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form Card:', card);
    dispatch({ type: 'CREATE_CARD', payload: card });
    setCard({});
  };

  return (
    <Page>
      <PageHeading>Create New Card</PageHeading>
      <Form onSubmit={handleSubmit}>
        <Input name="name" onChange={(e) => setCard({ ...card, name: e.target.value })} value={card.name} />
        <Input name="description" onChange={(e) => setCard({ ...card, name: e.target.value })} value={card.description} />
        <Button type="submit">Submit</Button>
      </Form>
    </Page>
  );
};

export default NewCard;
