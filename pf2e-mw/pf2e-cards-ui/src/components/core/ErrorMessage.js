import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.p`
  margin: 0.5rem;
  color: ${(props) => props.theme.warning};
  background: ${(props) => props.theme.primary};
  border-radius: 5px;
  padding: 0.5rem;
`;

const ErrorMessage = ({ error }) => <StyledError>{`Error: ${error}`}</StyledError>;

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
