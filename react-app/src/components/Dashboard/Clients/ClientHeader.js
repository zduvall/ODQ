export default function ClientHeader({
  setClientCode,
  clientCode,
  setBirthYear,
  birthYear,
  setStatus,
  status,
}) {
  function handleClientCodeClick() {
    setBirthYear('no');
    if (clientCode === 'no') setClientCode(true);
    else setClientCode((prev) => !prev);
  }

  function handleBirthYearClick() {
    setClientCode('no');
    if (birthYear === 'no') setBirthYear(true);
    else setBirthYear((prev) => !prev);
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
