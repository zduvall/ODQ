// import components
import NewUrlControls from './NewUrlControls';

// import context
import { useClientsContext } from '../index';

export default function ClientSingle() {
  const { selectedClient, setShowForm } = useClientsContext();

  return (
    <>
      <div className='dashboard__sub-section dashboard__single-client'>
        <div className='dashboard__data'>
          <p>{selectedClient.code}</p>
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
        </div>
        <NewUrlControls />
      </div>
    </>
  );
}
