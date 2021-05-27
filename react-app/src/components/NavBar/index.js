import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import NavBarLinks from './NavBarLinks';

// import thunk
import { logoutUser } from '../../store/session';

// import css and pic
import './navBar.css';
import dotLogo from './dot-logo.webp';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const width = useWindowWidth();

  const [showDropdown, setShowDropdown] = useState(false);
  const [hideLinks, setHideLinks] = useState(true);

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
    if (width > 850) return;

    setShowDropdown(false);
    setTimeout(() => setHideLinks(true), 500);

    let currentScrollPos = window.pageYOffset;

    if (hideScroll > window.pageYOffset) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-70px';
    }

    hideScroll = currentScrollPos;
  };

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
        <ul className='nav__wrapper'>
          <NavBarLinks
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
            handleClick={handleClick}
            handleLogout={handleLogout}
            hideLinks={hideLinks}
            setHideLinks={setHideLinks}
          />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
