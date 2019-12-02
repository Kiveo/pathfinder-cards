import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Page, PageHeading } from 'components/core';
import { Highlight } from 'components/visual';
import { Button, Form, Input } from 'components/inputs';

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  // -- state --
  const [redirectActive, setRedirectActive] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [userData, setUserData] = useState(null);

  // -- handlers --
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
      <p>
        Welcome,
        <Highlight className="highlight"> Pathfinder</Highlight>
      </p>
      <Form>
        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
        <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={formData.email} />
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Page>
  );
};

export default SignUp;
