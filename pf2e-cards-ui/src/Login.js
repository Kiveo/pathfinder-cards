import React from 'react';
import styled from 'styled-components';

// todo: extract styles into styled-components
const StyledLogin = styled.section`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => props.theme.sectionBg};
  h1, h2, h3, h4, h5 ,h6 {
    margin: 10vh 1rem 1rem 1rem; 
    text-transform: capitalize;
    letter-spacing: 0.1rem;
  };
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  };
  input {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: bold;
    background: ${(props) => props.theme.inputBg};
    border: 0.1rem solid ${(props) => props.theme.inputBg};
    outline: none;
    color: ${(props) => props.theme.primary};
    &:focus {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.tertiary};
    };
  };
  button[type='submit'] {
    font-size: 20px;
    background: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.secondary};
    font-weight: bold;
    border: none;
    padding: 0.5rem 1.5rem;
    border: 0.1rem solid ${(props) => props.theme.tertiary};
    border-radius: 5px;
    letter-spacing: 0.1rem;
    outline-color: ${(props) => props.theme.secondary};
    &:hover {
      border: 0.1rem solid ${(props) => props.theme.tertiary};
      background: ${(props) => props.theme.primary};
      /* background: ${(props) => props.theme.secondary}; */
      color: ${(props) => props.theme.tertiary};
    };
  };
`;

export default function Login() {
  return (
    <StyledLogin>
      <h2>Sign In</h2>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </StyledLogin>
  );
}
