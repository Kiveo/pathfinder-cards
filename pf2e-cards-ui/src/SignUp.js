import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Page, PageHeading } from 'components/core';
import { WelcomeMessage } from 'components/visual';
import { Button, Form, Input } from 'components/inputs';

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  // -- Hooks --
  const [redirectActive, setRedirectActive] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [userData, setUserData] = useState(null);

  // -- Handlers --
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setFormData(initialFormData);
    console.log('Rolling initiative for ', userData || 'the new hero');
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
      </Form>
    </Page>
  );
};

export default SignUp;
