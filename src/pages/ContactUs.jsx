import { useState } from "react";
import React from 'react';
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal16 from "../resource/crausal18.png";
import { BusinessBook } from "../components/BusinessBook";
import { ContactCompany } from "../components/ContactCompany";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    query: ""
  });

  const { firstName, lastName, email, address, query } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://devtagenset-backend.onrender.com/api/query", {
        firstName,
        lastName,
        email,
        address,
        query,
      });

      if (response.status === 200) {
        console.log("Query submitted successfully!");
        tostershow();
      } else {
        console.error("Failed to submit query.");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      query: ""
    });
  };

  const tostershow = () => {
    toast.success('Query Raised successfully!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="overflow-hidden relative">
      <ToastContainer />
      {/* Background Section */}
      <div className="relative min-h-screen pt-24 bg-blue-400">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{ backgroundImage: `url(${crausal16})` }}
        ></div>
        <header className="relative z-10 text-center mb-6 px-4">
          <h1 className="text-6xl text-white font-bold" style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>
            CONTACT US
          </h1>
          <h2 className="text-xl text-white font-semibold mt-20" style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>we are committed to providing exceptional customer service. Whether you have inquiries about our products, services, or want to discuss your power requirements, our dedicated team is here to assist you.</h2>
        </header>
      </div>

      {/* Contact Form Section */}
      <div className="bg-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-blue-700 pt-20" style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>
          Contact us by filling this form
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10 items-start justify-between p-6">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-black bg-opacity-10 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Request Free Consultation</h2>
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 font-inter">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full">
                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">First Name <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaUser className="text-black mr-2" />
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder="Enter first name"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Last Name <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaUser className="text-black mr-2" />
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder="Enter last name"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Email Address <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <MdEmail className="text-black mr-2" />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Address <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaLocationDot className="text-black mr-2" />
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleOnChange}
                        placeholder="Enter address"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>
                </div>

                <div className="w-full">
                  <label>
                    <p className="text-[0.875rem] font-semibold text-white">Query <sup className="text-pink-200">*</sup></p>
                    <textarea
                      name="query"
                      value={query}
                      onChange={handleOnChange}
                      placeholder="Enter your query"
                      className="w-full h-40 p-2 rounded-md outline-none"
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  className="py-3 px-5 bg-[#57E226] text-white font-semibold rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-black bg-opacity-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.306228264553!2d77.13197781900153!3d28.696942428850727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03391d87af2d%3A0x6e945d5d3e98e1c!2sNetaji%20Subhash%20Place%2C%20Pitam%20Pura%2C%20Delhi%2C%20110034%2C%20India!5e0!3m2!1sen!2sus!4v1630075295083!5m2!1sen!2sus"
              width="100%"
              height="540"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Netaji Subhash Place, Delhi"
            />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <ContactCompany />

      <BusinessBook />
    </div>
  );
};
