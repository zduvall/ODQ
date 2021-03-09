import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SplashPage from './components/SplashPage';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Dashboard from './components/Dashboard';
import ClientTests from './components/ClientTests';
import TestTemplate from './components/TestTemplate';
import Footer from './components/Footer';

// import thunks
import { authenticateUser } from './store/session';
import { getClients } from './store/clients';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticateUser());
    setLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getClients(sessionUser.id));
  });

  if (!loaded || sessionUser === 'do not load') {
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
          <Route path='/' exact={true}>
            <SplashPage />
          </Route>
          <ProtectedRoute
            path='/dashboard'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute
            path='/clients/:clientId'
            exact={true}
            authenticated={!!sessionUser}
          >
            <ClientTests />
          </ProtectedRoute>
          <Route path='/test/:testCode/:userId/:clientId' exact={true}>
            <TestTemplate />
          </Route>
          <Route path='/'>
            <h1 className='loading'>Page Not Found...</h1>
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
