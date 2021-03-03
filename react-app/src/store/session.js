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
  if (res.ok) {
    dispatch(setUser(user));
  }
};

export const signUpUser = (username, email, password) => async (dispatch) => {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const user = await res.json();
  if (res.ok) {
    dispatch(setUser(user));
  }
};

export const logoutUser = () => async (dispatch) => {
  const res = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeUser());
  // return await res.json();
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
