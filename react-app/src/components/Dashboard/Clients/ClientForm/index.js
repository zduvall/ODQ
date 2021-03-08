import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { createClient, deleteClient } from '../../../../store/clients';

//import context
import { useClientsContext } from '../index';

export default function ClientForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const clients = useSelector((state) => Object.values(state.clients));

  const {
    setShowForm,
    setClientToUpdate,
    clientToUpdate,
  } = useClientsContext();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthYear, setBirthYear] = useState();
  const [curClient, setCurClient] = useState();

  useEffect(() => {
    if (!!clientToUpdate) {
      let { code, birthYear, curClient } = clientToUpdate;
      setFirstName(code.slice(0, 3));
      setLastName(code.slice(3, code.indexOf('-')));
      setBirthYear(birthYear);
      setCurClient(curClient);
    }
  }, [clientToUpdate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    let errorHit = false;

    if (!firstName || !lastName || !birthYear) {
      setErrors([...errors, 'Please fill out all fields']);
      errorHit = true;
    }

    if (errorHit) return;

    const date = new Date();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getYear().toString().slice(-2);
    const dateCode = month + '.' + day + '.' + year;
    const fn = (firstName + '__').slice(0, 3);
    const ln = lastName.slice(0, 1).toUpperCase();
    let code = fn + ln + '-' + dateCode;

    let dup = true;

    while (dup) {
      dup = false;
      /* eslint-disable no-loop-func */
      clients.forEach((client) => {
        if (clientToUpdate && clientToUpdate.id === client.id) return;
        if (client.code.startsWith(code.slice(0, code.indexOf('-')))) {
          dup = true;
        }
      });
      /* eslint-enable */
      if (dup) {
        let numToInc = code[code.indexOf('-') - 1];
        if (Number(numToInc)) numToInc++;
        else numToInc = 2;
        code = fn + ln + numToInc.toString() + '-' + dateCode;
      }
    }

    const client = { userId: sessionUser.id, code, birthYear, curClient };

    const user = await dispatch(
      !!clientToUpdate
        ? createClient(client, clientToUpdate.id) // if you pass in a client id, it updates instead
        : createClient(client)
    );

    if (!user.errors) {
      console.log('updated');
      setShowForm(false);
      setClientToUpdate(null);
    } else {
      setErrors(user.errors);
    }
  };

  const onDelete = async () => {
    const remove = window.confirm(
      `Are you sure you want to delete ${clientToUpdate.code} and all associated data?`
    );
    if (remove) await dispatch(deleteClient(clientToUpdate.id));
    setShowForm(false);
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
          {clientToUpdate ? 'Update' : 'Create'}
        </button>
        <button
          className='secondary-button form__button dashboard__button'
          type='button'
          onClick={() => {
            setShowForm(false);
            setClientToUpdate(null);
          }}
        >
          Cancel
        </button>
        {clientToUpdate && (
          <button
            className='delete-button form__button dashboard__button'
            type='button'
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
