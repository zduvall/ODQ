import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useClientsContext } from '../../../pages/Clients';

// import css
import '../Clients.css'

export default function ClientControls() {
  const history = useHistory();
  const {
    searchClients,
    setSearchClients,
    showForm,
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
        disabled={numClients < 1 || showForm}
        title={
          numClients < 1
            ? 'Add clients to enable search'
            : showForm
            ? 'Return to client list to search'
            : ''
        }
        style={numClients < 1 || showForm ? { cursor: 'no-drop' } : {}}
      ></input>
      <button
        className='primary-button dashboard__button client-controls__button'
        onClick={() => history.push('/clients/new')}
        disabled={showForm}
      >
        New Client
      </button>
    </div>
  );
}
