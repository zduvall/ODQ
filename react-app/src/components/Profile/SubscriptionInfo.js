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

  const { brand, last4, expMonth, expYear } = sessionUser.customer;

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
          <span className='underline'>Account type</span>:{' '}
          <span className='primary-title bold'>
            {!!sessionUser.subType ? 'Premium Subscription' : 'Free Account'}
          </span>
        </p>
        {!sessionUser.subType && (
          <>
            <p>Subscribe to have access to all eDOT tests.</p>
            <p>$7.99 billed monthly</p>
          </>
        )}
        {!!sessionUser.subType && (
          <>
            <p>Premium subscription allows to all eDOT tests.</p>
            <p>
              Billing: $7.99 monthly,{' '}
              {brand.charAt(0).toUpperCase() + brand.slice(1)} (***
              {last4}, exp: {expMonth}/{expYear})
            </p>
          </>
        )}
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        {!sessionUser.subType && (
          <button
            className='primary-button dashboard__button'
            onClick={() => history.push('/payments/1')}
          >
            Subscribe
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
