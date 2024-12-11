import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Book } from './Book';
import devtagensets from '../resource/devtagensets2.png';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-16 sticky top-0 z-50 w-screen bg-black shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">

        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src={devtagensets}
              alt="Devta Gensets Logo"
              className="h-8 sm:h-8 md:h-12 lg:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-sm sm:text-base items-center font-semibold text-white ml-auto">
          <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
          <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
          <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300 whitespace-nowrap">
            Contact Us
          </Link>
        </div>

        {/* Social Icons and Call Section 
        https://devtagensets.com/
        */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-2">
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/" className="text-blue-600 text-xl hover:text-blue-800 transition" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.google.com/" className="text-blue-600 text-xl hover:text-blue-600 transition" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.google.com/" className="text-pink-500 text-xl hover:text-pink-700 transition" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/devta-gensets-private-limited" className="text-blue-700 text-xl hover:text-blue-900 transition" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
          <Book />
          <a
            href="tel:+919999966177"
            className="flex items-center text-green-500 text-base sm:text-lg hover:text-green-700 transition gap-2"
          >
            <FaPhoneAlt />
            <span className="whitespace-nowrap">Call +91-9999966177</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-4 gap-3">
          <Link
            to="/"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/service"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/contactUs"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Book />
          <a
            href="tel:+919999966177"
            className="flex items-center text-green-500 text-lg hover:text-green-700 transition gap-2"
          >
            <FaPhoneAlt />
            <span className="font-medium">Call +91-9999966177</span>
          </a>
        </div>
      )}
    </div>
  );
};
