import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ClientHeader({
  setStatus,
  // status,
  setFxClients,
}) {
  let clients = useSelector((state) => Object.values(state.clients));

  const [sortCode, setSortCode] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  function sort(attr) {
    const sortBy = attr === 'birthYear' ? sortYear : sortCode;
    if (sortBy) {
      setFxClients(
        clients.slice().sort((a, b) => (a[attr] < b[attr] ? 1 : -1))
      );
    } else {
      setFxClients(
        clients.slice().sort((a, b) => (b[attr] < a[attr] ? 1 : -1))
      );
    }
  }

  function handleSortCodeClick() {
    setSortCode((prev) => !prev);
    sort('code');
  }

  function handleSortYearClick() {
    setSortYear((prev) => !prev);
    sort('birthYear');
  }

  function handleStatusClick() {
    setStatus((prev) => (prev === 3 ? 1 : prev + 1));
  }

  return (
    <>
      <p
        title='sort by client code'
        className='client-header'
        onClick={handleSortCodeClick}
      >
        Client Code
      </p>
      <p
        title='sort by birth year'
        className='client-header'
        onClick={handleSortYearClick}
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
