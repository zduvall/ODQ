import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/Users/UsersList';
// import User from './components/Users/User';
import SplashPage from './components/SplashPage';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

// import thunk
import { authenticateUser } from './store/session';

function App() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticateUser());
    setLoaded(true);
  }, [dispatch]);

  console.log('session in app.js:', session);

  if (!loaded || session.user === 'do not load') {
    return <h1 className='loading'>Loading DOT...</h1>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className='btwn-nav-footer'>
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/signup' exact={true}>
            <SignUpForm />
          </Route>
          {/* <ProtectedRoute
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
          </ProtectedRoute> */}
          <Route path='/' exact={true}>
            <SplashPage />
          </Route>
          <ProtectedRoute
            path='/dashboard'
            exact={true}
            authenticated={!!session.user}
          >
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
