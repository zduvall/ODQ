import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunks
import { deleteUser } from '../../../store/session';

// import css
import '../Dashboard.css';

export default function UserInfoData({ setShowUpdateUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const { firstName, lastName, lic, pxName, phone, email } = sessionUser;

  const handleDelete = () => {
    const confirm = window.confirm(
      'Are you sure you want to deactivate your account? All associated data will be deleted.'
    );
    if (confirm) {
      dispatch(deleteUser(sessionUser.id));
      history.push('/');
    }
  };

  return (
    <div className='user_info'>
      <div className='user_info__data'>
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
      <div className='user_info__buttons'>
        <button
          className='primary-button user_info__button'
          onClick={() => setShowUpdateUser((prev) => !prev)}
        >
          Update
        </button>
        <button
          className='delete-button user_info__button'
          onClick={handleDelete}
        >
          Deactivate
        </button>
      </div>
    </div>
  );
}