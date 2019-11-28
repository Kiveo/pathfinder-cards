import styled from 'styled-components';

const Button = styled.button`
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
`;

export default Button;
