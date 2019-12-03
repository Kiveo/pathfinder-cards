import React, { useState, useContext } from 'react';
import CardContext from 'context';
import PropTypes from 'prop-types';
import { Button, StyledLink, TextButton } from 'components/inputs';
import { Quill, Trash } from 'images';
import TwoButtonWrapper from 'components/inputs/TwoButtonWrapper';
import EditCard from 'containers/EditCard';
import CardWrapper from './CardWrapper';

// -- Component --
const Card = ({ card }) => {
  const { dispatch } = useContext(CardContext);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {editMode
        ? <EditCard card={card} setEditMode={setEditMode} />
        : (
          <CardWrapper>
            {/* // TODO link when router is setup */}
            <StyledLink to={`#${card.name}`}>{card.name}</StyledLink>
            <hr />
            <div className="card__info-wrapper">
              {(card.used != null) && (
                <span className="card__info card__info--normal">
                  Status:
                  <TextButton onClick={() => dispatch({ type: 'TOGGLE_USED', payload: card })}>{card.used ? ' Used' : ' Unused'}</TextButton>
                </span>
              )}
              <span className="card__info">{card.description}</span>
            </div>
            <hr />
            <TwoButtonWrapper small>
              <Button disabled={!!card._id} onClick={() => setEditMode(true)}><Quill width="100%" height="80%" /></Button>
              <Button disabled={!!card._id} onClick={() => dispatch({ type: 'DELETE_CARD', payload: card })}><Trash width="20px" height="30px" /></Button>
            </TwoButtonWrapper>
          </CardWrapper>
        )}
    </>
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
