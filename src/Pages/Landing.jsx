// import React, { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import WhatsApp from "../Components/WhatsApp";
import Footer2 from "../Components/Footer";
import Header from "../Components/Navbar";
import assets from "../Assets/assets";
import WhyChooseUs from "./WhyChooseUs";
import ServicesPage from "./ServicesPage";
// import bg from '../Assets/bg.png'
import ChatAI from "../Components/ChatAI";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useCallback, useState } from "react";

const LandingPage = () => {
  const [showChat, setShowChat] = useState(false);

  const closeMenu = useCallback(() => {
    if (showChat) setShowChat(false);
  }, [showChat]);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="fixed right-6 bottom-2 z-50">
        <div onClick={() => setShowChat(!showChat)} className="cursor-pointer bg-white p-2 rounded-full shadow-xl border border-black">
          <IoChatbubbleEllipsesSharp className=" text-3xl text-blue-600 cursor-pointer" title="Chat" />
        </div>
        <p className="text-sm bg-white flex justify-center items-center rounded-full shadow-xl">Ask us</p>
      </div>

      {showChat && <ChatAI />}

      {showChat && <div className="fixed inset-0 bg-black bg-opacity-0 z-40" onClick={closeMenu}></div>}


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white flex items-center justify-center h-[100dvh] relative" style={{ background: `url(${assets.homeHero})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-800 opacity-70"></div>
        <div className="flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight lg:mb-6">
            A.I Powered Digital and Product Marketing Agency
          </h1>
          <p className="text-lg mb-2 lg:mb-8 lg:mx-[5%]">
            We Grow Your Brand's Revenue $$ with AI-Powered Digital Marketing Solutions. Our data-backed strategies ensure your business attracts the right audience, builds trust, and converts visitors into loyal clients.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://forms.gle/yDjwCxPE2hBTahAo6"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition-colors inline-flex justify-center items-center"
            >
              <FaEnvelope className="mr-2" /> Get a Free Consultation!
            </a>
            <WhatsApp />

          </div>
        </div>
      </div>

      <WhyChooseUs />

      <ServicesPage />

      {/* Client */}
      <div className="bg-gray-50 py-16 lg:py-36 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Brands our team has worked with</h2>
          <p className="text-lg text-gray-400 opacity-90 mb-12">
            Trusted by companies across various industries to deliver excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.albert} alt="Client 1 Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.brass} alt="Client 2 Logo" className="w-30 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.casiva} alt="Client 3 Logo" className="w-[135px] h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.eko} alt="Client 4 Logo" className="w-[135px] h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.uba} alt="Client 5 Logo" className="w-[135px] h-20 object-cover" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.landmall} alt="Client 6 Logo" className="w-[110px] h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.lekki} alt="Client 7 Logo" className="w-[165px] h-20 object-cover" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.real} alt="Client 8 Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.comp1} alt="Client 8 Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.comp2} alt="Client 8 Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.comp3} alt="Client 8 Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center">
              <img src={assets.comp4} alt="Client 8 Logo" className="w-20 h-20 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="md:px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">What people say</h1>
          <p className="text-lg text-gray-400 opacity-90 mb-12 text-center">Discover what our satisfied customers have to say about our services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col items-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.kenedy} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-serif font-semibold text-white">Kennedy</h2>
              <p className="text-lg font-serif text-gray-200 font-medium">Ken Signature</p>
              <p className="text-gray-100 text-sm">"I’m really happy with the service. Everything went smoothly from start to finish. The team knows their stuff and really puts in the effort to deliver great results. Always there when needed. I definitely recommend their services anytime"</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col text-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.testimony2} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-serif font-semibold text-white">Isi</h2>
              <p className="text-lg font-serif text-gray-200 font-medium">Trisley Pharmacy and stores</p>
              <p className="text-gray-100 text-sm">"I'm blown away by the exceptional work you did on my website! From concept to launch, you were professional, responsive, and dedicated to delivering a top-notch product. The pricing is highly competitive yet with so much human face.
                Your expertise and attention to detail and feedback are evident in every aspect of the site. I couldn't be happier with the final result."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex flex-col items-start glossy hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img src={assets.testimony3} alt="testimony img" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-serif font-semibold text-white">Ahmed Khan</h2>
              <p className="text-lg font-serif text-gray-200">United Arab Emirates</p>
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
