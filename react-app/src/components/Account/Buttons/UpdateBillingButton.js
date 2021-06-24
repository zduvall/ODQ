import {useHistory} from 'react-router-dom'

export default function UpdateBillingButton() {
  const history = useHistory();
  return (
    <button
      className='secondary-button dashboard__button'
      onClick={() => history.push('/payments/update/1')}
    >
      Update Billing
    </button>
  );
}
