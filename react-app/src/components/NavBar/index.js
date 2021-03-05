import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import Dropdown from './Dropdown';

// import thunk
import { logoutUser } from '../../store/session';

// import css and pic
import './navBar.css';
import dotLogo from './dot-logo.png';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowDropdown(false);
  };

  let navLinks;

  let navItemClass = width > 800 ? 'nav__item' : 'nav__dropdown__item';

  let loggedInLinks = (
    <>
      {/* <NavLink
        className={navItemClass}
        to='/users'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Users
      </NavLink> */}
      <NavLink
        className={navItemClass}
        to='/dashboard'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Dashboard
      </NavLink>
      <button className={navItemClass} onClick={handleLogout}>
        Logout
      </button>
    </>
  );

  let loggedOutLinks = (
    <>
      <NavLink
        className={navItemClass}
        to='/signup'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Sign Up
      </NavLink>
      <NavLink
        className={navItemClass}
        to='/login'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Log In
      </NavLink>
    </>
  );

  if (!!sessionUser) {
    if (width > 800) {
      navLinks = loggedInLinks;
    } else {
      navLinks = (
        <Dropdown
          dropdownLinks={loggedInLinks}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      );
    }
  } else {
    if (width > 800) {
      navLinks = loggedOutLinks;
    } else {
      navLinks = (
        <Dropdown
          dropdownLinks={loggedOutLinks}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      );
    }
  }

  return (
    <header className='site-header'>
      <div
        className='site-header__title primary-title'
        onClick={() => history.push('/')}
      >
        <img className='logo' src={dotLogo} alt='DOT logo' />
        Diagnostic & Outcome Testing
      </div>
      <nav className='nav'>
        <ul className='nav__wrapper'>{navLinks}</ul>
      </nav>
    </header>
  );
};

export default NavBar;
