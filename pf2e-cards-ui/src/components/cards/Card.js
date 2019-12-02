import React, { useContext } from 'react';
import CardContext from 'context';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Link, TextButton } from 'components/inputs';
import { Quill, Trash } from 'images';
import TwoButtonWrapper from 'components/inputs/TwoButtonWrapper';

// -- styles --
const CardWrapper = styled.li`
  margin: 1rem auto;
  display: block;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.tertiary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  padding: 1rem;
  width: 500px;
  hr {
    border: 1px solid ${(props) => props.theme.tertiary};
  };
  .card__info {
    width: 100%;
    display: inline-block;
    text-align: left;
    margin: 0.5rem;
    font-weight: normal;
    &--normal {
      font-size: ${(props) => props.theme.small};
      font-weight: normal;
    }
  };
  @media (max-width: 900px) {
    width: 100%;
    margin: 1rem 0.5rem;
  };
`;

// -- Component --
const Card = ({ card }) => {
  const { dispatch } = useContext(CardContext);

  return (
    <CardWrapper>
      {/* // TODO link when router is setup */}
      <Link href={`#${card.name}`}>{card.name}</Link>
      <hr />
      {(card.used != null) && (
        <span className="card__info card__info--normal">
          Status:
          <TextButton onClick={() => dispatch({ type: 'TOGGLE_USED', payload: card })}>{card.used ? ' Used' : ' Unused'}</TextButton>
        </span>
      )}
      <span className="card__info">{card.description}</span>
      <hr />
      <TwoButtonWrapper small>
        <Button><Quill width="100%" height="80%" /></Button>
        <Button onClick={() => dispatch({ type: 'DELETE_CARD', payload: card })}><Trash width="20px" height="30px" /></Button>
      </TwoButtonWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    used: PropTypes.bool,
  }).isRequired,
};

export default Card;
