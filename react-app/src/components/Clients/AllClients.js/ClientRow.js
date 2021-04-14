import { useHistory } from 'react-router-dom';
// import context
import { useClientsContext } from '../../../pages/Clients';

export default function ClientRow({ status, client }) {
  const history = useHistory();

  const { searchClients } = useClientsContext();
  const { code, birthYear, curClient, lastTestTime, unseenTests } = client;

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

  function createDate(dateInfo) {
    const date = new Date(dateInfo).toLocaleDateString();
    return date.slice(0, date.lastIndexOf('/') + 1) + date.slice(-2);
  }

  return (
    <div className='clients-row' onClick={handleClickClient}>
      <p style={toggleDisp}>
        {code.slice(0, code.indexOf('-'))}
        <span className='tertiary-text'>{code.slice(code.indexOf('-'))}</span>
      </p>
      <p style={toggleDisp}>{birthYear}</p>
      <p style={toggleDisp}>{curClient ? 'A' : 'T'}</p>
      <p
        style={toggleDisp}
        className={`${unseenTests.length ? 'primary-title' : ''}`}
      >
        {lastTestTime ? createDate(lastTestTime) : 'N/A'}
      </p>
    </div>
  );
}
