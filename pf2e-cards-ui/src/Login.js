import React, { useState } from 'react';
import { Button, Form, Input } from 'components/inputs';
import { Page, PageHeading } from 'components/core';

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
    <Page>
      <PageHeading>Sign In</PageHeading>
      <Form>
        <Input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
      {userData && (
        <p>
          Welcome,
          <span className="highlight">{` ${userData.username}`}</span>
        </p>
      )}
    </Page>
  );
};

export default Login;
