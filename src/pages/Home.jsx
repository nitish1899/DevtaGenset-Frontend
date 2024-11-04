import React from "react";
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import home2 from "../resource/crausal17.png";
import home3 from "../resource/crausal18.png";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal16 from "../resource/crausal16.png";
import service1 from "../resource/service1.png";
import service2 from "../resource/service2.png";
import service3 from "../resource/service3.png";
import service4 from "../resource/service4.png";
import service5 from "../resource/service5.png";
import service6 from "../resource/service6.png";
import service7 from "../resource/service7.png";
import service8 from "../resource/service8.png";
import service9 from "../resource/service9.png";
import service10 from "../resource/service10.png";
import service11 from "../resource/service11.png";
import service12 from "../resource/service12.png";
import service13 from "../resource/service13.png";
import dmrc from "../resource/dmrc images.jpg";
import coconstructionSite from "../resource/construction_sites.jpeg";
import factoryImage from "../resource/factory image.jpg";
import mall from "../resource/mall.jpg";
import hospital from "../resource/hospital.jpg";
import { Carousel } from 'react-responsive-carousel';


import pusparaj from "../resource/pusparaj.png";
import devrana from "../resource/devrana.png";
import brahamrana from "../resource/brahamrana.png";


import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";


import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";

export const Home = () => {
  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
      {/* <div className="relative h-screen  bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${crausal1})` }}> */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
            >
              {/* Left arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        }
      >
        <div>
          <img src={crausal16} alt="Slide 1" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
        </div>
        <div>
          <img src={home2} alt="Slide 2" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
        </div>
        <div>
          <img src={home3} alt="Slide 3" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
        </div>

      </Carousel>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 mt-12">
        <div className="max-w-2xl text-white bg-gradient-to-b from-white to-blue-700 rounded-3xl p-4 md:p-4 mx-4 md:mx-4 shadow-lg">
          <div className="uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
            {/* <div className="">Devta Gensets Private Limited </div> */}
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            Effortless Buying and Selling of Generators
          </h1>
          <p
            className="text-lg md:text-xl mb-8"
            style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            At Effortless Generators, we believe that buying and selling generators should be a simple and stress-free experience. Our user-friendly platform connects buyers and sellers, making it easier than ever to find the perfect generator for your needs or to sell your equipment with ease.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition duration-200"
          >
            GET STARTED
          </Link>
        </div>
      </div>

      {/* <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white bg-blue-500 rounded-sm">
          <div className=" uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2 ">
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>Effortless Buying and Selling of Generators </h1>
          <p className="text-lg md:text-xl mb-8"
            style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>
            At Effortless Generators, we believe that buying and selling generators should be a simple and stress-free experience. Our user-friendly platform connects buyers and sellers, making it easier than ever to find the perfect generator for your needs or to sell your equipment with ease.
          </p>
          <Link to="/" className="inline-block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition duration-200">
            GET STARTED
          </Link>
        </div>
      </div> */}
      {/* </div> */}



      {/* Key benefits section */}
      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          How can we help you
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Discover how our expertise and services ensure the reliable power you need to keep your operations running smoothly.
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
          {keyBenefits.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>




      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div
          className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          Our Services
        </div>

        {/* Subheading */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Discover our range of services tailored to meet your energy needs. Whether you're looking to rent, buy, or sell power solutions, we have options for everyone.
        </div>

        {/* Rent, Buy, Sell Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 m-16">

          {/* Rent Section */}
          <div
            className="bg-white p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl "
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
          >
            <h3 className="font-bold text-xl mb-4 text-blue-500">Rent</h3>
            <p className="text-gray-700 mb-4">
              Affordable generator rentals for every need. From construction sites to events, we provide reliable power solutions ranging from 125 kVA to 2500 kVA. Enjoy flexible rental terms and 24/7 service.
            </p>
            <p className="font-semibold">Top Brands:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Mahindra</li>
              <li>Cummins</li>
              <li>Kirloskar</li>
            </ul>
          </div>

          {/* Buy Section */}
          <div
            className="bg-white p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
          >
            <h3 className="font-bold text-xl mb-4 text-blue-500">Buy</h3>
            <p className="text-gray-700 mb-4">
              Invest in long-term power solutions with our range of diesel and gas generators. Ideal for industrial, commercial, and residential use, our generators come with installation and post-purchase support.
            </p>
            <p className="font-semibold">Featured Products:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>400 kVA Mahindra Powerol Diesel Generator</li>
              <li>1500 kVA Cummins Diesel Generator</li>
            </ul>
          </div>

          {/* Sell Section */}
          <div
            className="bg-white p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
          >
            <h3 className="font-bold text-xl mb-4 text-blue-500">Sell</h3>
            <p className="text-gray-700 mb-4">
              Sell your used generators with ease. We provide a fair evaluation and transparent process, offering you the best value for your equipment while helping others access affordable power solutions.
            </p>
            <p className="font-semibold">Accepted Brands:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Sudhir</li>
              <li>Kirloskar</li>
              <li>Mahindra Powerol</li>
            </ul>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center py-6">
          <a
            href="/"
            className="bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-400 transition duration-200 hover:scale-105"
          >
            Explore More
          </a>
        </div>
      </div>


      {/* Key benefits section */}
      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Products
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Explore our range of power solutions designed to meet your unique needs. From industrial generators to tailored energy services, discover how we can power your success.
        </div>




        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 m-16 mb-12 ">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service2}
              alt="Liquid Transportation"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">400 kVA Mahindra Powerol Diesel Generator</h4>

          </div>


          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service3}
              alt="Contract Logistics"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">1500 kVA Cummins Diesel Generator</h4>

          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service13}
              alt="Warehouse & Distribution"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">
              500 kVA Cummins Diesel Generator</h4>

          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service4}
              alt="Warehouse & Distribution"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">Kirloskar Generator</h4>

          </div>


          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service6}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">750 kVA Diesel Generator </h4>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service7}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">250 kVA Diesel Generator</h4>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service8}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">810 kVA Sudhir Silent Diesel Generator </h4>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service9}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">125 kVA Mahindra Powerol Gas Generator</h4>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service10}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">625 KVA Mahindra Powerol Diesel Generatoron</h4>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={service11}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">125 kva to 2500 kva</h4>

          </div>

        </div>

        {/* Explore More Button */}
        <div className="flex justify-center py-6">
          <Link
            to="/"
            className="bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-400 transition duration-200"
          >
            Explore More
          </Link>
        </div>

      </div>


      <MissionVision />





      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          "About Devta Gensets Private Limited"
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Meet Our Leader Braham Rana, Driving Innovation at Devta Gensets discover the benefits of our services and how they can improve your life.
          Here are some key benefits that make us stand out.
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex mb-6 mr-4">

            {/* Image container */}
            <img
              src={brahamrana}
              alt="Mr. Braham Rana"
              className="w-48 h-48 rounded-full object-cover shadow-lg mr-12"
            />

            {/* Text container */}
            <div className="text-left max-w-3xl">
              <h3 className="text-2xl font-bold text-white">Mr. Braham Rana</h3>
              <p className="text-white text-lg mb-2">Director</p>
              <p className="text-white text-md leading-relaxed line-clamp-7">
                Braham Rana is the Director of Devta Gensets Private Limited, registered with the Ministry of Corporate Affairs under DIN 02805943. Based in North Delhi, India, he plays a pivotal role in overseeing the company’s operations and strategic direction. With a strong commitment to innovation and service excellence, Braham Rana has been instrumental in leading Devta Gensets to new heights, focusing on providing top-quality power solutions. Under his leadership, the company, with a paid-up capital of ₹1,840,000.00, continues to thrive in delivering reliable energy systems and maintaining a reputation for industry expertise and customer satisfaction.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="flex mb-6 ml-8">

            {/* Text container */}
            <div className="text-left max-w-3xl mr-8">
              <h3 className="text-2xl font-bold text-white">Mr. Dev Rana</h3>
              <p className="text-white text-lg mb-2">Director</p>
              <p className="text-white text-md leading-relaxed line-clamp-7">
                Dev Rana is the Director of DEVTA GENSETS PRIVATE LIMITED, bringing visionary leadership and extensive expertise in the power solutions industry. Under his guidance, the company has grown to provide reliable, high-quality energy solutions. His dedication to innovation and operational excellence drives DEVTA GENSETS’ commitment to empowering communities and businesses with dependable power systems. Dev Prakash Rana's leadership ensures that the company maintains a strong focus on customer satisfaction, sustainability, and continuous improvement in all aspects of its operations.
              </p>
            </div>

            {/* Image container */}
            <img
              src={devrana}
              alt="Mr. Dev Rana"
              className="w-48 h-48 rounded-full object-cover shadow-lg mr-8"
            />

          </div>
        </div>




        {/* <div className="mt-4 flex justify-center">
          <div className="flex justify-center mb-6">
            <img
              src={devrana}
              alt="Mr. Dev Rana"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Mr. Dev Rana</h3>
            <p className="text-white text-lg mb-4">CEO</p>
            <p className="text-white text-md mb-4">Dev Rana is the CEO and Director of DEVTA GENSETS PRIVATE LIMITED, bringing visionary leadership and extensive expertise in the power solutions industry. Under his guidance, the company has grown to provide reliable, high-quality energy solutions. His dedication to innovation and operational excellence drives DEVTA GENSETS’ commitment to empowering communities and businesses with dependable power systems. Dev Prakash Rana's leadership ensures that the company maintains a strong focus on customer satisfaction, sustainability, and continuous improvement in all aspects of its operations.</p>
          </div>
        </div> */}


        {/* <div className="mt-8">
          <div className="flex justify-center mb-6">
            <img
              src={brahamrana}
              alt="Mr. Braham Rana"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Mr. Braham Rana</h3>
            <p className="text-white text-lg mb-4">Managing Director</p>
            <p className="text-white text-md mb-4">
              Braham Rana is the Managing Director of Devta Gensets Private Limited, registered with the Ministry of Corporate Affairs under DIN 02805943. Based in North Delhi, India, he plays a pivotal role in overseeing the company’s operations and strategic direction. With a strong commitment to innovation and service excellence, Braham Rana has been instrumental in leading Devta Gensets to new heights, focusing on providing top-quality power solutions. Under his leadership, the company, with a paid-up capital of ₹1,840,000.00, continues to thrive in delivering reliable energy systems and maintaining a reputation for industry expertise and customer satisfaction.</p>

          </div>


        </div> */}

      </div>


      {/* <div className="flex flex-col min-h-screen w-full justify-items-center items-center py-2 px-4 bg-black">
      
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Customers
        </div>

   
        <div className="text-lg text-white text-center mb-4 max-w-2xl">
          Discover the benefits of our services and how they can improve your life.
          Here are some key benefits that make us stand out.
        </div>

        <div className="m-16 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <img src={crausal1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
            <img src={crausal1} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
            <img src={crausal1} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
            <img src={crausal1} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
            <img src={crausal1} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </div>



      </div> */}

      <div className="flex flex-col min-h-screen w-full justify-items-center items-center py-2 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Customers
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-4 max-w-2xl">
          We take pride in serving a diverse group of customers who trust our services to enhance their work and life.
        </div>

        <div className="m-16 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <img src={coconstructionSite} alt="Customer Image 2" className="w-full h-40 object-cover rounded-lg" />
            <img src={factoryImage} alt="Customer Image 3" className="w-full h-40 object-cover rounded-lg" />
            <img src={dmrc} alt="Customer Image 1" className="w-full h-40 object-cover rounded-lg" />
            <img src={mall} alt="Customer Image 4" className="w-full h-40 object-cover rounded-lg" />
            <img src={hospital} alt="Customer Image 5" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </div>
      </div>


      <BusinessBook />
    </div>
  );
};









// import React from "react";
// import wave from "../resource/wave_final.png";
// import { useState, useEffect,useRef  } from "react";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import bikeleft from "../resource/bike_left.jpeg";
// import bikeright from "../resource/bike_right.jpeg";
// import biketop from "../resource/bike_top.jpeg";
// import news from "../resource/news_clipping.png";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from "../resource/bike_main.png";
// import heroImg from "../resource/homehero.png";
// import Slider from "react-slick";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoChevronForwardCircleSharp } from "react-icons/io5";

// import { IoChevronBackCircle } from "react-icons/io5";

// export const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const goToPreviousVideo = () => {
//     if (currentVideoIndex === 1) {
//       video2Ref.current.pause();
//     } else {
//       video1Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const goToNextVideo = () => {
//     if (currentVideoIndex === 0) {
//       video1Ref.current.pause();
//     } else {
//       video2Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.min(1, prevIndex + 1));
//   };




//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? posts.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === posts.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWRQM0dndmFLSFNHTGhxUXpyUHhIUTFZAanRkcndmN1pzSll0M3RteXVaUWNMVW1KU3NVblJmdXYzYWM3QU40TnkzTDA5clMxbjQ3bXYwTGpwMFFvVWdndVF0NHFkQURZAX0lNM2dURlhKeDJJcklTdEZAvMmU5SUkZD`
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setPosts(data.data);
//         } else console.log("failed to fetch");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//     console.log(posts);
//   }, []);

//   useEffect(() => {
//     const divElement = document.getElementById("custom-slider");
//     if (divElement) {
//       divElement.style.display = "flex";
//       divElement.style.flexDirection = "row"; // Optional: Set flex direction to row
//     }
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="w-screen  overflow-hidden  min-[320px]:w-full ">
//       {/* Hero section */}
//       {/* <div className="hero min-[320px]:w-full min-[320px]:scale-[0.25] sm:scale-[1]  flex flex-col sm:h-screen justify-center items-center" >
//       <h1 className="text-4xl font-extrabold absolute top-32 font-serif text-center z-10 min-[320px]:text-4xl min-[320px]:top-5" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
//          <img
//           src={bike5}
//           className="z-40  lg:postion-relative lg:left-[270px] hover:lg:scale-[1.2] md:pt-[50px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[20%] scale-75 hover:scale-100 transition-all duration-500 min-[320px]:[5%]    "
//         />
//          <div className=" h-full w-full  flex flex-col justify-center items-center sm:absolute sm:scale-[0.47] md:absolute md:scale-[0.55] lg:absolute lg:scale-[1]">
//             <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
//            <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
//            <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "3px",
//             WebkitTextStrokeColor: "green",
//             }} >INNOVATE</h1>
//            <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
//            <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
//          </div>
//       </div> */}
//       <div className="w-screen h-full flex flex-col items-center justify-center">
//         <img src={heroImg} className="w-screen h-screen" loading="lazy" />
//         <img src={bike5} className="absolute" />
//       </div>
//       {/* About Us */}
//       <div className="about-us w-screen  flex flex-col mb-10 justify-center relative items-center   z-10 ">
//         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
//         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
//           <div className="text-4xl font-bold text-center">About us </div>
//           <div className="w-full text-center  sm:text-2xl min-[320px]:text-lg min-[320px]:leading-6">
//             KGV is a smart e-mobility solution provider that aims to cater to
//             the society as it reduces the immense burden on the middle and lower
//             segment of the community by reducing the cost of commuting by more
//             than 90%.{" "}
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div>
//       {/* Key benefits sections */}
//       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#56e422c4]  relative z-10 p-5 md:h-100 ">
//         <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
//           Key Benefits
//         </div>
//         <div className=" flex flex-col justify-start h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
//           {keyBenefits.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* Vision and mission */}
//       <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
//         <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
//           <div className="text-2xl font-bold uppercase mt-2 text-center">
//             {" "}
//             Vision{" "}
//           </div>

//           <div>
//             {" "}
//             We started from the bike and we’ll make its delivery shortly to all
//             the commuters worldwide.
//           </div>
//           <div>
//             Our team of engineering excellence is also working on bringing up
//             the system to each and every mode of transportation including{" "}
//             <span className="font-semibold">
//               3-wheelers, cars, LMVs, LCVs, and even HCVs.
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[90%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
//           <div className="text-2xl font-bold uppercase mt-5 text-center">
//             {" "}
//             Mission{" "}
//           </div>
//           <div>
//             To empower every common man in the world to save his/her hard earned
//             moneyspent on fossil fuels
//           </div>
//           <div>
//             To save mother Earth from air and noise pollutionas well as a green
//             and cleaner environment for saving life and humanity
//           </div>
//           <div>
//             To ensure trouble free and tension free drive to each and every
//             rider reducing the anxiety of being stuckanywhere in the middle of
//             his/her journey
//           </div>
//           <div>
//             To reduce the traveling cost of companies, corporate and enterprizes
//             by more than 90% and add to their profits
//           </div>
//           <div>
//             Our plug-in hybrid was designed to get to the battery fit our and
//             can be charged inside the home
//           </div>
//         </div>
//       </div>
//       {/* photo gallery */}
//       <div className="w-full lg:h-screen  bg-black relative z-10 pb-7 ">
//         <div className="flex flex-col justify-evenly  max-w-[1204px] mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             #KGVPhotoWall{" "}
//           </div>
//           <div className="w-full h-1/2 flex justify-evenly items-start gap-10 min-[320px]:flex-col sm:flex-row px-5">
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeleft}
//                 className=" w-full  mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="  w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeright}
//                 className=" w-full   mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={biketop}
//                 className=" w-full  mt-1  rounded-md  hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* social media gallery */}
//       <div className="w-full h-screen  bg-black relative z-10 pb-7 mt-7">
//         <div className="flex flex-col justify-evenly items-center gap-3 mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             Social Media Gallery{" "}
//           </div>
//           <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//           <div className="w-full h-full flex  justify-around items-center gap-5  px-5">
//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handlePrev}
//             >
//               <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//             </div>
//             <div className="w-10/12 relative">
//               {posts.map((el, index) => (
//                 <div
//                   key={el.id}
//                   className={`absolute top-0 left-0 w-full h-full  transition-transform duration-300 flex flex-row items-center justify-between ${
//                     index === currentIndex
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentIndex) * 100}%)`,
//                   }}
//                 >
//                   <img
//                     src={el.media_url}
//                     className="w-[40%] rounded-md"
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <div className="w-[40%] flex flex-col gap-5  items-center">
//                     <p className="text-white">{el.caption}</p>
//                     <Link to={el.permalink}>
//                       <button
//                         className="p-4  rounded-lg text-white font-semibold"
//                         style={{
//                           background:
//                             "linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)",
//                         }}
//                       >
//                         View On Instagram
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handleNext}
//             >
//               <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* recent achievement section  */}
//       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
//         <div className="uppercase text-3xl font-semibold pb-7 min-[320px]:text-lg min-[320px]:text-center sm:text-2xl md:text-3xl">
//           {" "}
//           Our Recent achievements...
//         </div>
//         <Link
//           className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
//           to={
//             "https://hindi.news18.com/news/auto/bike-will-run-100-km-in-just-rs-14-this-kit-will-make-bike-hybrid-8111585.html?1709286970"
//           }
//         >
//           <img
//             src={news}
//             className="w-[70%]  border-black border-2 rounded-md"
//             loading="lazy"
//           />
//         </Link>
//       </div>
//       {/* Media gallery */}
//       <div className="w-full lg:h-screen relative z-10 pb-7 mt-7 bg-black">
//       <div className="flex flex-col justify-evenly items-center gap-2 max-w-[1204px] mx-auto pt-8 h-full">
//         <div className="text-yellow-500 text-5xl font-extrabold text-center min-[320px]:text-3xl">
//           Media Gallery
//         </div>
//         <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//         <div className="w-full h-full flex justify-around items-center gap-10 sm:flex-row px-5">
//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToPreviousVideo}
//           >
//             <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//           </div>

//           <div className="w-10/12 relative flex justify-center items-center">
//             <video
//               ref={video1Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 0 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video1.mp4" type="video/mp4" />
//             </video>
//             <video
//               ref={video2Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 1 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video2.mp4" type="video/mp4" />
//             </video>
//           </div>

//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToNextVideo}
//           >
//             <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>

//       <div></div>
//       <BusinessBook />
//     </div>
//   );
// };
