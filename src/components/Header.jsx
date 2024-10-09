import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
  const location = useLocation();
  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="MealShare Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/quem-somos" className={location.pathname === "/quem-somos" ? "active" : ""}>Quem Somos</Link>
          </li>
          <li>
            <Link to="/doe-agora" className={location.pathname === "/doe-agora" ? "active" : ""}>Doe Agora</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


