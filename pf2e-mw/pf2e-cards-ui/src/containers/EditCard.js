import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import CardContext from 'context/CardContext';
import CardWrapper from 'components/cards/CardWrapper';
import {
  Form, Input, TwoButtonWrapper, Button,
} from 'components/inputs';
import { ErrorMessage } from 'components/core';
import useCardValidator from './helpers/useCardValidator';

const EditCard = ({ card, setEditMode }) => {
  // -- Hooks --
  const { dispatch } = useContext(CardContext);
  const [cardData, setCardData] = useState(card);
  const [errorMessage, setErrorMessage] = useState(null);
  // custom hook
  const validatedCard = useCardValidator(cardData);

  // -- Handlers --
  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setCardData(card);
    setErrorMessage(null);
    setEditMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedCard.valid) {
      dispatch({ type: 'UPDATE_CARD', payload: cardData });
      setErrorMessage(null);
      setEditMode(false);
    } else {
      setErrorMessage(validatedCard.message);
    }
  };

  return (
    <CardWrapper>
      <Form>
        <Input name="name" placeholder="Name" onChange={handleChange} value={cardData.name} />
        <Input name="description" placeholder="Description" onChange={(e) => setCardData({ ...cardData, description: e.target.value })} value={cardData.description} />
        <TwoButtonWrapper>
          <Button className="button__bottom" type="submit" onClick={handleSubmit}>Submit</Button>
          <Button className="button__bottom" type="button" onClick={handleCancel}>Cancel</Button>
        </TwoButtonWrapper>
        {errorMessage && <ErrorMessage error={errorMessage} />}
      </Form>
    </CardWrapper>
  );
};

EditCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default EditCard;
