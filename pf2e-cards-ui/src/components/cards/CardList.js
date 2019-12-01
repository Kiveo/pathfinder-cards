import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  li {
    /* flex: 1; */
    margin: 1rem auto;
  };
`;

const CardList = ({ cards }) => (
  <StyledList>
    {cards.length > 0 && cards.map((card) => (<Card key={card._id} card={card} />))}
  </StyledList>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
};

export default CardList;
