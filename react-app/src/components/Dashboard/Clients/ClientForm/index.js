import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { createClient, deleteClient } from '../../../../store/clients';

// import context
import { useClientsContext } from '../index';

export default function ClientForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const clients = useSelector((state) => Object.values(state.clients));

  const {
    setShowForm,
    setSelectedClient,
    selectedClient,
  } = useClientsContext();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [curClient, setCurClient] = useState('');
  const [createDate, setCreateDate] = useState('');

  // set all fields if selectedClient
  useEffect(() => {
    if (!!selectedClient) {
      let { code, birthYear, curClient } = selectedClient;
      setFirstName(code.slice(0, 3));
      setLastName(code.slice(3, code.indexOf('-')));
      setBirthYear(birthYear);
      setCurClient(curClient);
    }
  }, [selectedClient]);

  // set create date based on selectedClient or today
  useEffect(() => {
    const date = selectedClient
      ? new Date(
          selectedClient.code.slice(selectedClient.code.indexOf('-') + 1)
        )
      : new Date();

    const yr = date.getFullYear();
    let mth = ('0' + (date.getMonth() + 1)).slice(-2);
    let dy = ('0' + date.getDate()).slice(-2);

    const dateToSet = yr + '-' + mth + '-' + dy;

    setCreateDate(dateToSet);
  }, [selectedClient]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    let errorHit = false;

    if (!firstName || !lastName || !birthYear) {
      setErrors([...errors, 'Please fill out all fields']);
      errorHit = true;
    }

    if (errorHit) return;

    // create date part of code based on today (or original creation date when updating)
    const date = new Date(createDate);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate() + 1)).slice(-2);
    const year = date.getYear().toString().slice(-2);
    const dateCode = month + '.' + day + '.' + year;
    // create fn part of code, capitalize first letter, add _ for every letter under length 3
    const fnInputUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const fn = (fnInputUpper + '__').slice(0, 3);
    // create ln part of code
    const ln = lastName.slice(0, 1).toUpperCase();
    let code = fn + ln + '-' + dateCode;

    // make sure the name part of client code isn't already taken
    let dup = true;

    while (dup) {
      dup = false;
      /* eslint-disable no-loop-func */
      clients.forEach((client) => {
        if (selectedClient && selectedClient.id === client.id) return;
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
      !!selectedClient
        ? createClient(client, selectedClient.id) // if you pass in a client id, it updates instead
        : createClient(client)
    );

    if (!user.errors) {
      console.log('updated');
      setShowForm(false);
      setSelectedClient(null);
    } else {
      setErrors(user.errors);
    }
  };

  const onDelete = async () => {
    const remove = window.confirm(
      `Are you sure you want to delete ${selectedClient.code} and all associated data?`
    );
    if (remove) {
      await dispatch(deleteClient(selectedClient.id));
      setShowForm(false);
    }
  };

  return (
    <>
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
              type='number'
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
              <option disabled value=''>
                - Status -
              </option>
              <option value={true}>Active</option>
              <option value={false}>Terminated</option>
            </select>
          </div>
          <div className='form__row'>
            <label className='creation-date-label'>Creation:</label>
            <input
              name='creation-date'
              className='form__input dashboard__input creation-date-input'
              type='date'
              onChange={(e) => setCreateDate(e.target.value)}
              value={createDate}
              required
            ></input>
          </div>
        </div>
        <div className='form__row dashboard__buttons'>
          <button
            className='primary-button form__button dashboard__button'
            type='submit'
          >
            {selectedClient ? 'Update' : 'Create'}
          </button>
          <button
            className='secondary-button form__button dashboard__button'
            type='button'
            onClick={() => {
              setShowForm(false);
              setSelectedClient(null);
            }}
          >
            Cancel
          </button>
          {selectedClient && (
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
    </>
  );
}
