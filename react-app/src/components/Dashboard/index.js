import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunks
import { getClients } from '../../store/clients';

// import components
import UserInfo from './UserInfo/index.js';
import Clients from './Clients';

export default function Dashboard() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  useEffect(() => {
    dispatch(getClients(sessionUser.id));
  }, [dispatch, sessionUser]);

  return (
    <div>
      <div className='dashboard'>
        <h1 className='primary-title'>User Information</h1>
        <UserInfo
          showUpdateUser={showUpdateUser}
          setShowUpdateUser={setShowUpdateUser}
        />
        <h1 className='primary-title'>Clients</h1>
        <Clients />
      </div>
      <div>
        <h1 className='primary-title'>Favorite Tests</h1>
      </div>
    </div>
  );
}
