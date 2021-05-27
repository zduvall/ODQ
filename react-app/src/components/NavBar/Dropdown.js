// import { useState } from 'react';

export default function Dropdown({
  dropdownLinks,
  showDropdown,
  setShowDropdown,
  hideLinks,
  setHideLinks,
}) {
  // const [hideLinks, setHideLinks] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown((prevShow) => !prevShow);
    if (hideLinks) {
      setHideLinks(false);
    } else {
      setTimeout(() => setHideLinks(true), 500);
    }
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
        {!hideLinks && dropdownLinks}
        {hideLinks && <p></p>}
      </ul>
      <div
        onClick={toggleDropdown}
        className='nav__dropdown__rest-of-page'
      ></div>
    </>
  );
}
