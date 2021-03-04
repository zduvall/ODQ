export default function Dropdown({
  dropdownLinks,
  showDropdown,
  setShowDropdown,
}) {
  const toggleDropdown = () => {
    setShowDropdown((prevShow) => !prevShow);
  };

  return (
    <>
      <button onClick={toggleDropdown}>
        <i
          className={`fas fa-bars fa-lg ${
            showDropdown ? 'nav__dropdown__button-open' : 'nav__dropdown__button-closed'
          }`}
        ></i>
      </button>
      {showDropdown && (
        <>
          <ul className='nav__dropdown'>{dropdownLinks}</ul>
          <div
            onClick={toggleDropdown}
            className='nav__dropdown__rest-of-page'
          ></div>
        </>
      )}
    </>
  );
}
