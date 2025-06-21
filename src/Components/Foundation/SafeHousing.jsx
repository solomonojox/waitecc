import React from 'react';
import { Home, Shield, Heart, BookOpen, Users, Wifi, Sun } from 'lucide-react';
// import housingBg from '../Assets/housing-bg.jpg'; 
import Navbar from '../Navbar';

const SafeHousing = () => {
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
                // style={{ backgroundImage: `url(${housingBg})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent">
                        Safe Housing for Growing Minds
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-8">
                        A Sanctuary for Success
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        For many vulnerable children, a stable and safe living environment is the first step towards academic and personal success.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Safe Housing Initiative</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide the essential foundation that transforms living spaces into launchpads for success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-orange-50 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-orange-500 text-white p-3 rounded-xl">
                                        <Home className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Building Shelters and Dormitories</h3>
                                </div>
                                <p className="text-gray-600">
                                    We construct and maintain comfortable, secure shelters and dormitories. These facilities offer a haven for children who lack stable homes, protecting them from the risks of inadequate housing.
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8 mt-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-500 text-white p-3 rounded-xl">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Offering Comfort, Safety, and Stability</h3>
                                </div>
                                <p className="text-gray-600">
                                    Beyond physical structures, we create environments that foster emotional well-being. These spaces provide the stability and peace of mind necessary for children to focus on their studies and personal growth, knowing they are in a secure place.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Impact of Safe Housing</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: <BookOpen className="w-6 h-6 text-orange-500" />, text: "87% improvement in school attendance among children in our housing programs" },
                                        { icon: <Heart className="w-6 h-6 text-orange-500" />, text: "Reduced stress levels and improved mental health outcomes" },
                                        { icon: <Users className="w-6 h-6 text-orange-500" />, text: "Stronger peer support networks and community building" },
                                        { icon: <Wifi className="w-6 h-6 text-orange-500" />, text: "Access to digital learning resources in dormitory common areas" },
                                        { icon: <Sun className="w-6 h-6 text-orange-500" />, text: "Solar-powered facilities ensuring consistent electricity" }
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

            {/* Why It Matters Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Safe Housing Matters</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The foundation for every child's success begins with basic needs being met
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Housing Crisis",
                                content: "Over 20 million children in sub-Saharan Africa lack access to safe, stable housing. This instability directly impacts their education and development.",
                                stat: "20M+"
                            },
                            {
                                title: "Educational Impact",
                                content: "Children without stable housing are 3x more likely to repeat grades and 4x more likely to drop out of school entirely.",
                                stat: "3x"
                            },
                            {
                                title: "Our Solution",
                                content: "Our dormitories have helped 92% of residents maintain consistent school attendance and improve academic performance.",
                                stat: "92%"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-orange-500 mb-4">{item.stat}</div>
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
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Help Us Build More Than Buildings</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Your support creates sanctuaries where children can thrive, learn, and dream without limits.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto" onClick={handlePaystackRedirect}>
                        <Heart className="w-6 h-6" />
                        Make a donation now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SafeHousing;