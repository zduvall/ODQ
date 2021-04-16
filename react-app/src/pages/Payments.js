import {
  useState,
  useContext,
  createContext,
  useEffect,
  lazy,
  Suspense,
} from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// import css
import '../components/Payments/Payments.css';

// // import components
import Payment1 from '../components/Payments/Payment1';
import Payment2 from '../components/Payments/Payment2';
import Payment3 from '../components/Payments/Payment3';
// import LoadingNotFoundInvalid from '../components/LoadingNotFoundInvalid';
// const Payment1 = lazy(() => import('../components/Payments/Payment1'));
// const Payment2 = lazy(() => import('../components/Payments/Payment2'));
// const Payment3 = lazy(() => import('../components/Payments/Payment3'));

const PaymentsContext = createContext();
export const usePaymentsContext = () => useContext(PaymentsContext);

export default function Payments() {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const { subPageId } = useParams('subPageId');

  const [billingInfo, setBillingInfo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // redirect to account page if try to access payments page while already subscribed
  useEffect(() => {
    if (sessionUser.subType || process.env.NODE_ENV === 'production')
      history.push('/account');
  }, [sessionUser, history]);

  // // ------ lazy components ------
  // const renderLoader = () => (
  //   <LoadingNotFoundInvalid message={'Loading eDOT...'} />
  // );

  // const Payment1Lazy = () => (
  //   <Suspense fallback={renderLoader()}>
  //     <Payment1 />
  //   </Suspense>
  // );
  // const Payment2Lazy = () => (
  //   <Suspense fallback={renderLoader()}>
  //     <Payment2 />
  //   </Suspense>
  // );
  // const Payment3Lazy = () => (
  //   <Suspense fallback={renderLoader()}>
  //     <Payment3 />
  //   </Suspense>
  // );
  return (
    <PaymentsContext.Provider
      value={{ billingInfo, setBillingInfo, paymentMethod, setPaymentMethod }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>Premium Subscription</h1>
        {/* {subPageId === '1' && <Payment1Lazy />}
        {subPageId === '2' && <Payment2Lazy />}
        {subPageId === '3' && <Payment3Lazy />} */}
        {subPageId === '1' && <Payment1 />}
        {subPageId === '2' && <Payment2 />}
        {subPageId === '3' && <Payment3 />}
        <div className='one1rem-ht' />
      </div>
    </PaymentsContext.Provider>
  );
}

// 1 = billing information
// 2 = payment method
// 3 = confirm
