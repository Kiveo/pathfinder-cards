import styled from 'styled-components';

const Page = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => props.theme.pageBg};
`;

export default Page;
