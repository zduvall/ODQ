import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import components
import NewUrlControls from './NewUrlControls';

// import tests
import tests from '../TestTemplate/assets';

export default function ClientTests() {
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);
  const allClientsTests = useSelector((state) => Object.values(state.tests));
  const clientTests = allClientsTests.filter(
    (test) => test.clientId === Number(clientId)
  );

  // all tests
  const testCodes = Object.keys(tests);
  // tests this client has completed

  if (!client) return <h1 className='loading'>Loading DOT...</h1>;

  return (
    <div className='site__page'>
      <h1 className='primary-title'>{client.code} Tests</h1>
      <NewUrlControls client={client} />
    </div>
  );
}
