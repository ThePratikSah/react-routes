import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    color: "white",
  };

  return (
    <>
      <nav>
        <ul>
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li>Contact</li>
          </Link>
          <Link style={navStyle} to="/privacy">
            <li>Privacy</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
