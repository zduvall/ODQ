export default function Dropdown({
  dropdownLinks,
  showDropdown,
  setShowDropdown,
  hideLinks,
  setHideLinks,
}) {
  const toggleDropdown = () => {
    setShowDropdown((prevShow) => !prevShow);
    if (hideLinks) {
      setHideLinks(false);
    } else {
      setTimeout(() => setHideLinks(true), 500);
    }
  };

  const checkIfLoggedIn = () => {
    return (
      dropdownLinks.props.children[dropdownLinks.props.children.length - 1]
        .props.children === 'Logout'
    );
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
        } ${
          checkIfLoggedIn()
            ? 'nav__dropdown__logged-in'
            : 'nav__dropdown__logged-out'
        }`}
      >
        {hideLinks && <p></p>}
        {!hideLinks && dropdownLinks}
      </ul>
      {showDropdown && (
        <div
          onClick={toggleDropdown}
          className='nav__dropdown__rest-of-page'
        ></div>
      )}
    </>
  );
}
