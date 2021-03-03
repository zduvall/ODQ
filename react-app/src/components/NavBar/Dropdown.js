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
          className={
            showDropdown ? 'far fa-window-close fa-lg' : 'fas fa-bars fa-lg'
          }
        ></i>
      </button>
      {showDropdown && <ul className='nav__dropdown'>{dropdownLinks}</ul>}
    </>
  );
}
