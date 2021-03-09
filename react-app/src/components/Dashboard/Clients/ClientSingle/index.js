import { useState } from 'react';
import { useSelector } from 'react-redux';

// import context
import { useClientsContext } from '../index';

// import components
import ModalNewUrl from './ModalNewUrl';

import NewUrlControls from './NewUrlControls';

// import tests
import tests from '../../../TestTemplate/assets/index';

export default function ClientSingle() {
  // store and context
  const sessionUser = useSelector((state) => state.session.user);
  const { selectedClient } = useClientsContext();

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
    const clientUrl = selectedClient.code + '_' + selectedClient.id;
    const url = `${window.location.host}/test/${test}/${userUrl}/${clientUrl}`;
    setNewUrl(url);
    setShowModal(true);
  }

  return (
    <>
      <div className='dashboard__sub-section dashboard__single-client'>
        <div className='dashboard__data'>
          <p>{selectedClient.code}</p>
        </div>
        <NewUrlControls />
      </div>
    </>
  );
}
