import { Link } from "react-router-dom";
import Logo from '../assets/imgs/logo.png';

const Nav = () => {
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
    </nav>
  )
}

export default Nav;
