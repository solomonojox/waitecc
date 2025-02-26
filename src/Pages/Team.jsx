import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import assets from '../Assets/assets';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [expandedBios, setExpandedBios] = useState({
    ceo: false,
    lead: false
  });

  const toggleBio = (person) => {
    setExpandedBios(prev => ({
      ...prev,
      [person]: !prev[person]
    }));
  };

  const truncateText = (text, expanded, limit = 100) => {
    if (text.length <= limit || expanded) return text;
    return text.slice(0, limit) + '...';
  };

  const teamMembers = [
    {
      id: 'ceo',
      name: 'Chukwudumebi Nwosu',
      role: 'Founder & Lead Strategist',
      image: assets.ceo,
      bio: "Chukwudumebi a Results-driven digital marketing and IT professional with over a decade of professional experience in various sectors including digital marketing, sales, Information Technology, web design, graphic design, content creation, and banking etc. He has worked with brands in Nigeria, the USA and the UK. He seek an opportunity to apply his wealth of experience and knowledge for business expansion, and a position offering new challenges and opportunities for career growth and advancement."
    },
    {
      id: 'lead',
      name: 'Solomon Akpas',
      role: 'Web Development Lead',
      image: assets.solo,
      bio: "I am a Results-driven digital marketing and IT professional with over a decade of professional experience in various sectors including digital marketing, sales, Information Technology, web design, graphic design, content creation, and banking etc. I have worked with brands in Nigeria, the USA and the UK. I seek an opportunity to apply my wealth of experience and knowledge for business expansion, and a position offering new challenges and opportunities for career growth and advancement."
    }
  ];

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="font-sans bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 text-gray-900">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gray-200 text-center py-20 min-h-[80vh] md:min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-6"
          style={{
            backgroundImage: `url(${assets.teamBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-800 opacity-70"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white animate-fade-in-down">
              Transforming Businesses with AI-Powered Strategies
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 animate-fade-in-up">
              We are a team of visionary digital marketers, designers, and tech experts committed to growing your business.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:scale-110 transition transform duration-300">
              <a href="#team">Let's Talk</a>
            </button>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section id="team" className="bg-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Meet the Team
            </h2>
            <p className="mb-10 md:mb-16 text-base md:text-lg text-gray-600 md:px-10 lg:px-[18%]">
              Our team is made up of SEO experts, content creators, developers, and brand strategists dedicated to helping your business grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-20 max-w-5xl mx-auto">
              {teamMembers.map(member => (
                <div key={member.id} className="text-center group transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full mx-auto mb-4 object-cover shadow-xl border-4"
                      src={member.image}
                      alt={member.name}
                    />
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-purple-500">
                      {member.name}
                    </h3>
                    <p className="text-base md:text-lg text-gray-500 mb-3">{member.role}</p>
                    <div className="relative">
                      <p className="text-sm md:text-base text-gray-600 px-2 md:px-4">
                        {truncateText(member.bio, expandedBios[member.id])}
                      </p>
                      <button 
                        onClick={() => toggleBio(member.id)}
                        className="mt-2 flex items-center justify-center mx-auto text-purple-600 hover:text-purple-800 font-medium text-sm"
                      >
                        {expandedBios[member.id] ? (
                          <>See Less <ChevronUp className="ml-1 h-4 w-4" /></>
                        ) : (
                          <>See More <ChevronDown className="ml-1 h-4 w-4" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;