import { useState } from 'react';
import { useSelector } from 'react-redux';

// import cryptojs
import CryptoJS from 'crypto-js';

// import components
import ModalNewUrl from './ModalNewUrl';

// import context
import { useClientTestsContext } from '../../pages/Client';

// import tests
import tests from '../../assets';

// import css
import './Client.css';

export default function NewUrlControls() {
  // store and context
  const sessionUser = useSelector((state) => state.session.user);
  const { client, dropdownTest, setDropdownTest } = useClientTestsContext();

  // state
  const [newUrl, setNewUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    const userId = sessionUser.id;
    const clientId = client.id;

    const encURL = CryptoJS.SHA3(
      `${clientId}x$${dropdownTest.code}%-${userId}5z`
    )
      .toString()
      .slice(0, 15);

    const url = `${process.env.NODE_ENV === 'production' ? 'https://' : ''}${
      window.location.host
    }/test/${dropdownTest.code}/${userId}/${clientId}/${encURL}`;

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
          test={dropdownTest}
        />
      )}
      <div className='site__sub-section client-tests__sub-section'>
        <form className='new-url-controls__form' onSubmit={onSubmit}>
          <select
            value={dropdownTest.code}
            onChange={(e) => {
              setDropdownTest(tests[e.target.value]);
            }}
            className='form__input'
            required
          >
            <option disabled value=''>
              - Tests -
            </option>
            {Object.values(tests).map((t) => (
              <option value={t.code} key={t.code}>
                {t.abbr}
              </option>
            ))}
          </select>
          <button type='submit' className='primary-button'>
            New Link
          </button>
        </form>
      </div>
    </>
  );
}
