// import context
import { useClientsContext } from '../index';

export default function ClientRow({ status, client }) {
  const { setShowForm, setClientToUpdate } = useClientsContext();

  function handleClickClient() {
    setClientToUpdate(client);
    setShowForm(true);
  }

  // logic to toggle if this row is shown or not
  const statusObj = { 1: 'all', 2: true, 3: false };
  const toggledStatus = statusObj[status];
  const toggleDisp =
    toggledStatus === 'all'
      ? {}
      : toggledStatus === client.curClient
      ? {}
      : { display: 'none' };

  return (
    <>
      <p className='client-name' onClick={handleClickClient} style={toggleDisp}>
        {client.code}
      </p>
      <p style={toggleDisp}>{client.birthYear}</p>
      <p style={toggleDisp}>{client.curClient ? 'Active' : 'Terminated'}</p>
    </>
  );
}
