import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import LogoutButton from '../auth/LogoutButton';
import Dropdown from './Dropdown';

// import css
import './navBar.css';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let navLinks;

  let loggedInLinks = (
    <>
      <NavLink
        className='nav__item'
        to='/users'
        exact={true}
        activeClassName='active'
      >
        Users
      </NavLink>
      <LogoutButton />
    </>
  );

  let loggedOutLinks = (
    <>
      <NavLink
        className='nav__item'
        to='/signup'
        exact={true}
        activeClassName='active'
      >
        Sign Up
      </NavLink>
      <NavLink
        className='nav__item'
        to='/login'
        exact={true}
        activeClassName='active'
      >
        Log In
      </NavLink>
    </>
  );

  if (!!sessionUser) {
    if (width > 800) {
      navLinks = loggedInLinks;
    } else {
      navLinks = <Dropdown dropdownLinks={loggedInLinks} />;
    }
  } else {
    if (width > 800) {
      navLinks = loggedOutLinks;
    } else {
      navLinks = <Dropdown dropdownLinks={loggedOutLinks} />;
    }
  }

  return (
    <header className='site-header'>
      <div className='site-header__wrapper'>
        <a className='site-header__title' href='/'>
          Home
        </a>
        <nav className='nav'>
          <ul className='nav__wrapper'>{navLinks}</ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
