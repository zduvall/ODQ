import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ClientHeader({
  setStatus,
  // status,
  setFxClients,
}) {
  let clients = useSelector((state) => Object.values(state.clients));

  const [clientCode, setClientCode] = useState(false);
  const [birthYear, setBirthYear] = useState(false);

  function sortClientCode() {
    if (clientCode) {
      setFxClients(clients.slice().sort((a, b) => (a.code < b.code ? -1 : 1)));
    } else {
      setFxClients(clients.slice().sort((a, b) => (b.code < a.code ? -1 : 1)));
    }
  }

  function sortBirthYear() {
    if (birthYear) {
      setFxClients(clients.slice().sort((a, b) => a.birthYear - b.birthYear));
    } else {
      setFxClients(clients.slice().sort((a, b) => b.birthYear - a.birthYear));
    }
  }

  function handleClientCodeClick() {
    setClientCode((prev) => !prev);
    sortClientCode();
  }

  function handleBirthYearClick() {
    setBirthYear((prev) => !prev);
    sortBirthYear();
  }

  function handleStatusClick() {
    setStatus((prev) => (prev === 3 ? 1 : prev + 1));
  }

  return (
    <>
      <p
        title='sort by client code'
        className='client-header'
        onClick={handleClientCodeClick}
      >
        Client Code
      </p>
      <p
        title='sort by birth year'
        className='client-header'
        onClick={handleBirthYearClick}
      >
        Birth Year
      </p>
      <p
        title='toggle clients shown by status'
        className='client-header'
        onClick={handleStatusClick}
      >
        Status
        {/* {status === 1
          ? 'All Clients'
          : status === 2
          ? 'Active Clients'
          : 'Terminated Clients'} */}
      </p>
    </>
  );
}
