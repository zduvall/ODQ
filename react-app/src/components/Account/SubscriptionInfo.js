import { useState, useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { updateNextBillDate } from '../../store/session';

// import component
// import ModalConfirmButton from '../ModalConfirmButton';
import LoadingNotFoundInvalid from '../../components/LoadingNotFoundInvalid';
const ModalConfirmButton = lazy(() => import('../ModalConfirmButton'));

export default function SubscriptionInfo() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const { brand, last4, expMonth, expYear, stripeSubId, nextBillDate } =
    sessionUser.customer || {}; // in case there isn't a customer attached yet.

  const handleUnsubscribe = () => {
    history.push('/unsubscribe');
  };

  useEffect(() => {
    // if (sessionUser.subType && new Date(nextBillDate) < new Date()) {
      dispatch(updateNextBillDate(stripeSubId));
    // }
  }, [dispatch, sessionUser.subType, stripeSubId, nextBillDate]);

  // ------ lazy components ------
  const renderLoader = () => (
    <LoadingNotFoundInvalid message={'Loading eDOT...'} />
  );

  const ModalConfirmButtonLazy = () => (
    <Suspense fallback={renderLoader()}>
      <ModalConfirmButton
        showModal={showUnsubscribeModal}
        setShowModal={setShowUnsubscribeModal}
        proceedAction={handleUnsubscribe}
        message={
          'Are you sure you would like to unsubscribe? You will still have access to previous premium test results, but premium tests will no longer be available for future use.'
        }
      />
    </Suspense>
  );

  return (
    <div className='site__sub-section'>
      <ModalConfirmButtonLazy />
      <div className='site__sub-section__data subscription-container'>
        <div className='lft-align'>
          <p>
            <span className='underline bold'>Type</span>:{' '}
            <span className='primary-text'>
              {!!sessionUser.subType ? (
                <>
                  Premium Subscription{' '}
                  <i
                    title={
                      'Premium test. As a subscribing user, you have access to all tests.'
                    }
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
                  {brand.charAt(0).toUpperCase() + brand.slice(1)} (***{last4},
                  exp: {expMonth}/{expYear.toString().slice(2)})
                </>
              ) : (
                'none'
              )}
            </span>
          </p>

          {!sessionUser.subType && (
            <p className='tertiary-text' style={{ fontSize: '0.9rem' }}>
              (Subscribe for $3.99 / month to access all tests)
            </p>
          )}
          {!!sessionUser.subType && (
            <p>
              <span className='underline'>Next Payment</span>:{' '}
              <span className='tertiary-text'>
                $3.99 on {new Date(nextBillDate).toLocaleDateString()}
              </span>
            </p>
          )}
        </div>
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        {!sessionUser.subType && (
          <button
            className='primary-button dashboard__button'
            onClick={() => history.push('/payments/1')}
            disabled={process.env.NODE_ENV === 'production'}
            title={
              process.env.NODE_ENV === 'production'
                ? 'Subscription ability coming soon'
                : ''
            }
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
