import { useHistory } from 'react-router-dom';

// import context
import { useClientTestsContext } from '../../pages/Client';

export default function ClientInfo() {
  const history = useHistory();
  const { client } = useClientTestsContext();

  return (
    <div className='site__sub-section'>
      <div className='site__sub-section__data'>
        <p>Born: {client.birthYear}</p>
        <p>Status: {client.curClient ? 'Active' : 'Terminated'}</p>
      </div>
      <button
        className='secondary-button'
        onClick={() => history.push(`/clients/${client.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
}
