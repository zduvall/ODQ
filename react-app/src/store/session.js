// Action Types
const LOGIN_USER = 'session/loginUser';
const REMOVE_USER = 'session/removeUser';

// Action Creators
export const setUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// Thunks
export const loginUser = (email, password) => async (dispatch) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const user = await res.json();
  if (res.ok && !user.errors) {
    dispatch(setUser(user));
  }
  return user
};

export const signUpUser = (firstName, lastName, email, password) => async (
  dispatch
) => {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });

  const user = await res.json();

  if (res.ok && !user.errors) {
    dispatch(setUser(user));
  }
  return user;
};

export const logoutUser = () => async (dispatch) => {
  await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeUser());
};

export const authenticateUser = () => async (dispatch) => {
  const res = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await res.json();
  if (!user.errors) {
    dispatch(setUser(user));
  }
};

// Reducer
const sessionReducer = (state = { user: null }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOGIN_USER:
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
