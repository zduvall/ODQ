import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ClientHeader({
  setStatus,
  // status, // conntected with very bottom
  setFxClients,
}) {
  let clients = useSelector((state) => Object.values(state.clients));

  const [sortCode, setSortCode] = useState(null);
  const [sortYear, setSortYear] = useState(null);

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
    setSortYear(null);
    sort('code');
  }

  function handleSortYearClick() {
    setSortYear((prev) => !prev);
    setSortCode(null);
    sort('birthYear');
  }

  function handleStatusClick() {
    setStatus((prev) => (prev === 3 ? 1 : prev + 1));
  }

  function toggleCaret(sort) {
    return sort === null
      ? 'fas fa-sort'
      : sort
      ? 'fas fa-sort-up'
      : 'fas fa-sort-down';
  }

  return (
    <>
      <p
        title='sort by client code'
        className='clients-header c-h-1'
        onClick={handleSortCodeClick}
      >
        Client Code <i className={toggleCaret(sortCode)}></i>
      </p>
      <p
        title='sort by birth year'
        className='clients-header'
        onClick={handleSortYearClick}
      >
        Birth Year <i className={toggleCaret(sortYear)}></i>
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
