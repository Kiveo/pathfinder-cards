import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Page, PageHeading } from 'components/core';
import { WelcomeMessage } from 'components/visual';
import {
  Button, Form, Input, StyledLink,
} from 'components/inputs';
import UserContext from 'context/UserContext';

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  // -- Hooks --
  const { userState, setUserState } = useContext(UserContext);
  const [redirectActive, setRedirectActive] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (userState.username) {
      setRedirectActive(true);
    }
  }, [userState.username]);

  // -- Handlers --
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    setUserState({ username: formData.username });
    setRedirectActive(true);
  };

  // -- Render --
  if (redirectActive) {
    return <Redirect to="/cards" />;
  }
  return (
    <Page>
      <PageHeading>Sign Up</PageHeading>
      <WelcomeMessage name="Pathfinder" />
      <Form>
        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
        <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={formData.email} />
        <Input disabled type="password" name="password" placeholder="Password Demo" onChange={handleChange} value={formData.password} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        <StyledLink to="/">Log In</StyledLink>
      </Form>
    </Page>
  );
};

export default SignUp;
