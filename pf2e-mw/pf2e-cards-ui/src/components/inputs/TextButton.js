import styled from 'styled-components';
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
`;

export default TextButton;
