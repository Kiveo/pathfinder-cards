import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ cards }) => (
  <>
    {cards.length > 0 && cards.map((card) => (<Card key={card._id} card={card} />))}
  </>
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
