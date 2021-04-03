import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import context
import { usePaymentsContext } from '../../pages/Payments';

// stripe imports
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function Payment1() {
  const history = useHistory();

  const { billingInfo, setPaymentMethod } = usePaymentsContext();

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  const [errors, setErrors] = useState([]);
  const [isProcessing, setProcessingTo] = useState();

  const cardElement = elements.getElement('card');

  async function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setProcessingTo(true);

    // // start from $6 here: https://stripe.com/docs/billing/subscriptions/fixed-price#create-customer
    // // also remember to use if !errors.length somewhere before and/or inbetween payment and customer or other way around

    const paymentMethodRes = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        address: billingInfo.address,
        email: billingInfo.email,
        name: billingInfo.name,
      },
    });

    if (!paymentMethodRes.errors) {
      setPaymentMethod(paymentMethodRes);
      history.push('/payments/3');
    } else {
      setProcessingTo(false);
      setErrors(paymentMethodRes.errors);
    }
  }

  useEffect(() => {
    if (!billingInfo) history.push('/payments/1');
  }, [billingInfo, history]);

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '17px',
        backgroundColor: 'white',
        '::placeholder': {
          fontSize: '17px',
        },
      },
      invalid: {
        color: 'rgb(173, 0, 0)',
        iconColor: 'rgb(173, 0, 0)',
      },
      complete: {},
    },
    hidePostalCode: true, // maybe not needed
  };

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
          <div className='form-row payment-row'>
            <CardElement
              options={cardElementOptions}
              onChange={(e) => setErrors(e.error ? [e.error.message] : [])}
            />
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
