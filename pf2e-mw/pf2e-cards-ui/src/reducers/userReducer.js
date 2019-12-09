const userReducer = (userState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      const newUser = { isLoggedIn: true, ...action.payload };
      return newUser;
    }

    case 'LOG_OUT': {
      const blankUser = { username: null, isLoggedIn: false };
      // wipe out sessionStorage
      sessionStorage.clear();
      return blankUser;
    }

    default:
      return userState;
  }
};

export default userReducer;
