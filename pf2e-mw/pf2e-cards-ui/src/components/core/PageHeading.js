import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextButton } from 'components/inputs';
import { UserContext } from 'context/UserContext';

const StyledPageHeading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  padding: ${(props) => (props.isLoggedIn ? '2.5rem 0 0 0' : '2.5rem 0')};
  text-transform: capitalize;
  letter-spacing: 3px;
  font-family: ${(props) => props.theme.headingFont};
  font-size: ${(props) => props.theme.heading};
  border-bottom: 1px solid ${(props) => props.theme.tertiary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.highlight};
  .PageHeading__title {
    flex: 1;
    text-align: center;
  };

  .PageHeading__menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.5rem;
    width: 100%;
    text-align: right;
    background: rgba(0,0,0,0.2);
    button {
      border-left: 1px solid ${(props) => props.theme.tertiary};
      border-radius: 0;
      padding-left: 1rem;
    }
  }
`;

const PageHeading = ({ children }) => {
  const { userState: { isLoggedIn }, dispatch } = useContext(UserContext);

  return (
    <StyledPageHeading isLoggedIn={isLoggedIn}>
      <div className="PageHeading__title">{children}</div>
      {isLoggedIn && (
        <div className="PageHeading__menu">
          <TextButton linkStyle type="button" onClick={() => dispatch({ type: 'LOG_OUT' })}>Logout</TextButton>
        </div>
      )}
    </StyledPageHeading>
  );
};

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeading;
