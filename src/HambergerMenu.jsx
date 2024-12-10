import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none z-20"
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block h-0.5 w-8 bg-gray-800 transform transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-800 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-800 transform transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Close the menu when clicking outside
      ></div>
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-6 space-y-4">
          <li>
            <a href="#home" className="text-lg text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-lg text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
