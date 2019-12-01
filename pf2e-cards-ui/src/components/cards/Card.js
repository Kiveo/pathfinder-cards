import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Link } from 'components/inputs';
import { Quill, Trash } from 'images';
import TwoButtonWrapper from 'components/inputs/TwoButtonWrapper';

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
  hr {
    border: 1px solid ${(props) => props.theme.tertiary};
  };
  .card__description {
    width: 100%;
    display: inline-block;
    text-align: left;
    font-size: 10pt;
    margin: 0.5rem;
  }
`;

// -- Component --
const Card = ({ card }) => (
  <CardWrapper>
    {/* // TODO link when router is setup */}
    <Link href="#">{card.name}</Link>
    <hr />
    <span className="card__description">{card.description}</span>
    <hr />
    <TwoButtonWrapper small>
      <Button><Quill width="100%" height="80%" /></Button>
      <Button><Trash width="20px" height="30px" /></Button>
    </TwoButtonWrapper>
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
