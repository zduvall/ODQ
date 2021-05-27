import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import Dropdown from './Dropdown';

export default function NavBarLinks({
  setShowDropdown,
  showDropdown,
  handleClick,
  handleLogout,
  hideLinks,
  setHideLinks,
}) {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  // create nav links for logged in vs logged out
  let navLinks;

  let navItemClass = width > 800 ? 'nav__item' : 'nav__dropdown__item';

  let loggedInLinks = (
    <>
      <NavLink
        className={navItemClass}
        to='/clients'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Clients
      </NavLink>
      <NavLink
        className={navItemClass}
        to='/account'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Account
      </NavLink>
      <NavLink
        className={navItemClass}
        to='/all-tests'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Tests
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
        to='/all-tests'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Tests
      </NavLink>
      <NavLink
        className={navItemClass}
        to='/sign-up'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Sign Up
      </NavLink>
      <NavLink
        className={navItemClass}
        to='/log-in'
        exact
        activeClassName='nav__item-active'
        onClick={handleClick}
      >
        Log In
      </NavLink>
    </>
  );

  // links when a client is taking a test = none
  if (window.location.pathname.startsWith('/test')) {
    navLinks = null;
  } else if (!!sessionUser) {
    // links for logged in user
    if (width > 800) {
      navLinks = loggedInLinks;
    } else {
      navLinks = (
        <Dropdown
          dropdownLinks={loggedInLinks}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          hideLinks={hideLinks}
          setHideLinks={setHideLinks}
        />
      );
    }
  } else {
    // links for logged out user
    if (width > 800) {
      navLinks = loggedOutLinks;
    } else {
      navLinks = (
        <Dropdown
          dropdownLinks={loggedOutLinks}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          hideLinks={hideLinks}
          setHideLinks={setHideLinks}
        />
      );
    }
  }
  return navLinks;
}
