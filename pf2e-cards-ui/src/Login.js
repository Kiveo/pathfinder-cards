import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Page, PageHeading } from 'components/core';
import {
  Button, Form, Input, StyledLink,
} from 'components/inputs';
import { Highlight } from 'components/visual';

// Todo: connect to api and create a user context
const Login = () => {
  // -- state --
  const [redirectActive, setRedirectActive] = useState(false);
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
        <p>
          Welcome,
          <Highlight className="highlight">{username !== '' ? ` ${username}` : ' Hero'}</Highlight>
        </p>
        <Input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </Form>
    </Page>
  );
};

export default Login;
