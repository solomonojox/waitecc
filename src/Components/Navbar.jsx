import React, { useState } from "react";
import assets from "../Assets/assets";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [innerMenu, setInnerMenu] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md border z-50 h-20 flex">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to='/' className="flex items-center space-x-4 cursor-pointer">
          <img src={assets.waitecclogo} alt="Logo" className="w-40" />
        </Link>

        {/* Search Bar */}
        {/* <div className="hidden lg:flex mx-6">
          <div className="relative w-[600px]">
            <input
              type="text"
              placeholder="Search courses, programs, and more..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button className="absolute right-[5.5px] top-[5.5px] bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white text-lg hover:bg-hoverPrimary">
              <FaSearch />
            </button>
          </div>
        </div> */}

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Services
          </Link>
          {/* <Link
            to="/pricing"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Pricing
          </Link> */}
          <Link
            to="/team"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Our team
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Blog
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white absolute top-20 w-full shadow-md py-10 px-6">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-gray-800 font-medium hover:text-primary block"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 font-medium hover:text-primary block"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-gray-800 font-medium hover:text-primary block"
            >
              Pricing
            </Link>
            <Link
              to="/team"
              className="text-gray-800 font-medium hover:text-primary block"
            >
              Our team
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 font-medium hover:text-primary block"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
