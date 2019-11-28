import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => props.theme.pageBg};
  .highlight {
    color: ${(props) => props.theme.highlight};
    font-weight: bold;
  };
`;

export default Page;
