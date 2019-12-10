/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from 'context/UserContext';


function PrivateRoute({ children, ...rest }) {
  // Todo: couple to API, in time
  const { userState } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) => (userState.isLoggedIn
        ? (children)
        : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ))}
    />
  );
}

export default PrivateRoute;
