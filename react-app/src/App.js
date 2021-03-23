import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SplashPage from './components/SplashPage';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';

import Clients from './pages/Clients';
import Client from './pages/Client'
import Profile from './pages/Profile';


import Dashboard from './components/Dashboard';
import ClientTests from './components/ClientTests';

import TestTemplate from './components/TestTemplate';
import Footer from './components/Footer';
import LoadingNotFoundInvalid from './components/LoadingNotFoundInvalid';
import TermsOfUse from './components/auth/TermsOfUse';

// import thunks
import { authenticateUser } from './store/session';
import { getClients } from './store/clients';
import { getTests } from './store/tests';

// import custom width hook
import { useWindowWidth } from './services/windowWidth';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);

  // set up to hide nav bar on dbl click on small screens
  const [showNav, setShowNav] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    dispatch(authenticateUser());
    setLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (sessionUser && sessionUser !== 'do not load') {
      dispatch(getClients(sessionUser.id));
      dispatch(getTests(sessionUser.id));
    }
  }, [dispatch, sessionUser]);

  if (!loaded || sessionUser === 'do not load') {
    return <LoadingNotFoundInvalid message={'Loading eDOT...'} />;
  }

  return (
    <BrowserRouter>
      {!showNav && width < 900 ? null : <NavBar />}
      <div
        className='btwn-nav-footer'
        onDoubleClick={() => (width < 900 ? setShowNav((prev) => !prev) : {})}
      >
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
            path='/clients'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Clients />
          </ProtectedRoute>
          <ProtectedRoute
            path='/profile'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute
            path='/clients/:clientId'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Client />
            {/* <ClientTests /> */}
          </ProtectedRoute>
          <Route path='/test/:testCode/:userId/:clientId/:encURL' exact={true}>
            <TestTemplate />
          </Route>
          <Route path='/terms-of-use'>
            <TermsOfUse />
          </Route>
          <Route path='/'>
            <LoadingNotFoundInvalid message={'Page not found...'} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
