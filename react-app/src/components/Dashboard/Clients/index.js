import { useState } from 'react';
import { useSelector } from 'react-redux';

// imoprt components
import ClientHeader from './ClientHeader';
import ClientRow from './ClientRow';

export default function Clients() {
  let clients = useSelector((state) => Object.values(state.clients));

  const [filterClients, setFxClients] = useState(clients);
  const [status, setStatus] = useState(1);

  return (
    <>
      {/* <div className='dashboard__sub-section client-buttons-container'>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
      </div> */}
      {!!clients && (
        <div className='dashboard__sub-section clients-container'>
          <div className='client-row'>
            <ClientHeader
              status={status}
              setStatus={setStatus}
              setFxClients={setFxClients}
            />
            {filterClients.length
              ? filterClients.map((client) => (
                  <ClientRow key={client.id} status={status} client={client} />
                ))
              : clients.map((client) => (
                  <ClientRow key={client.id} status={status} client={client} />
                ))}
          </div>
        </div>
      )}
    </>
  );
}
