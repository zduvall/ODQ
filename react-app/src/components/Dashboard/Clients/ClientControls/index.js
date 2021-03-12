import { useSelector } from 'react-redux';

import { useClientsContext } from '../index';

export default function ClientControls() {
  const {
    searchClients,
    setSearchClients,
    selectedClient,
    setShowForm,
  } = useClientsContext();

  const numClients = useSelector((state) => Object.keys(state.clients).length);

  return (
    <div className='dashboard__client-controls'>
      <input
        className='form__input'
        placeholder='Search code / year'
        value={searchClients}
        onChange={(e) => setSearchClients(e.target.value)}
        disabled={selectedClient || numClients < 1}
        title={numClients < 1 ? 'Add clients to enable search' : ''}
        style={numClients < 1 ? { cursor: 'no-drop' } : {}}
      ></input>
      <button
        className='primary-button dashboard__button client-controls__button'
        onClick={() => setShowForm(true)}
        disabled={selectedClient}
      >
        New Client
      </button>
    </div>
  );
}
