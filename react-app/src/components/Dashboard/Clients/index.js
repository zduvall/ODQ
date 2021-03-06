import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// imoprt components
import ClientHeader from './ClientHeader';
import ClientRow from './ClientRow';

export default function Clients() {
  const clients = useSelector((state) => Object.values(state.clients));

  const [clientCode, setClientCode] = useState('no');
  const [birthYear, setBirthYear] = useState('no');
  const [status, setStatus] = useState(1);

  function sortClientCode() {
    if (clientCode) clients.sort((a, b) => (a.code < b.code ? -1 : 1));
  }

  useEffect(() => {
    console.log('client code:', clientCode);
    console.log('birth year:', birthYear);
    console.log('status:', status);
  }, [clientCode, birthYear, status]);

  return (
    <>
      <div className='dashboard__sub-section client-buttons-container'>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
      </div>
      {!!clients && (
        <div className='dashboard__sub-section clients-container'>
          <div className='client-row'>
            <ClientHeader
              clientCode={clientCode}
              setClientCode={setClientCode}
              birthYear={birthYear}
              setBirthYear={setBirthYear}
              status={status}
              setStatus={setStatus}
            />
            {clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
