import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: ${(props) => props.theme.xLarge};
  background: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  border: none;
  padding: 0.25rem 1.5rem;
  border: 0.1rem solid ${(props) => props.theme.tertiary};
  border-radius: 5px;
  letter-spacing: 0.1rem;
  outline-color: ${(props) => props.theme.secondary};
  margin: 0.5rem;
  &:hover {
    border: 0.1rem solid ${(props) => props.theme.tertiary};
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.tertiary};
  };
  ${(props) => props.disabled && css`
    border: transparent !important;
    background: ${props.theme.disabled};
    /* // todo extract svg from button and twobutton code, and bring styles direct from component */
    svg path {
    fill: inherit !important;
    }
  `};
`;

export default Button;
