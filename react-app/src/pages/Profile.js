import { useState } from 'react';

// import components
import Profile from '../components/Profile';

export default function User() {
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <div>
      <div className='site__page'>
        <h1 className='primary-title'>Profile</h1>
        <Profile
          showUpdateUser={showUpdateUser}
          setShowUpdateUser={setShowUpdateUser}
        />
      </div>
      <div className='one1rem-ht' />
    </div>
  );
}
