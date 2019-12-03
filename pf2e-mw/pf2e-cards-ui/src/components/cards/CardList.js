import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Card from './Card';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${(props) => props.searchableSize && css`
    min-height: 420px;
  `};
`;

const CardList = ({ cards, searchableSize }) => (
  <StyledList searchableSize={searchableSize}>
    {cards.length > 0 && cards.map((card) => (<Card key={card._id || card.id} card={card} />))}
  </StyledList>
);

CardList.defaultProps = {
  searchableSize: false,
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
  searchableSize: PropTypes.bool,
};

export default CardList;
