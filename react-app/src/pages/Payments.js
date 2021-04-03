import { useState, useContext, createContext } from 'react';
import { useParams } from 'react-router-dom';

// import components
import Payment1 from '../components/Payments/Payment1';
import Payment2 from '../components/Payments/Payment2';

const PaymentsContext = createContext();
export const usePaymentsContext = () => useContext(PaymentsContext);

export default function Payments() {
  const { subPageId } = useParams('subPageId');

  const [billingInfo, setBillingInfo] = useState();

  return (
    <PaymentsContext.Provider value={{ billingInfo, setBillingInfo }}>
      <div className='site__page'>
        <h1 className='primary-title'>Premium Subscription</h1>
        <div className='site__page'>
          <div className='site__sub-section form-container'>
            {subPageId === '1' && <Payment1 />}
            {subPageId === '2' && <Payment2 />}
          </div>
        </div>
        <div className='one1rem-ht' />
      </div>
    </PaymentsContext.Provider>
  );
}

// 0 = subscription details with pics
// 1 = billing information
// 2 = payment method
// 3 = confirm
