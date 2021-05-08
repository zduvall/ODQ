import { useState } from 'react';

// import components
import Account from '../components/Account';
import SubscriptionInfo from '../components/Account/SubscriptionInfo';

export default function User() {
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <div className='site__page'>
      <h1 className='primary-title'>Account</h1>
      <Account
        showUpdateUser={showUpdateUser}
        setShowUpdateUser={setShowUpdateUser}
      />
      <div className='one1rem-ht' />
      <SubscriptionInfo />
    </div>
  );
}
