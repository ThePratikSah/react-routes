import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/tcp-logo.png";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={logo} width="100px" />
        </a>
      </div>
      <nav class="nav-links">
        <li>
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-item">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="link-item">
            Privacy
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
