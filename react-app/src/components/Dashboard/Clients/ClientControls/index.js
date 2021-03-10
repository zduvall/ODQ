import { useClientsContext } from '../index';

export default function ClientControls() {
  const {
    searchClients,
    setSearchClients,
    selectedClient,
    setShowForm,
  } = useClientsContext();

  return (
    <div className='dashboard__client-controls'>
      <input
        className='form__input'
        placeholder='Search code / year'
        value={searchClients}
        onChange={(e) => setSearchClients(e.target.value)}
        disabled={selectedClient}
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
