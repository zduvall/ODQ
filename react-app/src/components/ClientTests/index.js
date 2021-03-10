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
  // tests this clinet has completed
  

  if (!client) return <h1 className='loading'>Loading DOT...</h1>;

  return (
    <>
      <h1>{client.code}</h1>
      <p>test</p>
      <NewUrlControls client={client} />
    </>
  );
}
