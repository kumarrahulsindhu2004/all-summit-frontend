import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on click
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo" onClick={() => handleNavigate("/")}>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Desktop Nav */}
      <nav className="header-nav">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/my-photo">My Photo</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* CTA */}
      <div className="header-action">
        <button className="get-photo-btn" onClick={() => handleNavigate("/my-photo")}>
          Get Photo
        </button>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink onClick={() => handleNavigate("/about")} to="/about">About</NavLink>
          <NavLink onClick={() => handleNavigate("/my-photo")} to="/my-photo">My Photo</NavLink>
          <NavLink onClick={() => handleNavigate("/contact")} to="/contact">Contact</NavLink>

          <button onClick={() => handleNavigate("/my-photo")}>
            Get Photo
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
