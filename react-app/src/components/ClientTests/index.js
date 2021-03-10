import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import components
import NewUrlControls from './NewUrlControls';

export default function ClientTests() {
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);
  const allTests = useSelector((state) => Object.values(state.tests));
  const clientTests = allTests.filter(
    (test) => test.clientId === Number(clientId)
  );

  console.log(clientTests);

  if (!client) return <h1 className='loading'>Loading DOT...</h1>;

  return (
    <>
      <h1>{client.code}</h1>
      <p>test</p>
      <NewUrlControls client={client} />
    </>
  );
}
