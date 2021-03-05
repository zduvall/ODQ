import { useState } from 'react';

// import components
import UserInfo from './UserInfo/index.js';

export default function Dashboard() {
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <div>
      <div className='dashboard'>
        <h1 className='primary-title'>User Information</h1>
        <UserInfo
          showUpdateUser={showUpdateUser}
          setShowUpdateUser={setShowUpdateUser}
        />
      </div>
      <div>
        <h1 className='primary-title'>Clients</h1>
      </div>
      <div>
        <h1 className='primary-title'>Favorite Tests</h1>
      </div>
    </div>
  );
}
