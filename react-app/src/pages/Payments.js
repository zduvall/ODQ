import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { togglePremium } from '../store/session';

// import components
import Payment from '../components/Profile/Payment';

export default function Payments() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleToggleSubscribe = async (newPremium = !sessionUser.premium) => {
    await dispatch(togglePremium(sessionUser.id, newPremium));
  };

  return (
    <div>
      <div className='site__page'>
        <Payment />
      </div>
      <div className='one1rem-ht' />
    </div>
  );
}
