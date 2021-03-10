import { useState } from 'react';
import { useSelector } from 'react-redux';

// import components
import ModalNewUrl from './ModalNewUrl';

// import context
import { useClientTestsContext } from './index';

// import tests
import tests from '../TestTemplate/assets';

// import css
import './ClientTests.css';

export default function NewUrlControls() {
  // store and context
  const sessionUser = useSelector((state) => state.session.user);
  const { client } = useClientTestsContext();

  // state
  const [test, setTest] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      <div className='site__sub-section client-tests__sub-section'>
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
            {Object.values(tests).map((test) => (
              <option value={test.code} key={test.code}>
                {test.abbr}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
