import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ClientForm({ setShowForm }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthYear, setBirthYear] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    // const user = await dispatch(
    //   updateUser(
    //     sessionUser.id,
    //     firstName,
    //     lastName,
    //     birthYear,
    //     lic,
    //     pxName,
    //     phone
    //   )
    // );
    // if (!user.errors) {
    //   console.log('updated');
    //   setShowUpdateUser(false);
    // } else {
    //   setErrors(user.errors);
    // }
  };
  return (
    <form className='form user_info__form' onSubmit={onSubmit}>
      <div className='user_info__data'>
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='form__row'>
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className='form__input user_info__input'
          ></input>
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className='form__input user_info__input'
          ></input>
          <input
            name='birthYear'
            type='text'
            placeholder='Birth Year'
            onChange={(e) => setBirthYear(e.target.value)}
            value={birthYear}
            className='form__input user_info__input'
          ></input>
        </div>
      </div>
      <div className='form__row user_info__buttons'>
        <button
          className='primary-button form__button user_info__button'
          type='submit'
        >
          Update
        </button>
        <button
          className='secondary-button form__button user_info__button'
          type='button'
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
