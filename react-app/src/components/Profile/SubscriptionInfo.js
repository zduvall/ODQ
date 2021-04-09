import { useState, useEffect } from 'react';
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

  const [billDate, setBillDate] = useState('loading...');
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const { brand, last4, expMonth, expYear, stripeSubId } = sessionUser.customer;

  const handleUnsubscribe = () => {
    dispatch(cancelSubscription(sessionUser.id, stripeSubId));
  };

  useEffect(() => {
    if (sessionUser.subType) {
      async function getBillingDate() {
        const res = await fetch(`/api/payments/get-bill-date/${stripeSubId}`);
        return res.json();
      }
      setBillDate(getBillingDate());
    }
  }, [sessionUser, stripeSubId]);

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
      <div className='site__sub-section__data sml-scrn-lft-align'>
        <p>
          <span className='underline bold'>Account type</span>:{' '}
          <span className='primary-text'>
            {!!sessionUser.subType ? (
              <>
                Premium Subscription{' '}
                <i
                  title={'As a subscribing user, you have access to all tests.'}
                  className='fas fa-medal medal-w-title primary-title'
                ></i>
              </>
            ) : (
              'Free Account'
            )}
          </span>
        </p>

        <p>
          <span className='underline'>Access</span>:{' '}
          <span className='tertiary-text'>
            {!!sessionUser.subType
              ? 'all tests in eDOT database.'
              : 'free tests in eDOT database'}
          </span>
        </p>

        <p>
          <span className='underline'>Billing</span>:{' '}
          <span className='tertiary-text'>
            {!!sessionUser.subType ? (
              <>
                {`$7.99 monthly, 
          ${
            brand.charAt(0).toUpperCase() + brand.slice(1)
          } (***${last4}, exp: ${expMonth}/${expYear
                  .toString()
                  .slice(2)})`}{' '}
              </>
            ) : (
              'none'
            )}
          </span>
        </p>

        {!sessionUser.subType && (
          <p className='tertiary-text' style={{ fontSize: '0.9rem' }}>
            (Subscribe for $7.99 / month to access all tests)
          </p>
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
