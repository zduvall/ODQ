import { useHistory } from 'react-router-dom';

export default function SubscribeButton() {
  const history = useHistory();
  return (
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
  );
}
