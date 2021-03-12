import { useState } from 'react';
import { useSelector } from 'react-redux';

// imoprt components
import ClientHeader from './ClientHeader';
import ClientRow from './ClientRow';
import LoadingNotFoundInvalid from '../../../LoadingNotFoundInvalid';

export default function Clients() {
  let clients = useSelector((state) => Object.values(state.clients));
  clients = clients.sort((a, b) => {
    const aCodeDate = new Date(a.code.slice(a.code.indexOf('-')));
    const bCodeDate = new Date(b.code.slice(a.code.indexOf('-')));
    return bCodeDate - aCodeDate;
  });
  // clients = clients.reverse();

  const [filterClients, setFxClients] = useState(clients);
  const [status, setStatus] = useState(1);

  if (!clients) return <LoadingNotFoundInvalid message={'Loading DOT...'} />;

  return (
    <div className='site__sub-section clients-container'>
      <div className='clients-table'>
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
  );
}
