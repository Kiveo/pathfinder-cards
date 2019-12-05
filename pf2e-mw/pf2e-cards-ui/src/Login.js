import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Page, PageHeading } from 'components/core';
import {
  Button, Form, Input, StyledLink,
} from 'components/inputs';
import { WelcomeMessage } from 'components/visual';
import UserContext from 'context/UserContext';

// Todo: connect to api and create a user context
const Login = () => {
  // -- Hooks --
  const userContext = useContext(UserContext);
  const [redirectActive, setRedirectActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userContext !== {}) { console.log('Detected userContext', userContext); }
  }, [userContext]);

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
    console.log('Rolling initiative for ', userData || 'the new hero');
    setRedirectActive(true);
  };

  // -- Render --
  if (redirectActive) {
    return <Redirect to="/cards" />;
  }

  return (
    <Page>
      <PageHeading>Sign In</PageHeading>
      <Form>
        <WelcomeMessage name={username !== '' ? ` ${username}` : ' Hero'} />
        <Input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" name="password" placeholder="Password Demo" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </Form>
    </Page>
  );
};

export default Login;
