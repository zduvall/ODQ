import { useHistory } from 'react-router-dom';

// import context
import { useClientsContext } from '../index';

export default function ClientSingle() {
  const history = useHistory();
  const {
    selectedClient,
    setSelectedClient,
    setShowForm,
  } = useClientsContext();

  return (
    <>
      <div className='site__sub-section'>
        <div className='site__sub-section__data'>
          <p>{selectedClient.code}</p>
          <p>Born: {selectedClient.birthYear}</p>
          <p>Status: {selectedClient.curClient ? 'Active' : 'Terminated'}</p>
        </div>
        <div className='buttons-grp-colLrg-rowSml'>
          <button
            className='primary-button dashboard__button'
            onClick={() => history.push(`/clients/${selectedClient.id}`)}
          >
            Tests
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
      </div>
    </>
  );
}
