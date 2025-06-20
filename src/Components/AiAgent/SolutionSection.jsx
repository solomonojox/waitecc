import { useState, useEffect } from 'react';
import { MessageSquare, Clock, CreditCard, Code, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    // Simulate GIF by cycling through different features
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Animate section on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('solution-section');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const features = [
        {
            title: "One Inbox for All",
            description: "WhatsApp, Instagram, Facebook & Twitter",
            icon: <MessageSquare size={24} />,
        },
        {
            title: "24/7 AI Responses",
            description: "Smart AI that replies instantly – even at midnight",
            icon: <Clock size={24} />,
        },
        {
            title: "In-Chat Payments",
            description: "Collect payments right inside the chat",
            icon: <CreditCard size={24} />,
        },
        {
            title: "Zero Tech Hassle",
            description: "No code needed. No foreign tools required",
            icon: <Code size={24} />,
        }
    ];

    // Simulated GIF screens that would be replaced with actual GIF
    const screens = [
        <div key="auto-responses" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-xl h-full flex flex-col">
            <div className="mb-4 p-2 bg-white rounded-lg shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                </div>
                <div className="ml-3">
                    <p className="text-xs text-gray-500">New message from customer</p>
                    <p className="text-sm font-medium">Do you have this in blue?</p>
                </div>
            </div>

            <div className="mb-4 p-2 bg-blue-100 rounded-lg shadow-md flex items-center ml-auto max-w-xs">
                <div className="mr-3">
                    <p className="text-xs text-gray-500">AI Response</p>
                    <p className="text-sm font-medium">Yes, we do have it in blue! Would you like to see some pictures?</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                </div>
            </div>

            <div className="mt-auto text-center">
                <p className="text-sm font-medium text-indigo-600">Automated responses that sound human</p>
            </div>
        </div>,

        <div key="lead-capture" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-xl h-full flex flex-col">
            <div className="mb-4 p-2 bg-white rounded-lg shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                </div>
                <div className="ml-3">
                    <p className="text-xs text-gray-500">New lead</p>
                    <p className="text-sm font-medium">I'd like to know more about your service</p>
                </div>
            </div>

            <div className="mb-4 p-2 bg-purple-100 rounded-lg shadow-md flex items-center ml-auto max-w-xs">
                <div className="mr-3">
                    <p className="text-xs text-gray-500">AI Response</p>
                    <p className="text-sm font-medium">I'd be happy to help! Could I get your email to send you our brochure?</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                </div>
            </div>

            <div className="p-3 bg-white rounded-lg shadow-md">
                <p className="text-xs text-gray-500 mb-1">Lead Information Captured</p>
                <div className="flex items-center justify-between text-sm">
                    <span>Email:</span>
                    <span className="font-medium">customer@example.com</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span>Interest:</span>
                    <span className="font-medium">Service Information</span>
                </div>
            </div>

            <div className="mt-auto text-center">
                <p className="text-sm font-medium text-pink-600">Smart lead capture without forms</p>
            </div>
        </div>,

        <div key="payment" className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-xl h-full flex flex-col">
            <div className="mb-4 p-2 bg-white rounded-lg shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                </div>
                <div className="ml-3">
                    <p className="text-xs text-gray-500">Customer</p>
                    <p className="text-sm font-medium">I'd like to purchase the premium package</p>
                </div>
            </div>

            <div className="mb-4 p-2 bg-emerald-100 rounded-lg shadow-md flex items-center ml-auto max-w-xs">
                <div className="mr-3">
                    <p className="text-xs text-gray-500">AI Response</p>
                    <p className="text-sm font-medium">Great choice! I've created a payment link for you right here in our chat.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Premium Package</span>
                    <span className="font-bold">$99.00</span>
                </div>
                <div className="w-full h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-medium cursor-pointer">
                    Pay Now
                </div>
            </div>

            <div className="mt-auto text-center">
                <p className="text-sm font-medium text-teal-600">Seamless in-chat payments</p>
            </div>
        </div>
    ];

    return (
        <section
            id="solution-section"
            className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
                        <span className="bg-clip-text text-transparent bg-primary">
                            Automated. Local.
                        </span>
                        <span className="relative text-charcoal">
                            Revenue-Driven
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-center text-charcoal max-w-2xl mx-auto mb-16">
                        Transform your customer communication into a powerful sales and support channel
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                        <div className="lg:col-span-2 space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`p-5 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${activeFeature === index
                                            ? 'bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-orange transform -translate-x-1'
                                            : 'bg-white hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <div className="flex items-start">
                                        <div className={`p-3 rounded-lg ${activeFeature === index
                                                ? 'bg-orange text-white'
                                                : 'bg-silver text-orange'
                                            }`}>
                                            {feature.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-6">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8wDe6Eo_ksOqSVJmMUuCa1aOCyM9ajuO178YEc5XTCRayZA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full py-4 px-8 bg-primary hover:bg-primary/85 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                                    <span>See It In Action</span>
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 relative h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-500/5 rounded-2xl"></div>

                            <div className="relative h-full w-full p-6">
                                <div className="relative z-10 h-full w-full overflow-hidden rounded-xl shadow-2xl">
                                    <div className="absolute top-0 left-0 w-full h-12 bg-primary flex items-center px-4">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="ml-4 text-white font-medium">Customer Chat</div>
                                    </div>

                                    <div className="h-full pt-12 bg-gray-100">
                                        {screens[activeFeature]}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;