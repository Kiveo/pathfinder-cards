import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'components/inputs';
import { PageHeading } from 'components/core';

// -- styles --
const StyledLogin = styled.section`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => props.theme.pageBg};
`;

// -- RENDER --
const Login = () => (
  <StyledLogin>
    <PageHeading>Sign In</PageHeading>
    <Form>
      <Input type="text" name="username" placeholder="Username" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">Submit</Button>
    </Form>
  </StyledLogin>
);

export default Login;
