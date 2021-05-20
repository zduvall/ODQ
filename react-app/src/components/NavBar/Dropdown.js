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
      <i
        onClick={toggleDropdown}
        className={`fas fa-bars fa-lg ${
          showDropdown
            ? 'nav__dropdown__button-open'
            : 'nav__dropdown__button-closed'
        }`}
      ></i>
      <ul
        className={`nav__dropdown ${
          showDropdown ? '' : 'nav__dropdown__hidden'
        }`}
      >
        {dropdownLinks}
      </ul>
      <div
        onClick={toggleDropdown}
        className='nav__dropdown__rest-of-page'
      ></div>
    </>
  );
}
