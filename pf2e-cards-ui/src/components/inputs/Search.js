import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Form, Input } from 'components/inputs';

const StyledSearch = styled(Form)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 0.5rem 0;
  input {
    flex: 1;
    margin: 0.5rem;
  };
  .twoButtonWrapper {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      width: 150px;
      margin: 0 0.5rem;
    }
  }
`;

const Search = ({ handleSubmit, handleClear, searchRef }) => (
  <StyledSearch onSubmit={(e) => handleSubmit(e)}>
    <Input
      type="text"
      name="search"
      placeholder="Search..."
      ref={searchRef}
    />
    <div className="twoButtonWrapper">
      <Button type="submit">Search</Button>
      <Button type="button" onClick={() => handleClear()}>Clear</Button>
    </div>
  </StyledSearch>
);

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  searchRef: PropTypes.instanceOf(Object).isRequired,
};

export default Search;
