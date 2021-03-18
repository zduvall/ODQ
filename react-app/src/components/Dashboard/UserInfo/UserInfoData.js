import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { deleteUser } from '../../../store/session';

// import component
import ModalConfirmButton from '../../ModalConfirmButton';

// import css
import '../Dashboard.css';

export default function UserInfoData({ setShowUpdateUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showModal, setShowModal] = useState(false);

  const { firstName, lastName, lic, pxName, phone, email } = sessionUser;

  const handleDeactivate = () => {
    setShowModal(true);
    // const confirm = window.confirm(
    //   'Are you sure you want to deactivate your account? All associated data will be deleted.'
    // );
    // if (confirm) {
    //   dispatch(deleteUser(sessionUser.id));
    //   history.push('/');
    // }
  };

  return (
    <div className='site__sub-section user__info'>
      {showModal && (
        <ModalConfirmButton
          showModal={showModal}
          setShowModal={setShowModal}
          message={
            'Are you sure you want to deactivate your account? All associated data will be deleted.'
          }
        />
      )}
      <div className='site__sub-section__data'>
        <p>
          {firstName} {lastName}
          {lic ? `, ${lic}` : ''}
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
      <div className='dashboard__buttons'>
        <button
          className='primary-button dashboard__button'
          onClick={() => setShowUpdateUser((prev) => !prev)}
        >
          Update
        </button>
        <button
          className='delete-button dashboard__button'
          onClick={handleDeactivate}
        >
          Deactivate
        </button>
      </div>
    </div>
  );
}
