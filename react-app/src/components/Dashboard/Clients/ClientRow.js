export default function ClientRow({ status, client }) {
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
      <p style={toggleDisp}>{client.code}</p>
      <p style={toggleDisp}>{client.birthYear}</p>
      <p style={toggleDisp}>{client.curClient ? 'Active' : 'Terminated'}</p>
    </>
  );
}
