import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function UserInfo({ setShowUpdateUser }) {
  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState(sessionUser.firstName);
  const [lastName, setLastName] = useState(sessionUser.lastName);
  const [email, setEmail] = useState(sessionUser.email);
  const [lic, setLic] = useState(sessionUser.lic);
  const [pxName, setPxName] = useState(sessionUser.pxName);
  const [phone, setPhone] = useState(sessionUser.phone);

  return (
    <div>
      <form className='auth-form'>
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
          <input
            name='phone'
            type='text'
            placeholder='Phone'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className='auth-form__input'
          ></input>
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
