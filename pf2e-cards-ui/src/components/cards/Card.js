import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// -- styles --
const CardWrapper = styled.li`
  display: block;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  padding: 1rem;
  width: 250px;
  &:hover {
    border: 1px solid ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.tertiary};
  };
  hr {
    border: 1px solid ${(props) => props.theme.tertiary};
  }
`;

// -- Component --
const Card = ({ card }) => (
  <CardWrapper>
    {card.name}
    <hr />
    {card.description}
  </CardWrapper>
);

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Card;
