import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Payment({ setShowPayment }) {
  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState(
    `${sessionUser.firstName} ${sessionUser.lastName}`
  );
  const [email, setEmail] = useState(sessionUser.email);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const data = { email, address, city, state, zip };

    console.log(data);
  }
  return (
    <div className='site__sub-section form-container'>
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
              placeholder='Name'
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
          </div>
          <div className='form__row'>
            <input
              name='state'
              type='text'
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
              value={state}
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
        </div>
        <div className='form__row buttons-grp-colLrg-rowSml'>
          <button
            className='primary-button form__button dashboard__button'
            type='submit'
          >
            Subscribe
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
