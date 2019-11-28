import React, { useState } from 'react';
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
  };

  // -- Render --
  return (
    <Page>
      <PageHeading>Sign Up</PageHeading>
      <Form>
        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
        <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={formData.email} />
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
      {userData && (
        <p>
          Welcome,
          {/* // todo create highlight component */}
          <Highlight>{` ${userData.username}`}</Highlight>
        </p>
      )}
    </Page>
  );
};

export default SignUp;
