import styled, { css } from 'styled-components';

const TwoButtonWrapper = styled.div`
  display: flex;
  flex: 1; 
  justify-content: space-evenly;
  align-items: center;
  button {
    width: 150px;
    margin: 0 0.5rem;
  };

  ${(props) => props.small && css`
    /* Conditional CSS */
    max-height: 50px;
    button {
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${props.theme.small};
      padding: 0;
      background: ${props.theme.primary};
      border-color: transparent;
      border-radius: 50%; 
      width: 50px;
      height: 50px;
      svg path {
        fill: ${props.theme.tertiary};
      };
      &:hover {
        svg path {
          fill: ${props.theme.highlight};
        };
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-top: 1px solid ${props.theme.highlight};
        border-left: ${props.theme.highlight};
      };
      &:active {
        border: 1px solid ${props.theme.highlight};
      }
    }
  `};
`;

export default TwoButtonWrapper;
