import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer2 from "../Components/Footer";
import Header from "../Components/Navbar";
import assets from "../Assets/assets";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              {/* 
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Elevate Your Brand with Cutting-Edge AI-Powered Digital Solutions
              </h1> */}
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                We Grow Your Brand's Revenue $$ with AI-Powered Digital Marketing Solutions
              </h1>
              {/* <p className="text-lg mb-8">
                At <span className="font-semibold">Waitecc</span>, we blend human creativity with AI-driven digital tools to deliver high-performance marketing strategies that grow your brand, increase engagement, and drive conversions. Whether it's SEO optimization, content marketing, brand management, or social media strategy, we help businesses stay ahead in the digital age.
              </p> */}
              <p className="text-lg mb-8">
              Our data-backed strategies ensure your business attracts the right audience, builds trust, and converts visitors into loyal clients.
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

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="md:px-4">
          <h1 className="text-3xl font-semibold text-center">What people say</h1>
          <p className="text-center mb-8">Discover what our satisfied customers have to say about our services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col items-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.kenedy} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-semibold text-white">Kennedy</h2>
              <p className="text-sm text-gray-200 font-medium">Brand: Ken Signature</p>
              <p className="text-gray-100 text-sm">"I’m really happy with the service. Everything went smoothly from start to finish. The team knows their stuff and really puts in the effort to deliver great results. Always there when needed. I definitely recommend their services anytime"</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col text-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.testimony2} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-semibold text-white">Isi</h2>
              <p className="text-sm text-gray-200 font-medium">Brand: Trisley Pharmacy and stores</p>
              <p className="text-gray-100 text-sm">"I'm blown away by the exceptional work you did on my website! From concept to launch, you were professional, responsive, and dedicated to delivering a top-notch product. The pricing is highly competitive yet with so much human face. 
              Your expertise and attention to detail and feedback are evident in every aspect of the site. I couldn't be happier with the final result."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col items-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.testimony3} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-semibold text-white">Ahmed Khan</h2>
              <p className="text-sm text-gray-200">United Arab Emirates</p>
              <p className="text-gray-100 text-sm">"A fantastic learning experience! The courses are practical, insightful, and well-structured."</p>
            </div>
          </div>
        </div>
      </section>


      <Footer2 />
    </div>
  );
};

export default LandingPage;
