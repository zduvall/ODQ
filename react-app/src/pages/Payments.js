import { useParams } from 'react-router-dom';

// import components
import Payment1 from '../components/Payments/Payment1';
import Payment2 from '../components/Payments/Payment2';

export default function Payments() {
  const { subPageId } = useParams('subPageId');

  return (
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
  );
}

// 0 = subscription details with pics
// 1 = billing information
// 2 = payment method
// 3 = confirm
