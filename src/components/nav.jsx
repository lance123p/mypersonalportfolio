import React from "react";
import { useState } from "react";
import { FaDev, FaExclamationCircle, FaBars } from "react-icons/fa";
import { IoIosBriefcase, IoMdContact } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <a href="#" className="text-white font-serif text-3xl tracking-wider flex items-center">
            <FaDev className="mr-2" /> ITZY
          </a>
        </div>

        {/* Hamburger Menu Icon aligned to the right */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-white text-2xl" />
        </div>

        {/* Full Navigation for Large Screens */}
        <div className="hidden lg:flex space-x-4">
          <a href="#about" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <FaExclamationCircle className="mr-2" /> About
          </a>
          <a href="#projects" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <IoIosBriefcase className="mr-2" /> Projects
          </a>
          <a href="#contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <IoMdContact className="mr-2" /> Contact
          </a>
        </div>

        {/* Mobile Navigation with Animation */}
        <div
          className={`justify items-center mt-4 lg:hidden absolute right-0 top-16 w-full flex flex-col space-y-2 transition-all duration-300 ease-in-out bg-gray-800 ${
            isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <a href="#about" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <FaExclamationCircle className="mr-2" /> About
          </a>
          <a href="#projects" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <IoIosBriefcase className="mr-2" /> Projects
          </a>
          <a href="#contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl flex items-center">
            <IoMdContact className="mr-2" /> Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
