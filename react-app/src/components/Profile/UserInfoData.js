import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { deleteUser } from '../../store/session';

// import component
import ModalConfirmButton from '../ModalConfirmButton';

// import css
import './User.css';

export default function UserInfoData({ setShowUpdateUser, setShowPayment }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showModal, setShowModal] = useState(false);

  const {
    firstName,
    lastName,
    lic,
    pxName,
    phone,
    email,
    premium,
  } = sessionUser;

  const handleDeactivate = () => {
    dispatch(deleteUser(sessionUser.id));
    history.push('/');
  };

  return (
    <div className='site__sub-section user__info'>
      <ModalConfirmButton
        showModal={showModal}
        setShowModal={setShowModal}
        proceedAction={handleDeactivate}
        message={
          'Are you sure you want to deactivate your account? All associated data will be deleted.'
        }
      />
      <div className='site__sub-section__data'>
        <p>
          {firstName} {lastName}
          {lic ? `, ${lic}` : ''}{' '}
          {premium ? (
            <i
              title={'As a subscribing user, you have access to all tests!'}
              class='fas fa-medal medal-w-title primary-title'
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
      </div>
      <div className='buttons-grp-colLrg-rowSml'>
        <button
          className='primary-button dashboard__button'
          onClick={() => setShowPayment((prev) => !prev)}
        >
          Premium
        </button>
        <button
          className='secondary-button dashboard__button'
          onClick={() => setShowUpdateUser((prev) => !prev)}
        >
          Update
        </button>
        <button
          className='delete-button dashboard__button'
          onClick={() => setShowModal(true)}
        >
          Deactivate
        </button>
      </div>
    </div>
  );
}
