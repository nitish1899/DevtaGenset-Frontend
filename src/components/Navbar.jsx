import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../resource/service21.png';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Book } from "./Book";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-20 sticky top-0 z-50 w-screen bg-blue-100 bg-opacity-50 shadow-md">
      {/* Navbar Container */}
      <div className="flex flex-wrap items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo or Brand Section */}
        <div className="flex items-center">
        <Link to="/" className=" text-lg font-bold text-cyan-500">Devta Gensets Pvt Ltd</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex  gap-6 lg:gap-14 text-lg items-center font-semibold"
        >
          <Link to="/" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Home</Link>
          <Link to="/about" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">About</Link>
          <Link to="/service" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Service</Link>
          <Link to="/contactUs" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Contact Us</Link>
        </div>

        {/* Social Icons & Request Quote Button for Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.facebook.com/share/DfiunaneErmM6FqR/?mibextid=qi2Omg" className="text-blue-600 text-2xl hover:text-blue-800 transition"><FaFacebookF /></a>
          <a href="https://x.com/KGVllp?t=LyZz_BWLQevEMsUFA8ggew&s=08" className="text-blue-600 text-2xl hover:text-blue-600 transition"><FaTwitter /></a>
          <a href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz" className="text-pink-500 text-2xl hover:text-pink-700 transition"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/karishmaglobal/" className="text-blue-700 text-2xl hover:text-blue-900 transition"><FaLinkedinIn /></a>
          <Book />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
          <Link to="/" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/service" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
          <Link to="/contactUs" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Book />
        </div>
      )}
    </div>
  );
};



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../resource/logokgv.jpg';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";
// export const Navbar = () => {

//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-20 sticky top-0 z-50 w-screen bg-blue-100 bg-opacity-50">


//       {/* Navbar Links Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-3 ">
//         {/* Navigation Links */}
//         <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg items-center ">
//           <Link to="/" className="hover:border-b-2 hover:border-[#ecf662] ">Home</Link>
//           <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
//           <Link to="/service" className="hover:border-b-2 hover:border-[#ecf662]">Service</Link>
//           <Link to="/contactUs" className="hover:border-b-2 hover:border-[#ecf662]">Contact Us</Link>
//         </div>

//         {/* Social Icons & Request Quote Button */}
//         <div className="hidden md:flex items-center gap-3 mb-3">
//           <a href="https://www.facebook.com/share/DfiunaneErmM6FqR/?mibextid=qi2Omg" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebookF /></a>
//           <a href="https://x.com/KGVllp?t=LyZz_BWLQevEMsUFA8ggew&s=08" className="text-blue-600 text-2xl hover:text-blue-600"><FaTwitter /></a>
//           <a href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
//           <a href="https://www.linkedin.com/company/karishmaglobal/" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedinIn /></a>
//           <Book />
     
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} color='black' />
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
//           <Link to="/" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//         </div>
//       )}
//     </div>
//   );
// };



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaUserPlus } from 'react-icons/fa';
// import logo from '../resource/logokgv.jpg';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";
// import { Button2 } from "./Button2";
// export const Navbar = () => {

//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="  sticky top-0 z-50 w-screen bg-blue-800 bg-opacity-50">
//       {/* Top Contact Info Section */}
//       <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between py-2 px-4">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="h-[60px] w-[100px]" />
//         </div>
//         {/* Contact Info */}
//         <div className="hidden md:flex flex-1 justify-around items-center text-center">
//           {/* Free Call Section */}
//           <div className="flex flex-col items-center">
//             <span className="text-green-500 flex items-center">
//               <FaPhoneAlt className="mr-2" size={16} /> Free Call +91-11-2735-7591
//             </span>
//             <span className="text-white">Call Us Now 24/7 Customer Support</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-green-500 flex items-center">
//               <FaPhoneAlt className="mr-2" size={16} /> Free Call +91-11-2735-7591
//             </span>
//             <span className="text-white">Call Us Now 24/7 Customer Support</span>
//           </div>
//           {/* Location Section */}
//           <div className="flex flex-col items-center">
//             <span className="text-white flex items-center">
//               <FaMapMarkerAlt className="mr-2" size={20} /> Our Location
//             </span>
//             <span className="text-white">Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi</span>
//           </div>
//           {/* Social Media Section */}
//           <div className="flex flex-col items-center">
//             <span className="text-green-500 flex items-center">
//               <FaUserPlus className="mr-2" size={20} /> Connect with us
//             </span>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://facebook.com" className="text-white hover:text-[#ecf662]">FACEBOOK</a>
//               <a href="https://twitter.com" className="text-white hover:text-[#ecf662]">TWITTER</a>
//               <a href="https://dribbble.com" className="text-white hover:text-[#ecf662]">INSTAGRAM</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar Links Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-3 ">
//         {/* Navigation Links */}
//         <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg text-white items-center ">
//           <Link to="/" className="hover:border-b-2 hover:border-[#ecf662]">Home</Link>
//           <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
//           <Link to="/product" className="hover:border-b-2 hover:border-[#ecf662]">Product</Link>
//           <Link to="/booking" className="hover:border-b-2 hover:border-[#d6d8ad]">Booking</Link>
//           <Link to="/distribution" className="hover:border-b-2 hover:border-[#ecf662]">Distributorship</Link>
//           <Link to="/contactUs" className="hover:border-b-2 hover:border-[#ecf662]">Contact Us</Link>
//         </div>

//         {/* Social Icons & Request Quote Button */}
//         <div className="hidden md:flex items-center gap-3 mb-3">
//           <a href="https://facebook.com" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebookF /></a>
//           <a href="https://twitter.com" className="text-white text-2xl hover:text-blue-600"><FaTwitter /></a>
//           <a href="https://instagram.com" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
//           <a href="https://www.linkedin.com/in/jagdish-singh-092919244/" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedinIn /></a>
//           <Book />
//           <Button2 />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
//           <Link to="/" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/product" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Product</Link>
//           <Link to="/booking" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
//           <Link to="/distribution" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Distributorship</Link>
//           <Link to="/contactUs" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//           <Button2 />
//         </div>
//       )}
//     </div>
//   );
// };





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CgFormatJustify, CgCloseO } from "react-icons/cg";
// import logo from "../resource/logokgv.jpg";
// import { Book } from "./Book";
// import { Button2 } from "./Button2";
// // import "./Phone.css";

// export const Navbar = () => {
//   // State to toggle mobile menu
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-[3.5rem] py-2 sticky top-0 z-50 items-center w-full bg-[#1e1e1e] min-[320px]:h-[4rem]">
//       <div className="Desktop-manu flex justify-between gap-20 max-w-[1240px] mx-auto ">
//         <div>
//           <Link to={"/"} >
//             <img
//               src={logo}
//               className="w-[40px] h-[40px]"
//               loading="lazy"
//               alt="Logo"
//             />
//           </Link>
//         </div>
//         {/* Desktop Navigation */}
//         <div className="flex font-inter gap-14 text-lg text-white items-center hidden md:flex">
//           <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
//           <Link
//             to={"/product"}
//             className="hover:border-b-2 hover:border-[#52d831]"
//           >
//             Product
//           </Link>
//           <Link
//             to={"/booking"}
//             className="hover:border-b-2 hover:border-[#52d831]"
//           >
//             Booking
//           </Link>
//           <Link
//             to={"/distribution"}
//             className="hover:border-b-2 hover:border-[#52d831]"
//           >
//             Distributorship
//           </Link>
//           <Link
//             to={"/contactUs"}
//             className="hover:border-b-2 hover:border-[#52d831] mr-5"
//           >
//             Contact Us
//           </Link>
//         </div>

//         <div className="flex  justify-center items-center gap-2">
//           <Book />
//           <Button2 />
//         </div>
//         <div className="md:hidden flex items-center">
//           {isMobileMenuOpen ? (
//             <CgCloseO
//               className=" close-navbar text-xl mr-2 text-white"
//               onClick={() => setMobileMenuOpen((prevState) => !prevState)}
//             />
//           ) : (
//             <CgFormatJustify
//               className="  menu-navbar  text-xl mr-2 text-white"
//               onClick={() => setMobileMenuOpen((prevState) => !prevState)}
//             />
//           )}
//         </div>
//       </div>
//       {/* Mobile Navigation Links */}
//       {isMobileMenuOpen && (
//         <div className=" pt-4 pb-4 bg-black flex flex-col font-inter text-lg text-white items-center mt-2">
//           <Link
//             to={"/"}
//             className="  hover:border-b-2 hover:border-[#52d831] mb-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to={"/product"}
//             className="hover:border-b-2 hover:border-[#52d831] mb-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Product
//           </Link>
//           <Link
//             to={"/booking"}
//             className="hover:border-b-2 hover:border-[#52d831] mb-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Booking
//           </Link>
//           <Link
//             to={"/distribution"}
//             className="hover:border-b-2 hover:border-[#52d831] mb-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//            Distributer-Ship
//           </Link>
//           <Link
//             to={"/contactUs"}
//             className="hover:border-b-2 hover:border-[#52d831]"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };
