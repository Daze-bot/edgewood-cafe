import { Link } from "react-router-dom";
import Logo from '../assets/imgs/logo.png';
import { useState } from "react";

const Nav = () => {
  // Make a 3-line button for mobile nav
  // Use css to hide button unless mobile
  // Normal nav should be hidden on mobile
  // Pressing button will pull up the nav on the screen for use

  const [mobileNav, setMobileNav] = useState(false);

  const showNav = () => {
    if (mobileNav === false) {
      setMobileNav(true)
    } else if (mobileNav === true) {
      setMobileNav(false)
    }
  }

  if (mobileNav) {
    return (
      <div className="mobileNav">
        <nav>
          <button onClick={showNav}>Show</button>
          <div className="navLogo">
            <Link to={'/'}>
              <img src={Logo} alt="Logo"></img>
            </Link>
          </div>
        </nav>
        <ul className="mobileNavLinks">
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
      </div>
    )
  }

  return (
    <nav>
      <button onClick={showNav}>Show</button>
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
    </nav>
  )
}

export default Nav;
