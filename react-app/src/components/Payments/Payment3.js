import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import thunk
import { togglePremium } from '../../store/session';

// import context
import { usePaymentsContext } from '../../pages/Payments';

// local stripe utils
// import { createCustomer } from '../../services/stripeUtils'; // maybe use this!!!!!!!!!!!!!!!!!!!!!

export default function Payment1() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { billingInfo, paymentMethod } = usePaymentsContext();

  const [errors, setErrors] = useState([]);
  const [isProcessing, setProcessingTo] = useState();

  async function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setProcessingTo(true);
  }

  useEffect(() => {
    if (!billingInfo || !paymentMethod) history.push('/payments/1');
  }, [billingInfo, paymentMethod, history]);

  return (
    <>
      <h2 className='tertiary-title cntr-txt-sml-margin'>Payment Method</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='site__sub-section__data'>
          <div className='errors-container'>
            {errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
        </div>
        <div className='form__row buttons-grp-colLrg-rowSml'>
          <button
            className='primary-button form__button dashboard__button'
            type='submit'
            disabled={isProcessing || errors.length}
          >
            {isProcessing && !errors.length ? 'Processing...' : 'Subscribe'}
          </button>
          <button
            className='secondary-button form__button dashboard__button'
            type='button'
            onClick={() => history.push('/profile')}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
