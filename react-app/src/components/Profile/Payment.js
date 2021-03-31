import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// stripe imports
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// local stripe utils
import { createCustomer } from '../../services/stripeUtils';

export default function Payment({ setShowPayment, handleToggleSubscribe }) {
  // stripe
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState(
    `${sessionUser.firstName} ${sessionUser.lastName}`
  );
  const [email, setEmail] = useState(sessionUser.email);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const [isProcessing, setProcessingTo] = useState();

  async function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const billingDetails = {
      name,
      email,
      city,
      line1: address,
      state,
      country,
      postal_code: zip,
      userId: sessionUser.id,
    };

    // setProcessingTo(true);

    const res = await fetch('/api/payments/create-customer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(billingDetails),
    });

    const customer = await res.json();

    if (!customer.errors) {
      // handleToggleSubscribe(true);
      console.log(customer);
    } else {
      setErrors(customer.errors);
    }

    // createCustomer(billingDetails.address);

    // const cardElement = elements.getElement('card');

    // try {
    //   // const { data: clientSecret } = await axios.post('/api/payment_intents', {
    //   //   amount: price * 100,
    //   // });

    //   const res = await fetch(`/api/payment_intents`, {
    //     // not sure if this is formatted right; guessed based on the axios example
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ amount: 100 }),
    //   });

    //   const { data: clientSecret } = await res.json();

    //   const paymentMethodReq = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: cardElement,
    //     billing_details: billingDetails,
    //   });

    //   if (paymentMethodReq.error) {
    //     setErrors(paymentMethodReq.error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   const { error } = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: paymentMethodReq.paymentMethod.id,
    //   });

    //   if (error) {
    //     setErrors(error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   // onSuccessfulCheckout();
    // } catch (err) {
    //   setErrors(err.message);
    // }
    // console.log(billingDetails);
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '1.2rem',
        backgroundColor: 'white',
        '::placeholder': {
          fontSize: '1.2rem',
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
    <div className='site__sub-section form-container'>
      <h2 className='tertiary-title cntr-txt-sml-margin'>
        Access all tests - $5 per month
      </h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='site__sub-section__data'>
          <div className='errors-container'>
            {errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <div className='form__row'>
            <input
              name='name'
              type='text'
              placeholder='Full name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='form__input'
            ></input>
            <input
              name='email'
              type='text'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='form__input'
            ></input>
          </div>
          <div className='form__row'>
            <input
              name='address'
              type='text'
              placeholder='Address'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className='form__input'
            ></input>
          </div>
          <div className='form__row'>
            <input
              name='city'
              type='text'
              placeholder='City'
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className='form__input'
            ></input>
            <input
              name='state'
              type='text'
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
              value={state}
              className='form__input'
            ></input>
          </div>
          <div className='form__row'>
            <input
              name='country'
              type='text'
              placeholder='Country'
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className='form__input'
            ></input>
            <input
              name='zip'
              type='number'
              placeholder='Zip'
              onChange={(e) => setZip(e.target.value)}
              value={zip}
              className='form__input'
            ></input>
          </div>
          <div className='form-row payment-row'>
            {/* <div className='payment-input'> */}
            <CardElement options={cardElementOptions} />
            {/* </div> */}
          </div>
        </div>
        <div className='form__row buttons-grp-colLrg-rowSml'>
          <button
            className='primary-button form__button dashboard__button'
            type='submit'
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Subscribe'}
          </button>
          <button
            className='secondary-button form__button dashboard__button'
            type='button'
            onClick={() => setShowPayment(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
