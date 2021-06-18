import { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import components
import Type from './AccountDetails/Type';
import Access from './AccountDetails/Access';
import Billing from './AccountDetails/Billing';

// import ModalConfirmButton from '../ModalConfirmButton';
import LoadingNotFoundInvalid from '../../components/LoadingNotFoundInvalid';
const ModalConfirmButton = lazy(() => import('../ModalConfirmButton'));

export default function SubscriptionInfo() {
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const { brand, last4, expMonth, expYear, nextBillDate } =
    sessionUser.customer || {}; // in case there isn't a customer attached yet.

  const handleUnsubscribe = () => {
    history.push('/unsubscribe');
  };

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
          <Type subType={sessionUser.subType} />

          <Access subType={sessionUser.subType} />
          <Billing
            subType={sessionUser.subType}
            brand={brand}
            last4={last4}
            expMonth={expMonth}
            expYear={expYear}
          />

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
