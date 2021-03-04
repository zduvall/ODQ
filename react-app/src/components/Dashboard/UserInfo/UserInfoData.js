import { useSelector } from 'react-redux';

export default function UserInfoData() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <p>
        {sessionUser.firstName} {sessionUser.lastName}{' '}
        {sessionUser.lic ? `, ${sessionUser.lic}` : ''}
      </p>
      <p>{sessionUser.pxName}</p>
      <p>{sessionUser.email}</p>
      <p>{sessionUser.phone}</p>
    </div>
  );
}
