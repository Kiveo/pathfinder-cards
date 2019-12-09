import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Page, PageHeading } from 'components/core';
import { WelcomeMessage } from 'components/visual';
import {
  Button, Form, Input, StyledLink,
} from 'components/inputs';
import { UserContext } from 'context/UserContext';

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  // -- Hooks --
  const { userState, dispatch } = useContext(UserContext);
  const [redirectActive, setRedirectActive] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { username, password, email } = formData;

  useEffect(() => {
    if (userState.isloggedIn) {
      setRedirectActive(true);
    }
  }, [userState.isloggedIn]);

  // -- Handlers --
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '') {
      dispatch({ type: 'LOG_IN', payload: { username } });
      setFormData(initialFormData);
      setRedirectActive(true);
    }
  };

  // -- Render --
  if (redirectActive) {
    return <Redirect to="/" />;
  }
  return (
    <Page>
      <PageHeading>Sign Up</PageHeading>
      <WelcomeMessage name="Pathfinder" />
      <Form>
        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={username} />
        <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={email} />
        <Input disabled type="password" name="password" placeholder="Password Demo" onChange={handleChange} value={password} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        <StyledLink to="/">Log In</StyledLink>
      </Form>
    </Page>
  );
};

export default SignUp;
