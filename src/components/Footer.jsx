import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../resource/service21.png';

export const Footer = () => {
  return (
    <div className="w-screen bg-black p-10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img src={logo} className="w-[80px] h-[60px] mb-4" alt="Logo" />
          </Link>
          <p className="text-sm">
            373 Village Shahbad Daulatpur North West Delhi New Delhi - 110042, Delhi, India
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaGoogle />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><Link to="/">Home</Link></li>
            <li className="mb-2"><Link to="/about">About</Link></li>
            <li className="mb-2"><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Business Links */}
        <div>
          <h3 className="font-semibold mb-4">Business</h3>
          <ul>
            <li className="mb-2"><Link to="/projects">Project</Link></li>
            <li className="mb-2"><Link to="/team">Our Team</Link></li>
            <li className="mb-2"><Link to="/facts">Facts</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm">
            373 Village Shahbad Daulatpur North West Delhi New Delhi - 110042, Delhi, India
          </p>
          <p className="text-sm">devtagensets@rediffmail.com</p>
          <p className="text-sm">info@devtagensets.com</p>
          <p className="text-sm">+91-9999966177</p>
          <p className="text-sm">+91-9999966155</p>
          <p className="text-sm">+91-9999966162</p>
        </div>
      </div>
    </div>
  );
};


