import styled, { keyframes, css } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  margin: 1rem;
  height: 100px;
  width: 100px;
  border: 10px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.highlight};
  animation: ${loaderAnimation} 2s infinite linear; 
  ${(props) => props.searchableSize && css`
    height: 420px;
    width: 420px;
  `};
`;

export default Loader;
