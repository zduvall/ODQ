// import components
import NewUrlControls from './NewUrlControls';

// import context
import { useClientsContext } from '../index';

export default function ClientSingle() {
  const {
    selectedClient,
    setSelectedClient,
    setShowForm,
  } = useClientsContext();

  return (
    <>
      <div className='dashboard__sub-section dashboard__single-client'>
        <div className='dashboard__data'>
          <p>{selectedClient.code}</p>
          <p>Born: {selectedClient.birthYear}</p>
          <p>Status: {selectedClient.curClient ? 'Active' : 'Terminated'}</p>
        </div>
        <div className='dashboard__buttons'>
          <button className='secondary-button dashboard__button'>
            Sent Tests
          </button>
          <button
            className='primary-button dashboard__button'
            onClick={() => setShowForm(true)}
          >
            Update
          </button>
          <button
            className='secondary-button dashboard__button'
            onClick={() => {
              setSelectedClient(null);
              setShowForm(false);
            }}
          >
            Back
          </button>
        </div>
        <NewUrlControls />
      </div>
    </>
  );
}
