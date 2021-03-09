import { useState } from 'react';
import { useSelector } from 'react-redux';

// import context
import { useClientsContext } from '../index';

// import tests
import tests from '../../../TestTemplate/assets/index';

export default function ClientTests() {
  const [test, setTest] = useState('');
  const sessionUser = useSelector((state) => state.session.user);

  const { clientToUpdate } = useClientsContext();
  const testCodes = Object.keys(tests);

  function onSubmit(e) {
    e.preventDefault();
    const userUrlPart = `${
      sessionUser.firstName.slice(0, 1) + '-' + sessionUser.lastName.slice(0, 1)
    }_${sessionUser.id}`;
    const clientUrlPart = clientToUpdate.code + '_' + clientToUpdate.id;
    const url = `${window.location.host}/test/${test}/${userUrlPart}/${clientUrlPart}`;
    console.log(url);
  }

  return (
    <div className='dashboard__sub-section dashboard__client-tests'>
      <p className='dashboard__single-client'>{clientToUpdate.code}</p>
      <form onSubmit={onSubmit}>
        <select
          value={test}
          onChange={(e) => setTest(e.target.value)}
          className='form__input dashboard__input'
        >
          <option disabled value=''>
            - Test Code -
          </option>
          {testCodes.map((test) => (
            <option key={test}>{test}</option>
          ))}
        </select>
        <button type='submit' className='primary-button dashboard__button'>
          New Test Link
        </button>
      </form>
    </div>
  );
}
