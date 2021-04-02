import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Clients from './pages/Clients';
import Client from './pages/Client';
import Profile from './pages/Profile';
import Payments from './pages/Payments';
import ClientForm from './pages/ClientForm';
import TestForm from './pages/TestForm';
import Footer from './components/Footer';
import LoadingNotFoundInvalid from './components/LoadingNotFoundInvalid';
import TermsOfUse from './pages/TermsOfUse';

// import thunks
import { authenticateUser } from './store/session';
import { getClients } from './store/clients';
// import { getTests } from './store/tests';

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
          <Route path='/log-in' exact={true}>
            <Login />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUp />
          </Route>
          <Route path='/' exact={true}>
            <SplashPage />
          </Route>
          <ProtectedRoute
            path='/clients'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Clients />
          </ProtectedRoute>
          <ProtectedRoute
            path='/clients/new'
            exact={true}
            authenticated={!!sessionUser}
          >
            <ClientForm />
          </ProtectedRoute>
          <ProtectedRoute
            path='/clients/:clientId'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Client />
          </ProtectedRoute>
          <ProtectedRoute
            path='/clients/:clientId/edit'
            exact={true}
            authenticated={!!sessionUser}
          >
            <ClientForm />
          </ProtectedRoute>
          <ProtectedRoute
            path='/profile'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute
            path='/payments'
            exact={true}
            authenticated={!!sessionUser}
          >
            <Payments />
          </ProtectedRoute>
          <Route path='/test/:testCode/:userId/:clientId/:encURL' exact>
            <TestForm />
          </Route>
          <Route path='/terms-of-use' exact>
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
