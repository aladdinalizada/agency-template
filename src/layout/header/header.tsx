import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerContainer">
      <div className="left">
        <h1>LOGO</h1>
      </div>
      <div className="right">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <ul className="navlist">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "active" : ""}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <li>
              <button className="contactBtn">Contact us</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
