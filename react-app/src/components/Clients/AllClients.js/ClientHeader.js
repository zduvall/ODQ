import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ClientHeader({
  setStatus,
  status, // conntected with very bottom
  setFxClients,
}) {
  let clients = useSelector((state) => Object.values(state.clients));

  const [sortCode, setSortCode] = useState(null);
  const [sortYear, setSortYear] = useState(null);
  const [sortLastTest, setSortLastTest] = useState(true);

  function sort(sentAttr) {
    let attr = sentAttr;
    const sortDirection =
      attr === 'birthYear'
        ? sortYear
        : attr === 'code'
        ? sortCode
        : sortLastTest;

    if (sortDirection === false) {
      attr = 'lastTestTime';
    }
    setFxClients(
      clients.slice().sort((a, b) => {
        if (sortDirection && attr !== 'lastTestTime') {
          return a[attr] < b[attr] ? 1 : -1;
        }
        if (attr === 'lastTestTime') {
          const aCodeDate = a.lastTestTime
            ? new Date(a.lastTestTime)
            : new Date().setDate(new Date().getDate() + 1);
          const bCodeDate = b.lastTestTime
            ? new Date(b.lastTestTime)
            : new Date().setDate(new Date().getDate() + 1);
          if (sortDirection) {
            return aCodeDate - bCodeDate;
          }
          return bCodeDate - aCodeDate;
        }
        return a[attr] < b[attr] ? -1 : 1;
      })
    );
  }

  function handleSortCodeClick() {
    setSortCode((prev) => {
      if (prev === false) {
        setSortLastTest(true);
        return null;
      }
      return !prev;
    });
    // setSortCode((prev) => (prev === false ? null : !prev));
    setSortYear(null);
    setSortLastTest(null);
    sort('code');
  }

  function handleSortYearClick() {
    setSortYear((prev) => {
      if (prev === false) {
        setSortLastTest(true);
        return null;
      }
      return !prev;
    });
    // setSortYear((prev) => (prev === false ? null : !prev));
    setSortCode(null);
    setSortLastTest(null);
    sort('birthYear');
  }

  function handleStatusClick() {
    setStatus((prev) => (prev === 3 ? 1 : prev + 1));
  }

  function handleLastTestClick() {
    setSortLastTest((prev) => !prev);
    setSortCode(null);
    setSortYear(null);
    sort('lastTestTime');
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
        title='Sort by client code'
        className='clients-header c-h-1'
        onClick={handleSortCodeClick}
      >
        Client <i className={toggleCaret(sortCode)}></i>
      </p>
      <p
        title='Sort by birth year'
        className='clients-header'
        onClick={handleSortYearClick}
      >
        Born <i className={toggleCaret(sortYear)}></i>
      </p>
      <p
        title='Toggle clients shown by status (active or terminated)'
        className='clients-header'
        onClick={handleStatusClick}
      >
        Status
        <span className='c-h-ASlashT'>
          {status === 1 ? ' (A/T)' : status === 2 ? ' (A)' : ' (T)'}
        </span>
      </p>
      <p className='clients-header c-h-4' onClick={handleLastTestClick}>
        Last Test <i className={toggleCaret(sortLastTest)}></i>
      </p>
    </>
  );
}
