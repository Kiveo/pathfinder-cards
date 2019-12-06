import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CardContext from 'context/CardContext';
import { Page, SubHeading, ErrorMessage } from 'components/core';
import {
  Form, Input, Button, TwoButtonWrapper,
} from 'components/inputs';
import useCardValidator from './helpers/useCardValidator';

// --  styles --
const NewCardPage = styled(Page)`
  min-height: 100px;
  width: calc(100% - 1rem);
  max-width: 1200px;
  background: ${(props) => props.theme.primary};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.tertiary};
  border-top: 1px solid ${(props) => props.theme.tertiary};
  border-bottom: 1px solid ${(props) => props.theme.tertiary};
  margin-bottom: 1rem;
  button.button__bottom {
    margin-bottom: 1.5rem;
  }
`;

// initial form state
const initialFormData = {
  name: '',
  description: '',
  used: false,
};

// -- COMPONENT --
const NewCard = () => {
  // -- Hooks --
  const { dispatch } = useContext(CardContext);
  const [cardData, setCardData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState(null);
  const validatedCard = useCardValidator(cardData);

  // -- Handlers --
  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedCard.valid) {
      dispatch({ type: 'CREATE_CARD', payload: cardData });
      setCardData(initialFormData);
      setErrorMessage(null);
    } else {
      setErrorMessage(validatedCard.message);
    }
  };

  const handleClear = () => {
    setCardData(initialFormData);
    setErrorMessage(null);
  };

  // -- Render --
  return (
    <NewCardPage>
      <SubHeading>Create New Card</SubHeading>
      <Form>
        <Input name="name" placeholder="Name" onChange={handleChange} value={cardData.name} />
        <Input name="description" placeholder="Description" onChange={(e) => setCardData({ ...cardData, description: e.target.value })} value={cardData.description} />
        <TwoButtonWrapper>
          <Button className="button__bottom" type="submit" onClick={handleSubmit}>Submit</Button>
          <Button className="button__bottom" type="button" onClick={handleClear}>Clear</Button>
        </TwoButtonWrapper>
        {errorMessage && <ErrorMessage error={errorMessage} />}
      </Form>
    </NewCardPage>
  );
};

export default NewCard;
