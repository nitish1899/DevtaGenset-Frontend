import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import SocialMedia from "./pages/SocialMedia"
import { MissionVision } from "./components/MissionVision";
import { Service } from "./pages/Service";


const App = () => {
  const media = { mobile: "768px", tab: "998px" };
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/socialmedia" element={<  SocialMedia />} />
        <Route path="/MissionVision" element={<  MissionVision />} />

      </Routes>
      <Footer />

    </div>
  )
};

export default App;
