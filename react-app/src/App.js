import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import SplashPage from './components/SplashPage';

// import other
import { setUser } from './store/session';
import { authenticate } from './services/auth';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        dispatch(setUser(user));
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return 'loading/';
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute
          path='/users'
          exact={true}
          authenticated={!!sessionUser}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path='/users/:userId'
          exact={true}
          authenticated={!!sessionUser}
        >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} authenticated={!!sessionUser}>
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
