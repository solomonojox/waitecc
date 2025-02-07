import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Team = () => {
  return (
    <div>
      <Navbar/>
      <div className="font-sans bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section id="hero" className="bg-gray-200 text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Transforming Businesses with AI-Powered Strategies</h1>
          <p className="text-xl mb-6">We are a team of visionary digital marketers, designers, and tech experts committed to growing your business.</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400">
            <a href="#contact">Let's Talk</a>
          </button>
        </section>

        {/* Meet the Team Section */}
        <section id="team" className="bg-white py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
            <p className="mb-12">Our team is made up of SEO experts, content creators, developers, and brand strategists dedicated to helping your business grow.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <img
                  className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                  src=""
                  alt=""
                />
                <h3 className="text-xl font-semibold">Chukwudumebi Nwosu</h3>
                <p className="text-lg">Founder & Lead Strategist</p>
              </div>
              <div className="text-center">
                <img
                  className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                  src=""
                  alt=""
                />
                <h3 className="text-xl font-semibold">Solomon Akpas</h3>
                <p className="text-lg">Web Development Lead</p>
              </div>
              <div className="text-center">
                <img
                  className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                  src=""
                  alt=""
                />
                <h3 className="text-xl font-semibold">Soji Babatunde</h3>
                <p className="text-lg">Graphics and Video Editor</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer/>
    </div>
  )
}

export default Team