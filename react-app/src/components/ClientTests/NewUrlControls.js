import { useState } from 'react';
import { useSelector } from 'react-redux';

// import components
import ModalNewUrl from './ModalNewUrl';

// import tests
import tests from '../TestTemplate/assets';

// import css
import './ClientTests.css';

export default function NewUrlControls({ client }) {
  // store and context
  const sessionUser = useSelector((state) => state.session.user);

  // state
  const [test, setTest] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  // tests
  const testCodes = Object.keys(tests);

  function onSubmit(e) {
    e.preventDefault();
    const userUrl = `${
      sessionUser.firstName.slice(0, 1) + '-' + sessionUser.lastName.slice(0, 1)
    }_${sessionUser.id}`;
    const clientUrl = client.code + '_' + client.id;
    const url = `${window.location.host}/test/${test}/${userUrl}/${clientUrl}`;
    setNewUrl(url);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <ModalNewUrl
          showModal={showModal}
          setShowModal={setShowModal}
          newUrl={newUrl}
          client={client}
        />
      )}
      <div className='site__sub-section new-url-controls'>
        <form className='new-url-controls__form' onSubmit={onSubmit}>
          <button type='submit' className='primary-button'>
            New Link
          </button>
          <select
            value={test}
            onChange={(e) => setTest(e.target.value)}
            className='form__input'
            required
          >
            <option disabled value=''>
              - Tests -
            </option>
            {testCodes.map((test) => (
              <option key={test}>{test}</option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
