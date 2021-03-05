import { useSelector } from 'react-redux';

export default function UserInfoData({ setShowUpdateUser }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className='user_info'>
      <div className='user_info__data'>
        <p>
          {sessionUser.firstName} {sessionUser.lastName}{' '}
          {sessionUser.lic ? `, ${sessionUser.lic}` : ''}
        </p>
        <p>{sessionUser.pxName}</p>
        <p>{sessionUser.phone}</p>
        <p>{sessionUser.email}</p>
      </div>
      <div className='user_info__button'>
        <button className='primary-button user_info__button' onClick={() => setShowUpdateUser((prev) => !prev)}>
          Update
        </button>
      </div>
    </div>
  );
}
