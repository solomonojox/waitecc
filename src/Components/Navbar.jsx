import React, { useState, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../Assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";

// Memoized NavLink component for better performance
const NavLink = memo(({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-200 ${
        isActive 
          ? "text-red-600 font-semibold underline underline-offset-4" 
          : "text-gray-700 hover:text-red-500"
      }`}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Using useCallback to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, []);

  // Close menu when clicking outside
  const closeMenu = useCallback(() => {
    if (menuOpen) setMenuOpen(false);
  }, [menuOpen]);

  // Navigation items array for easier maintenance
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/ai-agent", label: "Ai Agent" },
    { to: "/ai-automation", label: "Ai Automation" },
    { to: "/foundation", label: "Let a girl dream" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className=" bg-white shadow-md border-b z-50 h-16 flex">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo with hover effect */}
        <Link to="/" className="flex items-center space-x-4 cursor-pointer transition-transform duration-200 hover:scale-105">
          <img 
            src={assets.boakye} 
            alt="Boakye Logo" 
            className="w-32"
            loading="eager" // Ensures logo loads immediately
          />
        </Link>

        {/* Hamburger Icon with improved touch target */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes className="text-primary" /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4">
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          
          {/* Call to action button */}
          {/* <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full font-medium transition-all duration-200 hover:shadow-md"
          >
            Get Started
          </Link> */}
        </div>
      </div>

      {/* Mobile Navigation Menu with animation */}
      {menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        >
          <div 
            className="bg-white absolute top-20 right-0 w-64 h-screen shadow-xl py-8 px-6 transform transition-transform duration-300 ease-in-out"
            onClick={e => e.stopPropagation()}
          >
            <div className="space-y-6">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block py-2 border-b border-gray-100 font-medium ${
                    location.pathname === item.to
                      ? "text-red-600 underline underline-offset-4"
                      : "text-gray-800 hover:text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* <Link
                to="/contact"
                className="block w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md font-medium text-center transition-colors duration-200 mt-6"
                onClick={closeMenu}
              >
                Get Started
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);