import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import thunks
import { authenticateUser } from './store/session';
import { getClients } from './store/clients';

// // components
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import SplashPage from './pages/SplashPage';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Clients from './pages/Clients';
// import Client from './pages/Client';
// import Account from './pages/Account';
// import Payments from './pages/Payments';
// import ClientForm from './pages/ClientForm';
// import TestForm from './pages/TestForm';
// import TermsOfUse from './pages/TermsOfUse';
import NavBar from './components/NavBar/index.js';
import Footer from './components/Footer';
import LoadingNotFoundInvalid from './components/LoadingNotFoundInvalid';

const ProtectedRoute = lazy(() => import('./components/auth/ProtectedRoute'));
const SplashPage = lazy(() => import('./pages/SplashPage'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Clients = lazy(() => import('./pages/Clients'));
const Client = lazy(() => import('./pages/Client'));
const Account = lazy(() => import('./pages/Account'));
const Payments = lazy(() => import('./pages/Payments'));
const ClientForm = lazy(() => import('./pages/ClientForm'));
const TestForm = lazy(() => import('./pages/TestForm'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const UnsubOrDeactivate = lazy(() => import('./pages/UnsubOrDeactivate'));

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);

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
      <NavBar />
      <div className='btwn-nav-footer'>
        <Suspense
          fallback={<LoadingNotFoundInvalid message={'Loading eDOT...'} />}
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
              path='/account'
              exact={true}
              authenticated={!!sessionUser}
            >
              <Account />
            </ProtectedRoute>
            <ProtectedRoute
              path='/payments/:subPageId'
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
            <ProtectedRoute
              path={['/unsubscribe', '/deactivate', '/feedback']}
              exact={true}
              authenticated={!!sessionUser}
            >
              <UnsubOrDeactivate />
            </ProtectedRoute>
            <Route path='/'>
              <LoadingNotFoundInvalid message={'Page not found...'} />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
