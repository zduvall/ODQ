import { useSelector } from 'react-redux';

export default function PremiumBadge() {
  const subType = useSelector((state) => state.session.user?.subType) || 0;

  return (
    <i
      title={
        subType
          ? 'As a subscribing user, you have access to premium tests.'
          : 'Subscribing users have access to premium tests'
      }
      className='fas fa-medal medal-w-title'
    ></i>
  );
}
