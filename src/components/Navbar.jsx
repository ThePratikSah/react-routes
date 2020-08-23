import React from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} width="100px" alt="Pratik Sah"/>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/skills" className="mr-5 hover:text-gray-900">
            Skills
          </Link>
          <Link to="/testimonials" className="mr-5 hover:text-gray-900">
            Testimonials
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

//
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <img src={logo} width="100px" alt="Pratik Sah" />
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900">First Link</a>
//       <a className="mr-5 hover:text-gray-900">Second Link</a>
//       <a className="mr-5 hover:text-gray-900">Third Link</a>
//       <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//   </div>
// </header>