import styled from 'styled-components';

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.large};
  font-weight: bold;
  background: ${(props) => props.theme.inputBg};
  border: 0.1rem solid ${(props) => props.theme.inputBg};
  outline: none;
  color: ${(props) => props.theme.primary};
  &:focus {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.tertiary};
  };
`;

export default Input;
