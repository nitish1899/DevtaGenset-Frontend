
import { useState } from "react";
import crausal8 from "../resource/crausal18.png";
import service2 from "../resource/service2.png";
import service3 from "../resource/service3.png";
import service4 from "../resource/service4.png";
import service5 from "../resource/service5.png";
import service6 from "../resource/service6.png";
import service7 from "../resource/service7.png";
import service8 from "../resource/service8.png";
import service9 from "../resource/service9.png";
import service11 from "../resource/service11.png";
import service13 from "../resource/service13.png";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dmrc from "../resource/dmrc images.jpg";
import coconstructionSite from "../resource/construction_sites.jpeg";
import factoryImage from "../resource/factory image.jpg";
import mall from "../resource/mall.jpg";
import hospital from "../resource/hospital.jpg";
import banquet from "../resource/banquet.png";

export const Service = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
      <div className="relative min-h-screen pt-24 bg-blue-400">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center z-0"
          style={{
            backgroundImage: `url(${crausal8})`,
            backgroundSize: 'cover',
          }}
        ></div>

        <header className="relative z-10 text-center mb-6 px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-bold"
            style={{
              textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)",
            }}
          >
            SERVICES WE PROVIDE
          </h1>
          <h2
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-8 sm:mt-12 md:mt-20 px-4 sm:px-8 md:px-16"
            style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            We provide comprehensive power solutions tailored to meet your energy needs.
            Whether you're seeking reliable backup power for your business, industrial site,
            or residential property, our expert team ensures you get the right solution for
            uninterrupted power. Our services include:
          </h2>
        </header>
      </div>



      {/* Key benefits section */}
      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          How can we help you
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Discover the benefits of our services and how they can improve your life.
          Here are some key benefits that make us stand out.
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
          {keyBenefits.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>

      {/* Key benefits section */}
      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Services
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Discover the benefits of our services and how they can improve your life.
          Here are some key benefits that make us stand out.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 m-16 mb-12 bg-black">
          {/* Map through all the cards */}
          {[
            { imgSrc: service2, title: '400 kVA Mahindra Powerol Diesel Generator', description: 'The 400 kVA Mahindra Powerol Diesel Generator is a robust and reliable power solution designed for heavy-duty applications...', expandedText: 'The 400 kVA Mahindra Powerol Diesel Generator is a robust and reliable power solution designed for heavy-duty applications. Known for its fuel efficiency, low noise operation, and superior performance, this generator is ideal for industrial, commercial, and emergency power needs.' },
            { imgSrc: service3, title: '1500 kVA Cummins Diesel Generator', description: 'The 1500 kVA Cummins Diesel Generator is a powerful, high-capacity generator engineered to deliver reliable and efficient power...', expandedText: 'The 1500 kVA Cummins Diesel Generator is a powerful, high-capacity generator engineered to deliver reliable and efficient power for large-scale industrial and commercial applications. Renowned for its exceptional performance, durability, and advanced engine technology...' },
            { imgSrc: service13, title: '500 kVA Cummins Diesel Generator', description: 'The 500 kVA Cummins Diesel Generator is a dependable and efficient power solution ideal for medium to large-scale operations...', expandedText: 'The 500 kVA Cummins Diesel Generator is a dependable and efficient power solution ideal for medium to large-scale operations. Known for its robust performance, superior fuel efficiency, and low maintenance, this generator is perfect for commercial, industrial, and backup power needs.' },
            { imgSrc: service4, title: 'Kirloskar Generator', description: 'Kirloskar Generators are renowned for their reliability, efficiency, and rugged performance across various power needs...', expandedText: 'Kirloskar Generators are renowned for their reliability, efficiency, and rugged performance across various power needs. Designed for industrial, commercial, and residential applications, these generators offer a wide range of power outputs, making them suitable for diverse requirements.' },
            { imgSrc: service5, title: '750 kVA Diesel Generator', description: 'The 750 kVA Diesel Generator is a high-capacity power solution ideal for large-scale industrial and commercial applications...', expandedText: 'The 750 kVA Diesel Generator is a high-capacity power solution ideal for large-scale industrial and commercial applications. Known for its superior performance, fuel efficiency, and robust construction, this generator provides reliable and continuous power, even in demanding environments.' },
            { imgSrc: service6, title: '250 kVA Diesel Generator', description: 'The 250 kVA Diesel Generator is a versatile and reliable power source designed to meet the demands of medium-sized commercial, industrial, and backup power needs...', expandedText: 'The 250 kVA Diesel Generator is a versatile and reliable power source designed to meet the demands of medium-sized commercial, industrial, and backup power needs. With excellent fuel efficiency, robust performance, and advanced control features, this generator ensures a stable and continuous power supply.' },
            { imgSrc: service7, title: '810 kVA Sudhir Silent Diesel Generator', description: 'The 810 kVA Sudhir Silent Diesel Generator is a high-performance power solution designed for applications requiring quiet operation...', expandedText: 'The 810 kVA Sudhir Silent Diesel Generator is a high-performance power solution designed for applications requiring quiet operation without compromising reliability. Engineered with advanced soundproofing technology, it minimizes noise levels, making it ideal for residential, commercial, and industrial use in noise-sensitive environments.' },
            { imgSrc: service8, title: '125 kVA Mahindra Powerol Gas Generator', description: 'The 125 kVA Mahindra Powerol Gas Generator is a reliable and efficient power solution ideal for both commercial and industrial applications...', expandedText: 'The 125 kVA Mahindra Powerol Gas Generator is a reliable and efficient power solution ideal for both commercial and industrial applications. Designed for low emissions and fuel efficiency, this generator operates quietly, making it suitable for noise-sensitive environments.' },
            { imgSrc: service9, title: '625 kVA Mahindra Powerol Diesel Generator', description: 'The 625 kVA Mahindra Powerol Diesel Generator is a powerful and reliable energy solution designed for industrial and commercial applications...', expandedText: 'The 625 kVA Mahindra Powerol Diesel Generator is a powerful and reliable energy solution designed for industrial and commercial applications. Engineered for optimal performance and efficiency, this generator ensures a consistent power supply in demanding environments.' },
            { imgSrc: service11, title: '125 kVA to 2500 kVA', description: 'All services are available.', expandedText: 'We offer a wide range of generators from 125 kVA to 2500 kVA, ensuring a reliable power solution for various industrial, commercial, and emergency applications.' }
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
              />
              <h4 className="font-bold mb-2">{card.title}</h4>
              <p className="text-gray-600">
                {isExpanded
                  ? card.expandedText
                  : card.description}
                <span
                  className="text-blue-500 cursor-pointer ml-2"
                  onClick={toggleContent}  // You can manage a global toggle state for all "See More" buttons
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </span>
              </p>
            </div>
          ))}

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



      <div className="flex flex-col min-h-fit w-full justify-items-center items-center py-2 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Customers
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-4 max-w-2xl">
          We take pride in serving a diverse group of customers who trust our services to enhance their work and life.
        </div>


        <div className="m-16 mt-4 mb-4 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <img
              src={coconstructionSite}
              alt="Customer Image 1"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <img
              src={factoryImage}
              alt="Customer Image 2"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <img
              src={dmrc}
              alt="Customer Image 3"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <img
              src={mall}
              alt="Customer Image 4"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <img
              src={hospital}
              alt="Customer Image 5"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <img
              src={banquet}
              alt="Customer Image 6"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>

      </div>

      <BusinessBook />
    </div>
  );
};

