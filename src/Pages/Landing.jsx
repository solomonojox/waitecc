import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer2 from "../Components/Footer";
import Header from "../Components/Navbar";
import assets from "../Assets/assets";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:flex items-center gap-8 justify-between">

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Elevate Your Brand with Cutting-Edge AI-Powered Digital Solutions
              </h1>
              <p className="text-lg mb-8">
                At <span className="font-semibold">Waitecc</span>, we blend human creativity with AI-driven digital tools to deliver high-performance marketing strategies that grow your brand, increase engagement, and drive conversions. Whether it's SEO optimization, content marketing, brand management, or social media strategy, we help businesses stay ahead in the digital age.
              </p>
              <a
                href="mailto:waiteccng@outlook.com"
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition-colors inline-flex items-center"
              >
                <FaEnvelope className="mr-2" /> Get a Free Consultation!
              </a>
              <div className="mt-8 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white" /> +234-810-582-6279, +234-807-799-3190
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-white" />
                  <a href="mailto:waiteccng@outlook.com" className="underline">
                    waiteccng@outlook.com
                  </a>
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
              <img
                src={assets.hero2}
                alt="AI Solutions"
                className="w-full max-w-lg shadow-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default LandingPage;
