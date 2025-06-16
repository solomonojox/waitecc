import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const BottomCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('bottom-cta-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="bottom-cta-section"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-silver opacity-95"></div>
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-5 right-5 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
              Stop losing leads. {' '}
              <span className="relative inline-block">
                Let Gistly
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary rounded-full"></span>
              </span>
              {' '} close your next sale.
            </h2>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Start Free Trial Button */}
              <a href="https://forms.gle/yDjwCxPE2hBTahAo6" target="_blank" rel="noopener noreferrer" className="group w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary/85 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                Start now
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Get in Touch Button */}
              <button className="group w-full md:w-auto px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                onClick={() => window.open('https://forms.gle/yDjwCxPE2hBTahAo6', '_blank')}
              >
                Get in Touch
                <MessageCircle size={20} className="ml-2 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>

            {/* Social Proof or Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center">
              <div className="flex -space-x-2 overflow-hidden px-4 py-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 border-primary bg-white flex items-center justify-center text-xs font-bold text-primary`}
                  >
                    {String.fromCharCode(64 + index)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-white flex items-center justify-center text-xs font-bold text-primary">
                  +
                </div>
              </div>
              <p className="text-charcoal text-sm ml-2">
                Join hundreds of businesses already growing with Gistly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add animation keyframes for blobs - this would be added to your global CSS
const AnimationKeyframes = () => {
  return (
    <style jsx global>{`
      @keyframes blob {
        0% {
          transform: scale(1) translate(0px, 0px);
        }
        33% {
          transform: scale(1.1) translate(20px, -20px);
        }
        66% {
          transform: scale(0.9) translate(-20px, 20px);
        }
        100% {
          transform: scale(1) translate(0px, 0px);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  );
};

const BottomCTAWithAnimations = () => {
  return (
    <>
      <AnimationKeyframes />
      <BottomCTASection />
    </>
  );
};

export default BottomCTAWithAnimations;