import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-100 shadow-lg text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <a href="/" className="text-2xl font-semibold hover:text-indigo-600">
            Lance
          </a>
        </div>
        {/* Footer Navigation Links */}
        <div className="flex justify-center mb-4 md:mb-0">
          <div className="space-x-4">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Lance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
