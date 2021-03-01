import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginFormModal from '../auth/LoginFormModal';
import ProfileButton from './ProfileButton';
import LoggedInDropdown from './LoggedInDropdown';
import SessionLinksDropdown from './SessionLinksDropdown';

// import css
import './navBar.css';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let sessionLinks;

  if (!!sessionUser) {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          {/* <li className='nav__item'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li> */}
          <li className='nav__item'>
            <ProfileButton user={sessionUser} />
          </li>
        </>
      );
    } else {
      sessionLinks = <LoggedInDropdown />;
    }
  } else {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <LoginFormModal />
          </li>
          <li className='nav__item'>
            <SignUpFormModal />
          </li>
        </>
      );
    } else {
      sessionLinks = <SessionLinksDropdown />;
    }
  }

  return (
    <header
      className='site-header'
    >
      <div className='site-header__wrapper'>
        <a className='site-header__title' href='/'>
          <img
            className='logo'
            alt="pair yo' pet logo"
            src='/images/pyp-logo-cropped.png'
          ></img>
        </a>
        <nav className='nav'>
          <ul className='nav__wrapper'>{sessionLinks}</ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
