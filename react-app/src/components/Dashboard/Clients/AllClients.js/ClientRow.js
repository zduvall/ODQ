// import context
import { useClientsContext } from '../index';

export default function ClientRow({ status, client }) {
  const { searchClients, setShowForm, setSelectedClient } = useClientsContext();
  const { code, birthYear, curClient } = client;

  function handleClickClient() {
    setSelectedClient(client);
    setShowForm(true);
  }

  // logic to toggle if this row is shown or not
  const statusObj = { 1: 'all', 2: true, 3: false };
  const toggledStatus = statusObj[status];

  const statusSelected = toggledStatus === 'all' || toggledStatus === curClient;

  const searchable =
    code.toLowerCase().includes(searchClients.toLowerCase()) ||
    birthYear.toString().includes(searchClients);

  const toggleDisp = !statusSelected || !searchable ? { display: 'none' } : {};

  return (
    <>
      <p style={toggleDisp} className='client-name' onClick={handleClickClient}>
        {code}
      </p>
      <p style={toggleDisp}>{birthYear}</p>
      <p style={toggleDisp}>{curClient ? 'Active' : 'Terminated'}</p>
    </>
  );
}
