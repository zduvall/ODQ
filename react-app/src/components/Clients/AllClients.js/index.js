import { useState } from 'react';
import { useSelector } from 'react-redux';

// imoprt components
import ClientHeader from './ClientHeader';
import ClientRow from './ClientRow';
import LoadingNotFoundInvalid from '../../LoadingNotFoundInvalid';

//import css
import '../Clients.css';

export default function Clients() {
  let clients = useSelector((state) => Object.values(state.clients));
  clients = clients.sort((a, b) => {
    const aCodeDate = a.lastTestTime
      ? new Date(a.lastTestTime)
      : new Date().setDate(new Date().getDate() + 1);
    const bCodeDate = b.lastTestTime
      ? new Date(b.lastTestTime)
      : new Date().setDate(new Date().getDate() + 1);
    return bCodeDate - aCodeDate;
  });

  const [filterClients, setFxClients] = useState(clients);
  const [status, setStatus] = useState(1);

  if (!clients) return <LoadingNotFoundInvalid message={'Loading eDOT...'} />;

  return (
    <div className='site__sub-section'>
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
