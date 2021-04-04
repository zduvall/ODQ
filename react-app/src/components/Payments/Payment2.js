import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import context
import { usePaymentsContext } from '../../pages/Payments';

// import thunk
import { addPaymentMethod } from '../../store/session';

// stripe imports
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function Payment1() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const { billingInfo, setPaymentMethod } = usePaymentsContext();

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  const [errors, setErrors] = useState([]);
  const [isProcessing, setProcessingTo] = useState();

  async function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setProcessingTo(true);

    if (cardElement) {
      const paymentMethodRes = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          address: billingInfo.address,
          email: billingInfo.email,
          name: billingInfo.name,
        },
      });

      console.log('payment method', paymentMethodRes);

      if (!paymentMethodRes.error) {
        const {
          brand,
          last4,
          exp_month,
          exp_year,
        } = paymentMethodRes.paymentMethod.card;
        dispatch(
          addPaymentMethod(sessionUser.id, brand, last4, exp_month, exp_year)
        );
        // maybe just put the payment method in here below, b/c everything else will be on the sessionUser.customer
        setPaymentMethod(paymentMethodRes);

        history.push('/payments/3');
      } else {
        setProcessingTo(false);
        setErrors([paymentMethodRes.error.message]);
      }
    } else {
      setProcessingTo(false);
      setErrors(['Card informoation cannot be empty.']);
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

  if (!elements) return null;

  const cardElement = elements.getElement('card');

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
            {isProcessing && !errors.length ? 'Processing...' : 'Next'}
          </button>
          <button
            className='secondary-button form__button dashboard__button'
            type='button'
            onClick={() => history.push('/payments/1')}
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
