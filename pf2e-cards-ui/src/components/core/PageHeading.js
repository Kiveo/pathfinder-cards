import styled from 'styled-components';

const PageHeading = styled.h1`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  padding: 2rem 0;
  text-transform: capitalize;
  letter-spacing: 3px;
  font-family: ${(props) => props.theme.headingFont};
  font-size: ${(props) => props.theme.heading};
  border-bottom: 1px solid ${(props) => props.theme.tertiary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.highlight};
`;

export default PageHeading;
