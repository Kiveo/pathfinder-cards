import React, { useContext } from 'react';
import { Page, PageHeading } from 'components/core';
import UserContext from 'UserContext';

// TODO: demo react context hook
const App = () => {
  const value = useContext(UserContext);

  return (
    <Page>
      <PageHeading>{`Greetings, ${value}`}</PageHeading>
    </Page>
  );
};

export default App;
