import React, { useState } from 'react';

export default function Dropdown({ dropdownLinks }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prevShow) => !prevShow);
  };

  return (
    <>
      <button onClick={openMenu}>
        <i
          className={
            showMenu ? 'far fa-window-close fa-lg' : 'fas fa-bars fa-lg'
          }
        ></i>
      </button>
      {showMenu && <ul className='navbar__dropdown'>{dropdownLinks}</ul>}
    </>
  );
}
