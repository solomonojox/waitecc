import React from 'react';
import { Utensils, Heart, Brain, BookOpen, Apple, Users } from 'lucide-react';
import Navbar from '../Navbar';
// import feedingBg from '../Assets/feeding-bg.jpg'; // Replace with your actual image path

const FeedingTheFuture = () => {
    const handlePaystackRedirect = () => {
        window.open('https://paystack.shop/pay/redtqnozka', '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    // style={{ backgroundImage: `url(${feedingBg})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                        Feeding the Future
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-8">
                        Nourishing Potential, Every Day
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Proper nutrition is fundamental for a child's cognitive development and overall well-being.
                    </p>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Nutrition Initiative</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Addressing the critical need for consistent, nutritious meals in underserved communities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-green-50 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-green-500 text-white p-3 rounded-xl">
                                        <Utensils className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Ensuring Access to Nutritious Meals</h3>
                                </div>
                                <p className="text-gray-600">
                                    We work tirelessly to ensure children in remote and underserved areas receive access to nutritious meals daily. This vital support combats hunger, improves health outcomes, and enhances their ability to learn and concentrate in school.
                                </p>
                            </div>

                            <div className="bg-yellow-50 rounded-2xl p-8 mt-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-yellow-500 text-white p-3 rounded-xl">
                                        <Brain className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Supporting Cognitive Development</h3>
                                </div>
                                <p className="text-gray-600">
                                    By providing consistent nourishment, we directly contribute to the cognitive development of these children, empowering them to fully engage with their education and realize their academic potential.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Program Impact</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: <Apple className="w-6 h-6 text-green-500" />, text: "Serving over 5,000 meals daily across 12 communities" },
                                        { icon: <BookOpen className="w-6 h-6 text-green-500" />, text: "28% improvement in school test scores among participating students" },
                                        { icon: <Heart className="w-6 h-6 text-green-500" />, text: "Reduced malnutrition rates by 40% in program areas" },
                                        { icon: <Users className="w-6 h-6 text-green-500" />, text: "Training local community members in nutrition and food preparation" },
                                        { icon: <Utensils className="w-6 h-6 text-green-500" />, text: "Locally-sourced ingredients supporting regional farmers" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            {item.icon}
                                            <p className="text-gray-600 flex-1">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutrition Facts Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">The Power of Proper Nutrition</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            How daily meals transform lives and communities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hunger in Africa",
                                content: "1 in 4 African children suffers from chronic malnutrition, affecting their physical and mental development.",
                                stat: "1 in 4"
                            },
                            {
                                title: "Educational Impact",
                                content: "Well-nourished children show 20% better performance in school and are more likely to continue their education.",
                                stat: "20%"
                            },
                            {
                                title: "Our Reach",
                                content: "Each $1 invested in school meals yields $3-$10 in economic returns through improved health and education outcomes.",
                                stat: "3-10x"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-green-500 mb-4">{item.stat}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Feed a Child, Fuel a Future</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Your support provides more than meals—it gives children the energy to learn, grow, and thrive.
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto" onClick={handlePaystackRedirect}>
                        <Heart className="w-6 h-6" />
                        Make a donation now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FeedingTheFuture;