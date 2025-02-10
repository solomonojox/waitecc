import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import assets from '../Assets/assets';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="font-sans bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 text-gray-900">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gray-200 text-center py-20 h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden p-6"
          style={{
            backgroundImage: `url(${assets.teamBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-800 opacity-70"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white animate-fade-in-down">
              Transforming Businesses with AI-Powered Strategies
            </h1>
            <p className="text-xl mb-6 text-gray-200 animate-fade-in-up">
              We are a team of visionary digital marketers, designers, and tech experts committed to growing your business.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white px-8 py-3 rounded-md hover:scale-110 transition transform duration-300">
              <a href="#team">Let's Talk</a>
            </button>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section id="team" className="bg-white py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Meet the Team
            </h2>
            <p className="mb-16 text-lg text-gray-600 lg:px-[18%]">
              Our team is made up of SEO experts, content creators, developers, and brand strategists dedicated to helping your business grow.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20">
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <img
                  className="w-[300px] h-[300px] rounded-full mx-auto mb-4 object-cover shadow-xl border-4"
                  src={assets.ceo}
                  alt="Chukwudumebi Nwosu"
                />
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-500">
                  Chukwudumebi Nwosu
                </h3>
                <p className="text-lg text-gray-500">Founder & Lead Strategist</p>
              </div>
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <img
                  className="w-[300px] h-[300px] rounded-full mx-auto mb-4 object-cover shadow-xl border-4 "
                  src={assets.solo}
                  alt="Solomon Akpas"
                />
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-500">
                  Solomon Akpas
                </h3>
                <p className="text-lg text-gray-500">Web Development Lead</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
