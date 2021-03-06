import { useSelector } from 'react-redux';

export default function Clients() {
  const clients = useSelector((state) => Object.values(state.clients));

  return (
    <div className='dashboard__sub-section client-container'>
      {clients.map((client) => (
        <div className='client-row' key={client.id}>
          <p>{client.code}</p>
          <p>{client.birthYear}</p>
          <p>{client.curClient ? 'Active' : 'Terminated'}</p>
        </div>
      ))}
    </div>
  );
}
