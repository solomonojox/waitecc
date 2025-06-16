/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Globe, CreditCard, Briefcase, BarChart2 } from 'lucide-react';

const WhyGistly = () => {
    const [visibleFeature, setVisibleFeature] = useState(0);
    const features = [
        {
            id: 0,
            icon: <CreditCard className="h-6 w-6" />,
            title: "Local Payment Options",
            description: "Pay seamlessly in Naira via Paystack & Flutterwave, eliminating foreign exchange barriers",
            highlight: "🇳🇬 Accepts Naira payments"
        },
        {
            id: 1,
            icon: <Globe className="h-6 w-6" />,
            title: "Nigerian Languages",
            description: "Connect with customers in Yoruba, Igbo, Hausa, Pidgin & more, expanding your market reach",
            highlight: "🌍 Speaks 4+ Nigerian languages"
        },
        {
            id: 2,
            icon: <Briefcase className="h-6 w-6" />,
            title: "SME Friendly Pricing",
            description: "Affordable plans designed specifically for the budgets of African small businesses",
            highlight: "💼 Affordable for SMEs"
        },
        {
            id: 3,
            icon: <BarChart2 className="h-6 w-6" />,
            title: "All-in-One Dashboard",
            description: "Track leads, monitor sales and manage customer conversations in a single interface",
            highlight: "📊 Tracks leads, sales & chats"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleFeature((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        Built for African Businesses, Not Silicon Valley
                    </h2>
                    <p className="text-lg text-charcoal max-w-3xl mx-auto">
                        Gistli AI understands the unique challenges and opportunities of doing business in
                        Africa
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    {/* Video/GIF demonstration area */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 border border-gray-200 shadow-lg">
                            {/* Mock device frame */}
                            <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-inner relative">
                                {/* Device header */}
                                <div className="h-10 bg-gray-800 w-full flex items-center px-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>

                                {/* Simulated content */}
                                <div className="p-6 h-full bg-gray-50">
                                    <div className="flex gap-8 h-full">
                                        {/* Sidebar */}
                                        <div className="hidden sm:block w-1/4 bg-white rounded-lg shadow p-4">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary/60"></div>
                                            <div className="space-y-3">
                                                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                                                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                                                <div className="h-4 bg-primary/30 rounded-full w-5/6"></div>
                                                <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
                                            </div>
                                        </div>

                                        {/* Main content area */}
                                        <div className="flex-1 flex flex-col">

                                            {/* Feature highlight */}
                                            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary mr-3">
                                                        {features[visibleFeature].icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-primary">
                                                            {features[visibleFeature].title}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            {features[visibleFeature].description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badge overlay */}
                        <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-emerald-400 text-white py-2 px-4 rounded-lg shadow-lg transform rotate-6 hidden md:block">
                            Made for Nigeria 🇳🇬
                        </div>
                    </div>

                    {/* Features list */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-charcoal mb-6">
                            How Gistly Works for You
                        </h3>

                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className={`p-5 rounded-lg border transition-all duration-300 ${visibleFeature === feature.id
                                            ? "border-primary/10 bg-primary/15 shadow-sm"
                                            : "border-gray-200 bg-white hover:border-indigo-200"
                                        }`}
                                    onClick={() => setVisibleFeature(feature.id)}
                                >
                                    <div className="flex items-start">
                                        <div
                                            className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${visibleFeature === feature.id
                                                    ? "bg-indigo-100 text-primary"
                                                    : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4
                                                className={`font-semibold ${visibleFeature === feature.id ? "text-primary" : "text-charcoal"
                                                    }`}
                                            >
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-600 mt-1">{feature.description}</p>
                                            <div className="mt-2 inline-block bg-primary/10 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {feature.highlight}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyGistly;