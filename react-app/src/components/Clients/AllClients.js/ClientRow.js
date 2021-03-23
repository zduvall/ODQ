import { useHistory } from 'react-router-dom';
// import context
import { useClientsContext } from '../../../pages/Clients';

export default function ClientRow({ status, client }) {
  const history = useHistory();

  const { searchClients } = useClientsContext();
  const { code, birthYear, curClient, lastTestTime } = client;

  function handleClickClient() {
    history.push(`/clients/${client.id}`);
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
    <div className='clients-row' onClick={handleClickClient}>
      <p style={toggleDisp}>{code}</p>
      <p style={toggleDisp}>{birthYear}</p>
      <p style={toggleDisp}>{curClient ? 'A' : 'T'}</p>
      <p style={toggleDisp}>{new Date(lastTestTime).toLocaleDateString()}</p>
    </div>
  );
}
