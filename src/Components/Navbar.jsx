import React, { useState } from "react";
import assets from "../Assets/assets";
import { Link } from "react-router-dom";

import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [innerMenu, setInnerMenu] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={assets.logo} alt="Logo" className="w-28" />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex mx-6">
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
        </div>

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
          {/* Explore Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 font-medium hover:text-primary flex items-center" onClick={ () => setExploreOpen(!exploreOpen) }>
              <span>Explore</span> <IoMdArrowDropdown/>
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg transition-opacity duration-300 z-50 ${exploreOpen ? "block" : "hidden"}`}>
              <ul className="py-2">
                <li>
                  <Link
                    to="#courses"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#programs"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#diplomatic-training"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Diplomatic Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Other Links */}
          <Link
            to="#careers"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Careers
          </Link>
          <Link
            to="#login"
            className="text-gray-800 font-medium hover:text-primary"
          >
            Login
          </Link>
          <Link
            to="#signup"
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-hoverPrimary transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md py-10 px-6">
          <div className="space-y-4">
            {/* Explore Dropdown */}
            <div>
              <button className="text-gray-800 font-medium hover:text-primary flex items-center" onClick={ () => setInnerMenu(!innerMenu) }>
                Explore <IoMdArrowDropdown/>
              </button>
              <ul className={`mt-2 space-y-2 ${innerMenu ? "block" : "hidden"}`}>
                <li>
                  <Link
                    to="#courses"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#programs"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#diplomatic-training"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Diplomatic Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Links */}
            <Link
              to="#careers"
              className="block text-gray-800 font-medium hover:text-primary"
            >
              Careers
            </Link>
            <Link
              to="#login"
              className="block text-gray-800 font-medium hover:text-primary"
            >
              Login
            </Link>
            <Link
              to="#signup"
              className="block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-hoverPrimary transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
