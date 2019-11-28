import React, { useState } from 'react';
import { Page, PageHeading } from 'components/core';
import { Button, Form, Input } from 'components/inputs';
import { Highlight } from 'components/visual';

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
          <Highlight className="highlight">{` ${userData.username}`}</Highlight>
        </p>
      )}
    </Page>
  );
};

export default Login;
