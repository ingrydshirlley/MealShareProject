import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
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
