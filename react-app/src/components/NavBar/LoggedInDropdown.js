import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../services/auth';
import { removeUser } from '../../store/session';

export default function LoggedInDropdown() {
  
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    let show = true;
    if (showMenu) show = false;
    setShowMenu(show);
  };

  const logoutUser = async (e) => {
    e.preventDefault();
    await logout();
    dispatch(removeUser());
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
      {showMenu && (
        <ul className='navbar__dropdown navbar__dropdown-collapse'>
          <li className='navbar__dropdown__info'>{sessionUser.username}</li>
          <li className='navbar__dropdown__info'>{sessionUser.email}</li>
          <li className='navbar__dropdown__button'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li className='navbar__dropdown__button'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <button className='navbar__dropdown__button' onClick={logoutUser}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
