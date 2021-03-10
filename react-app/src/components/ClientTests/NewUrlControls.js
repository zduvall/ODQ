import { useState } from 'react';
import { useSelector } from 'react-redux';

// import components
import ModalNewUrl from './ModalNewUrl';

// import tests
import tests from '../TestTemplate/assets';

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

      <form className='generate-test-url__form' onSubmit={onSubmit}>
        <button type='submit' className='primary-button dashboard__button'>
          New Test Link
        </button>
        <select
          value={test}
          onChange={(e) => setTest(e.target.value)}
          className='form__input gnerate-test-url__dropdown'
          required
        >
          <option disabled value=''>
            - New Test -
          </option>
          {testCodes.map((test) => (
            <option key={test}>{test}</option>
          ))}
        </select>
      </form>
    </>
  );
}
