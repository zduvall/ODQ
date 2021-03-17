import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ClientHeader({
  setStatus,
  // status, // conntected with very bottom
  setFxClients,
}) {
  let clients = useSelector((state) => Object.values(state.clients));

  const [sortCode, setSortCode] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  function sort(attr) {
    const sortBy = attr === 'birthYear' ? sortYear : sortCode;
    setFxClients(
      clients.slice().sort((a, b) => {
        if (sortBy) return a[attr] < b[attr] ? 1 : -1;
        return a[attr] < b[attr] ? -1 : 1;
      })
    );
  }

  function handleSortCodeClick() {
    setSortCode((prev) => !prev);
    setSortYear(false);
    sort('code');
  }

  function handleSortYearClick() {
    setSortYear((prev) => !prev);
    setSortCode(false);
    sort('birthYear');
  }

  function handleStatusClick() {
    setStatus((prev) => (prev === 3 ? 1 : prev + 1));
  }

  return (
    <>
      <p
        title='sort by client code'
        className='clients-header c-h-1'
        onClick={handleSortCodeClick}
      >
        Client Code
      </p>
      <p
        title='sort by birth year'
        className='clients-header'
        onClick={handleSortYearClick}
      >
        Birth Year
      </p>
      <p
        title='toggle clients shown by status'
        className='clients-header c-h-3'
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
