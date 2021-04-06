// Action Types
const LOGIN_USER = 'session/LOGIN_USER';
const REMOVE_USER = 'session/REMOVE_USER';

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
  return user;
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

export const updateUser = (
  id,
  firstName,
  lastName,
  email,
  lic,
  pxName,
  phone,
  premium
) => async (dispatch) => {
  const res = await fetch(`/api/auth/signup/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      lic,
      pxName,
      phone,
      premium,
    }),
  });

  const user = await res.json();

  if (res.ok && !user.errors) {
    dispatch(setUser(user));
  }
  return user;
};

export const togglePremium = (id, premium) => async (dispatch) => {
  const res = await fetch(`/api/auth/toggle-premium/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      premium,
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
  } else {
    dispatch(setUser(null));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/auth/${userId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(removeUser());
  }
};

// add payment method onto the customer, and get updated customer onto user in redux store
export const addPaymentMethod = (
  customerId,
  paymentMethodId,
  priceId,
  userId,
  brand,
  last4,
  exp_month,
  exp_year
) => async (dispatch) => {

  const res = await fetch(`/api/payments/create-subscription`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customerId,
      paymentMethodId,
      priceId,
      userId,
      brand,
      last4,
      exp_month,
      exp_year,
    }),
  });

  debugger

  const user = await res.json();

  if (user.ok) {
    dispatch(setUser(user));
  }

  return user;
};

// Reducer
const sessionReducer = (state = { user: 'do not load' }, action) => {
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
