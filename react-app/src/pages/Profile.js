import { useState } from 'react';

// import components
import Profile from '../components/Profile';
import Payment from '../components/Profile/Payment';

export default function User() {
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div>
      <div className='site__page'>
        <h1 className='primary-title'>Profile</h1>
        <Profile
          showUpdateUser={showUpdateUser}
          setShowUpdateUser={setShowUpdateUser}
          setShowPayment={setShowPayment}
        />
        {showPayment && (
          <>
            <div className='one1rem-ht' />
            <Payment setShowPayment={setShowPayment} />
          </>
        )}
      </div>
      <div className='one1rem-ht' />
    </div>
  );
}
