import { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import components
import AccountDetails from './AccountDetails';
import SubscribeButton from './Buttons/SubscribeButton';

// import ModalConfirmButton from '../ModalConfirmButton';
import LoadingNotFoundInvalid from '../../components/LoadingNotFoundInvalid';
const ModalConfirmButton = lazy(() => import('../ModalConfirmButton'));

export default function SubscriptionInfo() {
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

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
        <AccountDetails sessionUser={sessionUser} />
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        {!sessionUser.subType && <SubscribeButton />}
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
