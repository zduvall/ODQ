import { useClientsContext } from '../index';

export default function ClientControls() {
  const {
    searchClients,
    setSearchClients,
    showForm,
    setShowForm,
  } = useClientsContext();

  return (
    <div className='dashboard__client-controls'>
      <input
        className='form__input dashboard__input'
        placeholder='Search code / year'
        value={searchClients}
        onChange={(e) => setSearchClients(e.target.value)}
      ></input>
      <button
        className='primary-button dashboard__button client-controls__button'
        onClick={() => setShowForm(true)}
        disabled={showForm}
      >
        New Client
      </button>
    </div>
  );
}
