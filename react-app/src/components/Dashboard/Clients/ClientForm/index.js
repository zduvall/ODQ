import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createClient } from '../../../../store/clients';

export default function ClientForm({ setShowForm, clientToUpdate = null }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthYear, setBirthYear] = useState();
  const [curClient, setCurClient] = useState();

  useEffect(() => {
    if (!!clientToUpdate) {
      setBirthYear(clientToUpdate.birthYear);
      setCurClient(clientToUpdate.curClient);
    }
  }, [clientToUpdate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const date = new Date();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getYear().toString().slice(-2);
    const dateCode = month + '.' + day + '.' + year;
    const code = firstName.slice(0, 3) + lastName.slice(0, 1) + '-' + dateCode;

    const client = { code, birthYear, curClient };
    console.log(client);

    // const user = await dispatch(createClient(client));
    // if (!user.errors) {
    //   console.log('updated');
    //   setShowForm(false);
    // } else {
    //   setErrors(user.errors);
    // }
  };
  return (
    <form className='form dashboard__form' onSubmit={onSubmit}>
      <div className='dashboard__data'>
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
            className='form__input dashboard__input'
          ></input>
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className='form__input dashboard__input'
          ></input>
        </div>
        <div className='form__row'>
          <input
            name='birthYear'
            type='text'
            placeholder='Birth Year'
            onChange={(e) => setBirthYear(e.target.value)}
            value={birthYear}
            className='form__input dashboard__input'
          ></input>
          <select
            name='curClient'
            onChange={(e) => setCurClient(e.target.value)}
            value={curClient}
            className='form__input dashboard__input'
          >
            <option disabled selected value=''>
              Status
            </option>
            <option value={true}>Active</option>
            <option vaoue={false}>Terminated</option>
          </select>
        </div>
      </div>
      <div className='form__row dashboard__buttons'>
        <button
          className='primary-button form__button dashboard__button'
          type='submit'
        >
          Create
        </button>
        <button
          className='secondary-button form__button dashboard__button'
          type='button'
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
