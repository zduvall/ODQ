import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import telephone input packages
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

// import thunks
import { updateUser } from '../../../store/session';

export default function UserInfo({ setShowUpdateUser }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState(sessionUser.firstName);
  const [lastName, setLastName] = useState(sessionUser.lastName);
  const [email, setEmail] = useState(sessionUser.email);
  const [lic, setLic] = useState(sessionUser.lic || '');
  const [pxName, setPxName] = useState(sessionUser.pxName || '');
  const [phone, setPhone] = useState(sessionUser.phone || '');

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w?/;
    if (!validEmail.test(email)) {
      setErrors((prevErrors) => [
        ...prevErrors,
        'Please ensure email is valid!!!!.',
      ]);
    }

    if (errors.length) {
      setErrors([]); // this is because the set errors is too slow, so I have to reset it before clicking submit again
      return;
    }

    const user = await dispatch(
      updateUser(sessionUser.id, firstName, lastName, email, lic, pxName, phone)
    );
    if (!user.errors) {
      console.log('updated');
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div>
      <form className='auth-form' onSubmit={onSubmit}>
        Form!!
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='auth-form__row'>
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className='auth-form__input'
          ></input>
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className='auth-form__input'
          ></input>
          <input
            name='lic'
            type='text'
            placeholder='License'
            onChange={(e) => setLic(e.target.value)}
            value={lic}
            className='auth-form__input'
          ></input>
        </div>
        <div className='auth-form__row'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='auth-form__input'
          ></input>
          {/* </div>
        <div className='auth-form__row'> */}
          <PhoneInput
            name='phone'
            // type='text'
            placeholder='Phone number'
            onChange={setPhone}
            value={phone}
            className='auth-form__input'
            defaultCountry='US'
          ></PhoneInput>
        </div>
        <div className='auth-form__row'>
          <input
            name='pxName'
            type='text'
            placeholder='PxName'
            onChange={(e) => setPxName(e.target.value)}
            value={pxName}
            className='auth-form__input'
          ></input>
        </div>
        <div className='auth-form__row'>
          <button className='button-primary auth-button' type='submit'>
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
}
