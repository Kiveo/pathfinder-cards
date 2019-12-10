import React, {
  createContext, useContext, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import userReducer from 'reducers/userReducer';


export const UserContext = createContext({
  username: null,
  isloggedIn: false,
});

const UserContextProvider = ({ children }) => {
  const initialUser = useContext(UserContext);
  const [userState, dispatch] = useReducer(userReducer, initialUser, () => {
    const sessionUser = sessionStorage.getItem('userState');
    return sessionUser ? JSON.parse(sessionUser) : initialUser;
  });

  useEffect(() => {
    sessionStorage.setItem('userState', JSON.stringify(userState));
  }, [userState]);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
