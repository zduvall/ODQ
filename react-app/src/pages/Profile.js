import { useState } from 'react';

// import components
import Profile from '../components/Profile';
import SubscriptionInfo from '../components/Profile/SubscriptionInfo';

export default function User() {
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <div className='site__page'>
      <h1 className='primary-title'>Account</h1>
      <Profile
        showUpdateUser={showUpdateUser}
        setShowUpdateUser={setShowUpdateUser}
      />
      <div className='one1rem-ht'/>
      <SubscriptionInfo />
    </div>
  );
}
