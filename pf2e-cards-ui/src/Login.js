import React, { useState } from 'react';
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
  #greeting {
    color: ${(props) => props.theme.highlight};
    font-weight: bold;
  };
`;

// -- COMPONENT --
const Login = () => {
  // -- state --
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  // -- handlers --
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    setUserData(user);
    setUsername('');
    setPassword('');
  };

  // -- Render --
  return (
    <StyledLogin>
      <PageHeading>Sign In</PageHeading>
      <Form>
        <Input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
      {userData && (
        <p>
          Welcome,
          <span id="greeting">{` ${userData.username}`}</span>
        </p>
      )}
    </StyledLogin>
  );
};

export default Login;
