import { useState, useContext, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// import components
import Payment1 from '../components/Payments/Payment1';
import Payment2 from '../components/Payments/Payment2';
import Payment3 from '../components/Payments/Payment3';

// import css
import '../components/Payments/Payments.css';

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

  return (
    <PaymentsContext.Provider
      value={{ billingInfo, setBillingInfo, paymentMethod, setPaymentMethod }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>Premium Subscription</h1>
        {/* <div className='site__sub-section form-container'> */}
        {subPageId === '1' && <Payment1 />}
        {subPageId === '2' && <Payment2 />}
        {subPageId === '3' && <Payment3 />}
        {/* </div> */}
        <div className='one1rem-ht' />
      </div>
    </PaymentsContext.Provider>
  );
}

// 0 = subscription details with pics
// 1 = billing information
// 2 = payment method
// 3 = confirm
