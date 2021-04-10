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

  // hide navbar when srolling on small screens
  let hideScroll = window.pageYOffset;
  window.onscroll = function () {
    if (width > 900) return;
    
    setShowDropdown(false);
    
    let currentScrollPos = window.pageYOffset;

    if (hideScroll > window.pageYOffset) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-70px';
    }

    hideScroll = currentScrollPos;
  };

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
      <button className={navItemClass} onClick={handleLogout}>
        Logout
      </button>
    </>
  );

  let loggedOutLinks = (
    <>
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
        />
      );
    }
  }

  return (
    <header id='navbar' className='site-header'>
      <div
        className='site-header__title primary-title'
        onClick={() => history.push('/')}
      >
        <img className='logo' src={dotLogo} alt='DOT logo' />
        <span className='s-h__t-emph'>D</span>iagnostic &{' '}
        <span className='s-h__t-emph'>O</span>utcome{' '}
        <span className='s-h__t-emph'>T</span>esting
      </div>
      <nav className='nav'>
        <ul className='nav__wrapper'>{navLinks}</ul>
      </nav>
    </header>
  );
};

export default NavBar;
