import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { togglePremium } from '../store/session';

// import components
import Profile from '../components/Profile';
import Payment from '../components/Profile/Payment';

export default function User() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleToggleSubscribe = async (newPremium = !sessionUser.premium) => {
    await dispatch(togglePremium(sessionUser.id, newPremium));
  };

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
            <Payment
              setShowPayment={setShowPayment}
              handleToggleSubscribe={handleToggleSubscribe}
            />
          </>
        )}
      </div>
      <div className='one1rem-ht' />
    </div>
  );
}
