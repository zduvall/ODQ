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
      <p className='client-header' onClick={handleClientCodeClick}>
        Client Code
      </p>
      <p className='client-header' onClick={handleBirthYearClick}>
        Birth Year
      </p>
      <p className='client-header' onClick={handleStatusClick}>
        Status
      </p>
    </>
  );
}
