import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  &:hover {
    color: ${(props) => props.theme.highlight}
  };
`;

export default Link;
