import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// imoprt components
import ClientHeader from './ClientHeader';
import ClientRow from './ClientRow';

export default function Clients() {
  let clients = useSelector((state) => Object.values(state.clients));

  const [curClients, setCurClients] = useState(clients);
  const [clientCode, setClientCode] = useState('no');
  const [birthYear, setBirthYear] = useState('no');
  const [status, setStatus] = useState(1);

  useEffect(() => {
    function sortClientCode() {
      if (clientCode === 'no') {
        return;
      } else if (clientCode) {
        setCurClients(
          clients.slice().sort((a, b) => (a.code < b.code ? -1 : 1))
        );
      } else {
        setCurClients(
          clients.slice().sort((a, b) => (b.code < a.code ? -1 : 1))
        );
      }
    }
    function sortBirthYear() {
      if (birthYear === 'no') {
        return;
      } else if (birthYear) {
        setCurClients(
          clients.slice().sort((a, b) => a.birthYear - b.birthYear)
        );
      } else {
        setCurClients(
          clients.slice().sort((a, b) => b.birthYear - a.birthYear)
        );
      }
    }
    function toggleStatus() {
      if (status === 1) {
        setCurClients(clients.slice());
      } else if (status === 2) {
        setCurClients(clients.slice().filter((client) => client.curClient));
      } else {
        setCurClients(clients.slice().filter((client) => !client.curClient));
      }
    }
    sortClientCode();
    sortBirthYear();
    toggleStatus();
  }, [clientCode, birthYear, status, clients]);

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
              clientCode={clientCode}
              setClientCode={setClientCode}
              birthYear={birthYear}
              setBirthYear={setBirthYear}
              status={status}
              setStatus={setStatus}
            />
            {curClients.length
              ? curClients.map((client) => (
                  <ClientRow key={client.id} client={client} />
                ))
              : clients.map((client) => (
                  <ClientRow key={client.id} client={client} />
                ))}
          </div>
        </div>
      )}
    </>
  );
}
