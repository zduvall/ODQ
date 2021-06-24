import {
  useState,
  useContext,
  createContext,
  useEffect,
  lazy,
  Suspense,
} from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';

// import css
import '../components/Payments/Payments.css';

// // import components
// import Payment1 from '../components/Payments/Payment1';
// import Payment2 from '../components/Payments/Payment2';
// import Payment3 from '../components/Payments/Payment3';
import LoadingNotFoundInvalid from '../components/LoadingNotFoundInvalid';
const Payment1 = lazy(() => import('../components/Payments/Payment1'));
const Payment2 = lazy(() => import('../components/Payments/Payment2'));
const Payment3 = lazy(() => import('../components/Payments/Payment3'));

const PaymentsContext = createContext();
export const usePaymentsContext = () => useContext(PaymentsContext);

export default function Payments() {
  const history = useHistory();
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);

  const { subPageId } = useParams('subPageId');

  const [paymentURL, setPaymentURL] = useState('/payments/')
  const [billingInfo, setBillingInfo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // redirect to account page if try to access payments page while already subscribed (or if while in production)
  useEffect(() => {
    // but don't redirect if they are subscribed and trying to update their payment
    if (sessionUser.subType && location.pathname.startsWith('/payments/update/')) {
      setPaymentURL('/payments/update/')
    } else if (sessionUser.subType || process.env.NODE_ENV === 'production') {
      history.push('/account');
    }
  }, [sessionUser, location, history]);

  // --------------------------------------------------------------------------------------------
  // next thing to do is make it so this page can also be used for updating payment information.
  // I'll probably need to use a different route to differentiate, and update the useEffect above
  // Then I need to render account info differently when a payment fails
  // https://stripe.com/docs/api/subscriptions/object
  // https://stripe.com/docs/testing
  // https://dashboard.stripe.com/settings/billing/automatic
  // --------------------------------------------------------------------------------------------

  // ------ lazy components ------
  const renderLoader = () => (
    <LoadingNotFoundInvalid message={'Loading eDOT...'} />
  );

  const Payment1Lazy = () => (
    <Suspense fallback={renderLoader()}>
      <Payment1 />
    </Suspense>
  );
  const Payment2Lazy = () => (
    <Suspense fallback={renderLoader()}>
      <Payment2 />
    </Suspense>
  );
  const Payment3Lazy = () => (
    <Suspense fallback={renderLoader()}>
      <Payment3 />
    </Suspense>
  );
  return (
    <PaymentsContext.Provider
      value={{ billingInfo, setBillingInfo, paymentMethod, setPaymentMethod, paymentURL }}
    >
      <div className='site__page'>
        {paymentURL === '/payments/' && <h1 className='primary-title'>Premium Subscription</h1>}
        {paymentURL === '/payments/update/' && <h1 className='primary-title'>Update Billing</h1>}
        {subPageId === '1' && <Payment1Lazy />}
        {subPageId === '2' && <Payment2Lazy />}
        {subPageId === '3' && <Payment3Lazy />}
      </div>
    </PaymentsContext.Provider>
  );
}

// 1 = billing information
// 2 = payment method
// 3 = confirm
