/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { Link2, Settings, Zap } from 'lucide-react';

const HowGistlyWorksSection = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            id: 0,
            icon: <Link2 className="h-6 w-6" />,
            title: "Connect",
            description: "Connect your social media accounts and website in one click",
            detail: "Gistly integrates with WhatsApp, Instagram, Facebook and your website to capture leads from every channel."
        },
        {
            id: 1,
            icon: <Settings className="h-6 w-6" />,
            title: "Customize",
            description: "Customize your bot in just 3 clicks",
            detail: "Select your business type, tone of voice, and sales goals. Our AI handles the rest."
        },
        {
            id: 2,
            icon: <Zap className="h-6 w-6" />,
            title: "Launch",
            description: "Launch and start closing sales on autopilot",
            detail: "Watch as your chatbot engages customers, answers questions, and converts visitors into paying customers."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full py-16 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Chatbot in Minutes — No Code. No Stress.</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get your AI assistant up and running in just three simple steps
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Interactive Steps */}
                    <div className="w-full lg:w-2/5">
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`relative cursor-pointer transition-all duration-300 rounded-xl ${activeStep === step.id
                                            ? 'bg-white shadow-lg border-l-4 border-primary'
                                            : 'bg-white/50 hover:bg-white hover:shadow'
                                        }`}
                                    onClick={() => setActiveStep(step.id)}
                                >
                                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${activeStep === step.id
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-200 text-gray-600'
                                            }`}>
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="p-6 pl-8">
                                        <div className="flex items-center mb-2">
                                            <div className={`mr-3 ${activeStep === step.id ? 'text-primary' : 'text-gray-400'
                                                }`}>
                                                {step.icon}
                                            </div>
                                            <h3 className={`font-semibold text-lg ${activeStep === step.id ? 'text-primary' : 'text-gray-700'
                                                }`}>
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-700 font-medium">{step.description}</p>

                                        <div className={`mt-3 text-sm text-gray-600 transition-all duration-300 ${activeStep === step.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                            }`}>
                                            {step.detail}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="https://forms.gle/Y8f2c9uVUb7Xy4ts8" target="_blank" rel="noopener noreferrer" className="bg-orange hover:bg-orange/80 text-white py-3 px-8 rounded-full font-medium transition-colors duration-200 flex items-center justify-center">
                                Start Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Interactive Demo */}
                    <div className="w-full lg:w-3/5">
                        <div className="relative rounded-xl bg-white shadow-xl overflow-hidden border border-gray-200">
                            {/* Tabs Bar */}
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex">
                                <div className={`px-4 py-2 rounded-t-lg ${activeStep === 0 ? 'bg-white shadow-sm border-t border-l border-r border-gray-200' : 'cursor-pointer'}`}>
                                    Connect
                                </div>
                                <div className={`px-4 py-2 rounded-t-lg ${activeStep === 1 ? 'bg-white shadow-sm border-t border-l border-r border-gray-200' : 'cursor-pointer'}`}>
                                    Customize
                                </div>
                                <div className={`px-4 py-2 rounded-t-lg ${activeStep === 2 ? 'bg-white shadow-sm border-t border-l border-r border-gray-200' : 'cursor-pointer'}`}>
                                    Launch
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 h-96 overflow-hidden">
                                {/* Connect Step */}
                                <div className={`transition-all duration-500 h-full ${activeStep === 0 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-medium mb-2">Connect Your Channels</h4>
                                        <div className="flex flex-wrap gap-3">
                                            <div className="bg-white rounded-lg p-3 flex items-center w-full sm:w-auto border border-gray-200 hover:border-indigo-300 cursor-pointer transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-green-500 mr-3 flex items-center justify-center text-white font-bold">W</div>
                                                <span>WhatsApp</span>
                                                <span className="ml-2 text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Popular</span>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 flex items-center w-full sm:w-auto border border-gray-200 hover:border-indigo-300 cursor-pointer transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-purple-500 mr-3 flex items-center justify-center text-white font-bold">I</div>
                                                <span>Instagram</span>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 flex items-center w-full sm:w-auto border border-gray-200 hover:border-indigo-300 cursor-pointer transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-blue-500 mr-3 flex items-center justify-center text-white font-bold">F</div>
                                                <span>Facebook</span>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 flex items-center w-full sm:w-auto border border-gray-200 hover:border-indigo-300 cursor-pointer transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-bold">W</div>
                                                <span>Website</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg border border-dashed border-gray-300 p-4 flex items-center justify-center h-48">
                                        <img src="/api/placeholder/240/240" alt="Connect your channels" className="max-h-full" />
                                    </div>
                                </div>

                                {/* Customize Step */}
                                <div className={`transition-all duration-500 h-full ${activeStep === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-medium mb-2">Customize Your Bot</h4>
                                        <div className="space-y-4">
                                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
                                                    <option>Retail Store</option>
                                                    <option>Restaurant</option>
                                                    <option>Service Business</option>
                                                    <option>E-commerce</option>
                                                </select>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Tone of Voice</label>
                                                <div className="flex gap-2">
                                                    <button className="px-4 py-2 border rounded-full text-sm bg-indigo-50 border-indigo-200">Professional</button>
                                                    <button className="px-4 py-2 border border-gray-200 rounded-full text-sm">Friendly</button>
                                                    <button className="px-4 py-2 border border-gray-200 rounded-full text-sm">Casual</button>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Goal</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button className="px-4 py-2 border rounded-lg text-sm bg-indigo-50 border-indigo-200">Increase Sales</button>
                                                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm">Collect Leads</button>
                                                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm">Support Customers</button>
                                                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm">Book Appointments</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Launch Step */}
                                <div className={`transition-all duration-500 h-full ${activeStep === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-medium">Your Bot is Ready!</h4>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Online</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 h-64">
                                        <div className="w-1/2 bg-white rounded-lg border border-gray-200 p-4 h-full">
                                            <h5 className="font-medium text-sm mb-2">Performance Dashboard</h5>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Conversations</span>
                                                    <span className="font-medium">142</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Leads Generated</span>
                                                    <span className="font-medium">38</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Sales Closed</span>
                                                    <span className="font-medium">12</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Response Rate</span>
                                                    <span className="font-medium">98%</span>
                                                </div>
                                                <div className="h-16 bg-gray-100 rounded-lg flex items-end p-2">
                                                    <div className="w-1/7 h-4 bg-primary/20 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-8 bg-primary/30 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-6 bg-primary/40 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-10 bg-primary/50 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-12 bg-primary/60 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-8 bg-primary/50 rounded-sm mx-1"></div>
                                                    <div className="w-1/7 h-6 bg-primary/40 rounded-sm mx-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 bg-white rounded-lg border border-gray-200 flex flex-col h-full">
                                            <div className="bg-primary text-white p-3 rounded-t-lg">
                                                <div className="text-sm font-medium">Gistly Assistant</div>
                                            </div>
                                            <div className="flex-1 p-3 bg-gray-50 text-sm">
                                                <div className="mb-2 flex justify-end">
                                                    <div className="bg-gray-200 rounded-lg rounded-tr-none py-2 px-3 max-w-[80%] text-gray-800">
                                                        What time do you open tomorrow?
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="bg-indigo-100 rounded-lg rounded-tl-none py-2 px-3 max-w-[80%] text-gray-800">
                                                        We open at 9:00 AM tomorrow. Would you like to book an appointment?
                                                    </div>
                                                </div>
                                                <div className="mb-2 flex justify-end">
                                                    <div className="bg-gray-200 rounded-lg rounded-tr-none py-2 px-3 max-w-[80%] text-gray-800">
                                                        Yes please
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="bg-indigo-100 rounded-lg rounded-tl-none py-2 px-3 max-w-[80%] text-gray-800">
                                                        Great! I can help you with that. What time works best for you?
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 border-t border-gray-200">
                                                <div className="flex">
                                                    <input type="text" className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm" placeholder="Type your message..." />
                                                    <button className="bg-primary text-white px-4 py-2 rounded-r-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowGistlyWorksSection;