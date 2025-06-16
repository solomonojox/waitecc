import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-white shadow-lg p-6 md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Simulated Chat Interface */}
          <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto md:h-64 rounded-xl overflow-hidden bg-white border border-gray-200 flex flex-col shadow-md">
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary to-primary/50 px-4 py-3 flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
              <p className="text-white font-medium text-sm">Gistli Assistant</p>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-3 overflow-y-auto bg-gray-50 flex flex-col gap-2">
              {/* Customer message */}
              <div className="flex justify-end">
                <div className="bg-gray-200 rounded-lg rounded-tr-none py-2 px-3 max-w-[80%]">
                  <p className="text-sm">Hi! I need info about your new spring collection</p>
                </div>
              </div>
              
              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-indigo-100 rounded-lg rounded-tl-none py-2 px-3 max-w-[80%]">
                  <p className="text-sm">Our Spring 2025 collection features 12 new products with natural ingredients. Would you like the catalog PDF?</p>
                </div>
              </div>
              
              {/* Customer follow-up */}
              <div className="flex justify-end">
                <div className="bg-gray-200 rounded-lg rounded-tr-none py-2 px-3 max-w-[80%]">
                  <p className="text-sm">Yes please! And do you have samples?</p>
                </div>
              </div>
              
              {/* Typing indicator */}
              <div className="flex mt-1">
                <div className="bg-gray-100 rounded-lg py-2 px-3 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse delay-150"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
            
            {/* Success indicator */}
            <div className="absolute bottom-3 right-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              Responding while offline
            </div>
          </div>
          
          {/* Testimonial content */}
          <div className="w-full md:w-3/5 space-y-4">
            <Quote className="text-primary h-10 w-10 opacity-50" />
            
            <p className="text-xl md:text-2xl font-medium text-charcoal leading-relaxed">
              "Since switching to Gistli, we respond 10x faster and close more deals—even while we're offline!"
            </p>
            
            <div className="flex items-center gap-3 pt-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-primary/75 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Ada</h4>
                <p className="text-charcoal text-sm">Owner of Ada's Beauty Place</p>
              </div>
            </div>
            
            <div className="pt-4">
              {/* Removed "Read full story" button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;