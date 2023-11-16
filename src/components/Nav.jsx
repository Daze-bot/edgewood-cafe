import { Link } from "react-router-dom";
import Logo from '../assets/imgs/logo.png';
import { useEffect, useState } from "react";
import MobileMenu from '../assets/imgs/mobile-menu.svg';

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showNav = () => {
    if (mobileNav === false) {
      setMobileNav(true);
    } else if (mobileNav === true) {
      setMobileNav(false);
    }
  }

  const handleWindowSize = () => {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 640) {
      setMobileNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  },[windowWidth]);

  if (mobileNav) {
    return (
      <nav>
        <div className="navLogo">
          <Link to={'/'} onClick={showNav}>
            <img src={Logo} alt="Logo"></img>
          </Link>
        </div>
        <ul className="navLinks" 
          style={{
            height: 'calc(100vh - 60px'
          }}
        >
          <Link to='/' onClick={showNav}>
            <li>Home</li>
          </Link>
          <Link to='/menu' onClick={showNav}>
            <li>Menu</li>
          </Link>
          <Link to='/about' onClick={showNav}>
            <li>About</li>
          </Link>
          <Link to='/contact' onClick={showNav}>
            <li>Contact</li>
          </Link>
        </ul>
        <button onClick={showNav}>
          <img src={MobileMenu}></img>
        </button>
      </nav>
    )
  }

  return (
    <nav>
      <div className="navLogo">
        <Link to={'/'}>
          <img src={Logo} alt="Logo"></img>
        </Link>
      </div>
      <ul className="navLinks">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/menu'>
          <li>Menu</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <button onClick={showNav}>
        <img src={MobileMenu}></img>
      </button>
    </nav>
  )
}

export default Nav;
