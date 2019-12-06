import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Page, PageHeading } from 'components/core';
import {
  Button, Form, Input, StyledLink, TextButton,
} from 'components/inputs';
import { WelcomeMessage } from 'components/visual';
import UserContext from 'context/UserContext';

// Todo: connect to api and create a user context
const Login = () => {
  // -- Hooks --
  const { userState, setUserState } = useContext(UserContext);
  const [redirectActive, setRedirectActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // -- handlers --
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO implement API and refactor
    // const user = {
    //   username,
    //   password,
    // };
    setUsername('');
    setPassword('');
    setUserState({ username });
    // setRedirectActive(true);
  };

  // -- Render --
  if (redirectActive) {
    return <Redirect to="/cards" />;
  }

  return (
    <Page>
      <PageHeading>Sign In</PageHeading>
      {userState.username
        ? (
          <>
            <WelcomeMessage name={userState.username} />
            <p>Status: Logged in</p>
            <Button type="button" onClick={() => setRedirectActive(true)}>Continue</Button>
            <TextButton linkStyle type="button" onClick={() => setUserState({})}>Logout</TextButton>
          </>
        )
        : (
          <Form>
            <WelcomeMessage name={username !== '' ? ` ${username}` : ' Hero'} />
            <Input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" name="password" placeholder="Password Demo" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" onClick={handleSubmit}>Log In</Button>
            <StyledLink to="/signup">Sign Up</StyledLink>
          </Form>
        )}
    </Page>
  );
};

export default Login;
