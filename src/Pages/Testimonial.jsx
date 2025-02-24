import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import assets from '../Assets/assets';

const testimonials = [
  {
    id: 1,
    content: "Cedar Blue Accountants helped us save thousands in taxes while improving cash flow. A game-changer!",
    author: "Sarah Johnson",
    position: "CEO, TechVision",
    avatar: assets.woman1
  },
  {
    id: 2,
    content: "Their financial strategy gave us a roadmap for growth and long-term success.",
    author: "Michael Chen",
    position: "CTO, Innovate Labs",
    avatar: assets.man1
  },
  {
    id: 3,
    content: "I've worked with many service providers, but none have delivered the quality and value that this team consistently provides.",
    author: "Amara Rodriguez",
    position: "Marketing Director, GrowthEdge",
    avatar: assets.woman2
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br py-16 px-4 rounded-xl shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-4 md:px-12">
            <div className="flex items-center justify-center py-8">
              <div className="w-full max-w-4xl bg-primary backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="relative z-10 w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 text-indigo-500">
                      <Quote size={24} />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-300 text-lg md:text-xl italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-indigo-400 text-sm">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-gray-900"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              /> 
            ))}
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* <div className="flex justify-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Trust', 'Quality', 'Innovation', 'Results'].map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-xl mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-white font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}