import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { deleteUser, cancelSubscription } from '../../store/session';

// import component
import ModalConfirmButton from '../ModalConfirmButton';

// import css
import './User.css';

export default function UserInfoData({ setShowUpdateUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const {
    firstName,
    lastName,
    lic,
    pxName,
    phone,
    email,
    subType,
  } = sessionUser;

  const handleDeactivate = () => {
    dispatch(deleteUser(sessionUser.id));
    history.push('/');
  };

  const handleUnsubscribe = () => {
    dispatch(cancelSubscription(sessionUser.id, sessionUser.customer.stripeSubId));
  };

  return (
    <div className='site__sub-section user__info'>
      <ModalConfirmButton
        showModal={showDeactivateModal}
        setShowModal={setShowDeactivateModal}
        proceedAction={handleDeactivate}
        message={
          'Are you sure you want to deactivate your account? All associated data will be deleted.'
        }
      />
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
          {firstName} {lastName}
          {lic ? `, ${lic}` : ''}{' '}
          {subType ? (
            <i
              title={'As a subscribing user, you have access to all tests.'}
              className='fas fa-medal medal-w-title primary-title'
            ></i>
          ) : (
            ''
          )}
        </p>
        <p>{pxName}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p className='add-data-prompt'>
          {!pxName || !phone || !email
            ? '(Incomplete profile, please update)'
            : ''}
        </p>
        <p>Account type: {!!sessionUser.subType ? 'Premium Subscription': 'Free Account'}</p>
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        <button
          className='secondary-button dashboard__button'
          onClick={() => setShowUpdateUser((prev) => !prev)}
        >
          Update
        </button>
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
        <button
          className='delete-button dashboard__button'
          onClick={() => setShowDeactivateModal(true)}
        >
          Deactivate
        </button>
      </div>
    </div>
  );
}
