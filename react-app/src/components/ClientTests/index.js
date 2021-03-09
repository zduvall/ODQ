import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ClientTests() {
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);

  if (!client) return <h1 className='loading'>Loading DOT...</h1>;

  return (
    <>
      <h1>{client.code}</h1>
      <p>test</p>
    </>
  );
}
