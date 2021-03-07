import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { createClient } from '../../../../store/clients';

//import context
import { useClientsContext } from '../index';

export default function ClientForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const { setShowForm, clientToUpdate } = useClientsContext();

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

    const client = { userId: sessionUser.id, code, birthYear, curClient };

    const user = await dispatch(
      !!clientToUpdate
        ? createClient(client, clientToUpdate.id) // if you pass in a client id, it updates instead
        : createClient(client)
    );

    if (!user.errors) {
      console.log('updated');
      setShowForm(false);
    } else {
      setErrors(user.errors);
    }
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
            defaultValue=''
            className='form__input dashboard__input'
          >
            <option disabled value=''>
              - Status -
            </option>
            <option value={true}>Active</option>
            <option value={false}>Terminated</option>
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
