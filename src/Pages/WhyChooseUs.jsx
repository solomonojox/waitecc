import { ArrowUpRight, BarChart3, Target, BrainCircuit } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-indigo-600" />,
      title: "Proven ROI",
      description: "AI-powered digital marketing solutions help businesses increase revenue by up to 30% while reducing advertising costs.",
    },
    {
      icon: <Target className="h-10 w-10 text-indigo-600" />,
      title: "Data Driven Growth",
      description: "Our SEO, PPC, and AI analytics optimize your campaigns for maximum visibility and lead generation.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-indigo-600" />,
      title: "Tailored Marketing Strategies",
      description: "Every business is unique, so we customize AI marketing solutions to meet your specific goals.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Why Choose Boakye?
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl shadow-lg flex flex-col items-center ">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's revolutionize your marketing and sales with AI-powered strategies.
            </h3>
            <a href='https://forms.gle/fr2Pi23Dco3sbySCA' className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
              Speak with our consultants today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;