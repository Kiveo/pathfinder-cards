import styled, { css } from 'styled-components';
import Button from './Button';

const TextButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.tertiary};
  font-size: ${(props) => props.theme.small};
  outline: none;
  padding: 0;
  &:hover {
    color: ${(props) => props.theme.highlight};
    border: none;
  };
  ${(props) => props.linkStyle && css`{
    &:hover {
      background: transparent;
    };
  `};
`;

export default TextButton;
