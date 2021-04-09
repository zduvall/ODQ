import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { cancelSubscription } from '../../store/session';

// import component
import ModalConfirmButton from '../ModalConfirmButton';

export default function SubscriptionInfo() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const handleUnsubscribe = () => {
    dispatch(
      cancelSubscription(sessionUser.id, sessionUser.customer.stripeSubId)
    );
  };

  return (
    <div className='site__sub-section'>
      <ModalConfirmButton
        showModal={showUnsubscribeModal}
        setShowModal={setShowUnsubscribeModal}
        proceedAction={handleUnsubscribe}
        message={
          'Are you sure you would like to unsubscribe? Premium tests will no longer be accessible.'
        }
      />
      <div className='site__sub-section__data'>
        <p>
          Account type:{' '}
          {!!sessionUser.subType ? 'Premium Subscription' : 'Free Account'}
        </p>
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        {!sessionUser.subType && (
          <button
            className='primary-button dashboard__button'
            onClick={() => history.push('/payments/1')}
          >
            Premium
          </button>
        )}
        {!!sessionUser.subType && (
          <button
            className='delete-button dashboard__button'
            onClick={() => setShowUnsubscribeModal(true)}
          >
            Unsubscribe
          </button>
        )}
      </div>
    </div>
  );
}
