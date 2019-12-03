import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  &:hover {
    color: ${(props) => props.theme.highlight}
  };
`;

export default StyledLink;
