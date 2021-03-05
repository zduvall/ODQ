import UserInfoData from './UserInfoData';
import UserInfoForm from './UserInfoForm';

export default function UserInfo({ showUpdateUser, setShowUpdateUser }) {
  if (showUpdateUser) {
    return <UserInfoForm setShowUpdateUser={setShowUpdateUser} />;
  } else {
    return <UserInfoData setShowUpdateUser={setShowUpdateUser} />;
  }
}
